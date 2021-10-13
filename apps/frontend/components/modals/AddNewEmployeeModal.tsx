/* eslint-disable @typescript-eslint/camelcase */
import React, {useState} from "react";
import { observer } from 'mobx-react-lite';
import { Button, Form, Input, Modal, Row, Divider, Select, Popover, Card } from 'antd';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import { CreateModalStore } from '../../utils/contexts';
import { checkIfInvalid } from '../../assets';
import { CreateSuccessUnitsPageAddPeopleModalTextType } from 'apps/frontend/types/texts';
import {EmployeesResponseType, WorkGroupsResponseType} from "../../services/http/types";

interface AddPeopleModalProps {
  texts: CreateSuccessUnitsPageAddPeopleModalTextType,
  addHandler: Function,
  item?: EmployeesResponseType,
  groups?: Array<WorkGroupsResponseType>
  employers?: Array<EmployeesResponseType>
  usedGroups?: Array<WorkGroupsResponseType>
  openAddGroupAfter?: boolean
}

export const AddNewEmployeeModal: React.FC<AddPeopleModalProps> = observer(
  ({
     texts,
     addHandler,
     item,
     groups,
     employers,
     usedGroups,
     openAddGroupAfter
   }) => {
    const {
      modal_title,
      text_more,
      button_save,
      button_add_group,
      input_name,
      input_title,
      input_email,
      input_employerId
    } = texts;

    const [form] = Form.useForm();

    const [saveDisabled, setSaveDisabled] = React.useState(!item || !item.id);

    const { Option } = Select;

    const [localState, setLocalState] = useState({
      memberGroups: [] as WorkGroupsResponseType[],
      allGroups: [] as WorkGroupsResponseType[],
    });

    const validateField = (rule: any, val: string) => {
      return new Promise<void>((resolve, reject) => {
        let invalid = false;
        if (!val || val.length < 3) {
          invalid = true;
        }
        if (!invalid && rule.field === 'email') {
          invalid = !(val.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i));
        }
        if (invalid) {
          if (!saveDisabled) setSaveDisabled(true);
          reject(texts[`input_${rule.field}`]?.error_length);
        } else {
          if (checkIfInvalid(form)) {
            if (!saveDisabled) setSaveDisabled(true);
          } else if (saveDisabled) {
            setSaveDisabled(false);
          }
          resolve();
        }
      })
    };

    const onCancel = () => {
      addHandler(false)
        .then(() => {
          form.resetFields();
          setSaveDisabled(true);
          CreateModalStore.setShowAddNewEmployeeModal(false);
          if (openAddGroupAfter) CreateModalStore.setShowAddGroupModal(true);
        })
        .catch((error) => {
          console.log(error)
        })
    };

    const onFinish = (values) => {
      addHandler(values, localState.memberGroups, openAddGroupAfter)
        .then(() => {
          form.resetFields();
          setSaveDisabled(true);
          CreateModalStore.setShowAddNewEmployeeModal(false);
        })
        .catch((error) => {
          console.log(error)
        })
    };

    const hasEmployee = (group) => {
      let exists = false;
      if (!item || !item.id) return exists;
      exists = group?.employees?.some(e => {
        if (e.id === item.id) {
          return true;
        }
      });
      return exists;
    };

    const addMembership = (group) => {
      const allGroups = {};
      localState.allGroups.map(g => allGroups[g.id] = g);
      const memberGroups = {};
      localState.memberGroups.map(g => memberGroups[g.id] = g);
      delete allGroups[group.id];
      memberGroups[group.id] = group;
      setLocalState({
        memberGroups: Object.values(memberGroups),
        allGroups: Object.values(allGroups)
      });
    };

    const delMembership = (group) => {
      const allGroups = {};
      localState.allGroups.map(g => allGroups[g.id] = g);
      const memberGroups = {};
      localState.memberGroups.map(g => memberGroups[g.id] = g);
      delete memberGroups[group.id];
      allGroups[group.id] = group;
      setLocalState({
        memberGroups: Object.values(memberGroups),
        allGroups: Object.values(allGroups)
      })
    };

    React.useEffect(() => {
      if (item && item.id) {
        if (saveDisabled) setSaveDisabled(false);
        form.validateFields();
        const allGroups = {};
        const memberGroups = {};
        groups.map(g => {
          if (hasEmployee(g)) {
            memberGroups[g.id] = g;
          } else {
            allGroups[g.id] = g;
          }
        });
        setLocalState({
          memberGroups: Object.values(memberGroups),
          allGroups: Object.values(allGroups)
        })
      } else {
        const memberGroups = {};
        if (Array.isArray(usedGroups)) {
          usedGroups.map(g =>{
            if (g && g.id) memberGroups[g.id] = g
          });
        }
        const allGroups = {};
        groups.map(g => {
          if (!memberGroups[g.id]) allGroups[g.id] = g
        });
        setLocalState({
          memberGroups: Object.values(memberGroups),
          allGroups: Object.values(allGroups)
        })
      }
    }, [item, usedGroups, groups]);

    return (
      <Modal
        title={modal_title}
        visible={CreateModalStore.isAddNewEmployeeModalShowed()}
        onCancel={onCancel}
        width={400}
        footer={null}
        destroyOnClose
      >
        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          preserve={false}
          initialValues={item ? {
            id: item ? item.id : undefined,
            name: `${item.familyName} ${item.givenName ? item.givenName : ''}`.trim(),
            email: item.email ? item.email : item.formalEmail,
            title: item.formalTitle
          } : {}}
        >
          {item && item.id &&
          <Form.Item name="id" style={{ display: 'none' }}>
            <Input/>
          </Form.Item>
          }

          <Form.Item
            name="name"
            rules={[{ required: true, message: '' }, { validator: validateField }]}
            hasFeedback>
            <Input placeholder={input_name?.placeholder} />
          </Form.Item>

          <Form.Item
            name="title"
            rules={[{ required: true, message: '' }, { validator: validateField }]}
            hasFeedback>
            <Input placeholder={input_title?.placeholder} />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: '' }, { validator: validateField }
            ]}
            hasFeedback>
            <Input placeholder={input_email?.placeholder} />
          </Form.Item>

          <Form.Item>
            <Form.Item
              name="employerId"
              hasFeedback
              style={{ marginBottom: 5 }}
              rules={[
                { required: true, message: '' }, { validator: validateField }
              ]}
            >
              <Select allowClear placeholder={input_employerId?.placeholder}>
                {employers && employers.map((e, i) => {
                  return <Option key={`employer-${i}`} value={e.id}>{e.givenName + ' ' + e.familyName}</Option>
                })}
              </Select>
            </Form.Item>
            <Row justify="start">
              <a href="#">{text_more}</a>
            </Row>
          </Form.Item>

          {localState.memberGroups.length > 0 &&
            localState.memberGroups.map((group, i) => {
              return <Card
                key={`humanCurrentGroup-${i}`}
                style={{ marginBottom: 5, borderRadius: 8 }}
                bodyStyle={{ padding: '5px 10px' }}>
                <Row justify="space-between" align="middle">
                  {group.name}
                  <CloseOutlined onClick={() => delMembership(group)}/>
                </Row>
              </Card>
            })
          }

          {localState.allGroups.length > 0 &&
            <Form.Item>
              <Popover
                content={
                  <div style={{ maxHeight: 200, overflowY: 'auto' }}>
                    {localState.allGroups.map((group, i) => {
                      return <Row key={`popoverHumanGroup-${i}`}>
                        <Button type="text" onClick={() => addMembership(group)}>{group.name}</Button>
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
                  {button_add_group}
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
  }
);
