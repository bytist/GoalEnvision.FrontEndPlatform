/* eslint-disable @typescript-eslint/camelcase */
import React, {useState} from "react";
import { observer } from 'mobx-react-lite';
import { Button, Form, Input, Modal, Row, Divider, Popover, Card } from 'antd';
import { CreateModalStore } from '../../utils/contexts';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import { CreateSuccessUnitsPageAddGroupModalTextType } from 'apps/frontend/types/texts';
import { EmployeesResponseType, WorkGroupsResponseType } from "../../services/http/types";

interface AddGroupModalProps {
  texts: CreateSuccessUnitsPageAddGroupModalTextType,
  addHandler: Function,
  addEmployeeInGroupModal: Function,
  item?: WorkGroupsResponseType,
  groups: Array<WorkGroupsResponseType>
  employees: Array<EmployeesResponseType>
}

export const AddGroupModal: React.FC<AddGroupModalProps> = observer(({
    texts,
    addHandler,
    addEmployeeInGroupModal,
    item,
    groups,
    employees
  }) => {
    const [form] = Form.useForm();

    const [saveDisabled, setSaveDisabled] = useState(!item || !item.name);

    const { modal_title, button_save, button_add_people, button_add_new_employee, input_name } = texts;

    const [members, setMembers] = useState([] as EmployeesResponseType[]);

    const validateName = (_, val: string) => {
      return new Promise<void>((resolve, reject) => {
        if (!val || val.length < 3) {
          if (!saveDisabled) setSaveDisabled(true);
          reject(input_name?.error_length)
        } else {
          const exists = groups.some((el) => {
            if ((!item || el.name !== item.name) && el.name.toLowerCase() === val.toLowerCase()) {
              return true
            }
          });
          if (exists) {
            if (!saveDisabled) setSaveDisabled(true);
            reject(input_name?.error_exists)
          } else {
            if (saveDisabled) setSaveDisabled(false);
            resolve()
          }
        }
      })
    };

    const onCancel = () => {
      addHandler(false)
        .then(() => {
          setMembers([]);
          form.resetFields();
          setSaveDisabled(true);
          CreateModalStore.setShowAddGroupModal(false);
        })
        .catch((error) => {
          console.log(error)
        })
    };

    const onFinish = (values: object) => {
      addHandler(values, members)
        .then(() => {
          setMembers([]);
          form.resetFields();
          setSaveDisabled(true);
          CreateModalStore.setShowAddGroupModal(false);
        })
        .catch((error) => {
          console.log(error)
        })
    };

    const addMembership = (h: EmployeesResponseType) => {
      const current = {};
      members.map(m => current[m.id] = m);
      current[h.id] = h;
      setMembers(Object.values(current));
    };

    const delMembership = (h: EmployeesResponseType) => {
      const current = {};
      members.map(m => current[m.id] = m);
      delete current[h.id];
      setMembers(Object.values(current));
    };

    const hasEmployee = (employee) => {
      let exists = members.some(m => {
        if (m.id === employee.id) {
          return true;
        }
      });
      return exists;
    };

    React.useEffect(() => {
      form.resetFields();
      if (item && Object.keys(item).length > 0) form.validateFields();
      const members = {};
      console.log(item);
      if (item && item.employees) {
        item.employees.map(e => members[e.id] = e)
      }
      setMembers(Object.values(members));
      form.setFieldsValue(item ? item : { name: '' });
    }, [item]);

    return (
      <Modal
        title={modal_title}
        visible={CreateModalStore.isAddGroupModalShowed()}
        onCancel={onCancel}
        width={400}
        footer={null}
        destroyOnClose
      >
        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          initialValues={item}
        >
          {item && item.id &&
            <Form.Item name="id" style={{ display: 'none' }}>
              <Input/>
            </Form.Item>
          }

          <Form.Item
            name="name"
            rules={[{ validator: validateName }]}
            hasFeedback>
            <Input placeholder={input_name?.placeholder} />
          </Form.Item>

          {Object.values(members).map((human, i) => {
            return <Card
              key={`currentPeople-${i}`}
              style={{ marginBottom: 5, borderRadius: 8 }}
              bodyStyle={{ padding: '5px 10px' }}>
              <Row justify="space-between" align="middle">
                {`${human.familyName} ${human.givenName ? human.givenName : ''}`.trim()}
                <CloseOutlined onClick={() => delMembership(human)}/>
              </Row>
            </Card>
          })}

          {employees && employees.length > 0 &&
            <Form.Item>
              <Popover
                content={
                  <div style={{ maxHeight: 200, overflowY: 'auto' }}>
                    <Row key={`popoverGroupEmpoyee-new`}>
                      <Button type="link" onClick={() => addEmployeeInGroupModal({
                        ...form.getFieldsValue(),
                        ...item,
                        employees: Object.values(members)
                      })} icon={<PlusOutlined/>}>
                        {button_add_new_employee}
                      </Button>
                    </Row>

                    {employees.map((human, i) => {
                      return (!hasEmployee(human)) &&
                        <Row key={`popoverGroupEmpoyee-${i}`}>
                          <Button type="text" onClick={() => addMembership(human)}>
                            {`${human.familyName} ${human.givenName ? human.givenName : ''}`.trim()}
                          </Button>
                        </Row>
                    })}
                  </div>
                }
                placement="bottom"
                trigger="click">
                <Button
                  type="link"
                  style={{textAlign: 'left', padding: '2px 0'}}
                  icon={<PlusOutlined/>}
                >
                  {button_add_people}
                </Button>
              </Popover>
            </Form.Item>
          }

          <Divider />

          <Button
            style={{ width: '100%', marginTop: 20 }}
            type="primary"
            shape="round"
            disabled={saveDisabled}
            htmlType="submit"
          >
            {button_save}
          </Button>
        </Form>
      </Modal>
    )
});
