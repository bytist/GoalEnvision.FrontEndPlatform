/* eslint-disable @typescript-eslint/camelcase */
import React from "react";
import { observer } from 'mobx-react-lite';
import { Button, Form, Input, Modal, Divider, Select, Row } from 'antd';
import { CreateModalStore } from '../../utils/contexts';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import { CreateSuccessUnitsPageAddHeadModalTextType } from 'apps/frontend/types/texts';
import { checkIfInvalid } from "../../assets/functions";
import { EmployeesResponseType } from "../../services/http/types";

interface AddGroupModalProps {
  texts: CreateSuccessUnitsPageAddHeadModalTextType
  addHandler: Function
  item?: EmployeesResponseType
  employers?: Array<EmployeesResponseType>
}

export const AddNewHeadModal: React.FC<AddGroupModalProps> = observer(
  ({
     texts,
     addHandler,
     item,
     employers
  }) => {
  const [form] = Form.useForm();

  const [saveDisabled, setSaveDisabled] = React.useState(!item || !item.id);

  const { modal_title, button_save, input_name, input_title, input_email, input_employerId, text_more } = texts;

  const { Option } = Select;

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
        reject(texts[`input_${rule.field}`].error_length);
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
        CreateModalStore.setShowAddHeadModal(false);
      })
      .catch((error) => {
        console.log(error)
      })
  };

  const onFinish = (values) => {
    addHandler(values)
      .then(() => {
        form.resetFields();
        setSaveDisabled(true);
        CreateModalStore.setShowAddHeadModal(false);
      })
      .catch((error) => {
        console.log(error)
      })
  };

  React.useEffect(() => {
    if (item && Object.keys(item).length > 0) form.validateFields()
  }, [item]);

  return (
    <Modal
      title={modal_title}
      visible={CreateModalStore.isAddHeadModalShowed()}
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
          rules={[{ validator: validateField }]}
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
          rules={[{ required: true, message: '' }, { validator: validateField }]}
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
                return <Option key={`employer-${i}`} value={e.id}>{e.formalEmail ? e.formalEmail : e.email}</Option>
              })}
            </Select>
          </Form.Item>
          <Row justify="start">
            <a href="#">{text_more}</a>
          </Row>
        </Form.Item>

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
