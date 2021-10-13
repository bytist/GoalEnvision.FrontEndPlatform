/* eslint-disable @typescript-eslint/camelcase */
import React, { useEffect } from 'react';
import {
  Col,
  Row,
  Form,
  Input,
  Button,
  Select,
  Divider,
  Empty,
  Typography,
  Layout,
  Tooltip
} from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { CreateModalStore } from '../../../../utils/contexts';
import { CreateModal, CreateHelp } from '../../../modals';
import {
  CreateOrgDetailsPageTextType,
  CreateOrgDetailsPageExitModalTextType
} from 'apps/frontend/types/texts';
import { checkIfInvalid } from "../../../../assets/functions";
import {
  DictionaryOrganizationRolesGroupsResponseType,
  DictionaryIndustriesResponseType,
  CreateOrganizationsQueryType
} from 'apps/frontend/services/http/types'

interface CreatePage {
  action: Function
  texts: CreateOrgDetailsPageTextType
  modalTexts: CreateOrgDetailsPageExitModalTextType
  rolesGroups?: Array<DictionaryOrganizationRolesGroupsResponseType>
  industries?: Array<DictionaryIndustriesResponseType>
  organization?: CreateOrganizationsQueryType
}

export const OrganizationDetails: React.FC<CreatePage> = ({
  action,
  modalTexts,
  texts,
  rolesGroups,
  industries,
  organization
}) => {
  const { Option, OptGroup } = Select;

  const { Text } = Typography;

  const [orgForm] = Form.useForm();

  const {
    button_back,
    button_next,
    button_save_later,
    form,
    text_under_logo,
    link_under_logo,
    text_help
  } = texts;

  const [saveDisabled, setSaveDisabled] = React.useState(true);

  const onFinish = (values) => {
    localStorage.removeItem('saved_org');
    action(2, values);
  };

  const saveForLater = () => {
    localStorage.setItem('saved_org', JSON.stringify(orgForm.getFieldsValue()));
    action(3)
  };

  const validateField = (rule: any, val: string) => {
    return new Promise<void>((resolve, reject) => {
      let invalid = false;
      if (!val || val.length < 3) {
        invalid = true;
      }
      if (invalid) {
        if (!saveDisabled) setSaveDisabled(true);
        reject(texts?.form?.[`input_${rule.field}`]?.error_length);
      } else {
        if (checkIfInvalid(orgForm)) {
          if (!saveDisabled) setSaveDisabled(true);
        } else if (saveDisabled) {
          setSaveDisabled(false);
        }
        resolve();
      }
    })
  };

  useEffect(() => {
    if (organization && organization.OrganizationName && saveDisabled) {
      setSaveDisabled(false);
      orgForm.resetFields();
    } else if (localStorage.getItem('saved_org')) {
      try {
        const values = JSON.parse(localStorage.getItem('saved_org'));
        organization = values;
        orgForm.setFieldsValue(values);
      } catch (err) {
        console.log(err)
      }
    } else {
      orgForm.resetFields();
    }
  }, [organization]);

  return (
    <>
      <CreateModal
        texts={modalTexts}
        action={action}
      />

      <CreateHelp text={text_help}/>

      <Layout style={{ height: '100%' }}>
        <Col lg={{ span: 20, offset: 2, flex: 1 }} xs={{ span: 24, offset: 0 }}>
          <Row>
            <Col lg={5} xs={0}/>

            <Col lg={{ span: 18, offset: 0 }} xs={{ span: 22, offset: 1 }}>
              <Form
                layout="vertical"
                form={orgForm}
                onFinish={(values) => onFinish(values)}
                style={{ marginTop: '100px', width: '100%' }}
                initialValues={organization}
              >
                <Row justify="space-between">
                  <Col lg={12} xs={24}>
                    <Form.Item>
                      <Form.Item
                        label={form?.input_OrganizationName?.label}
                        rules={[{
                          required: true,
                          message: ''
                        }, { validator: validateField }]}
                        style={{ marginBottom: 10 }}
                        name="OrganizationName"
                      >
                        <Input placeholder={form?.input_OrganizationName?.placeholder} />
                      </Form.Item>

                      <Tooltip title={form.text_add_more}>
                        <a href="#">{form.text_add_more}</a>
                      </Tooltip>
                    </Form.Item>

                    <Form.Item
                      label={form?.input_IndustryId?.label}
                      name="IndustryId"
                      rules={[{
                        required: true,
                        message: ''
                      }, { validator: validateField }]}
                    >
                      <Select allowClear placeholder={form?.input_IndustryId?.placeholder}>
                        {industries.map((industry) => {
                          return (
                            <Option key={`industry-${industry.id}`} value={industry.id}>{industry.name}</Option>
                          )
                        })}
                      </Select>
                    </Form.Item>

                    <Form.Item
                      label={form?.input_EmployeeCreatorRoleId?.label}
                      name="EmployeeCreatorRoleId"
                      rules={[{
                        required: true,
                        message: ''
                      }, { validator: validateField }]}
                    >
                      <Select allowClear placeholder={form?.input_EmployeeCreatorRoleId?.placeholder}>
                        {rolesGroups.map((roleGroup, i) => {
                          return (
                            <OptGroup key={`roleGroup-${roleGroup.id}`} label={roleGroup.name}>
                              {roleGroup.organizationRoles?.map((role, j) => {
                                return <Option key={`role-${i}${j}`} value={role.id}>{role.name}</Option>
                              })}
                            </OptGroup>
                          )
                        })}
                      </Select>
                    </Form.Item>
                  </Col>

                  <Col lg={{ span: 8, offset: 4 }} xs={{ span: 24, offset: 0 }}>
                    <Empty style={{ border: '1px solid rgba(0, 0, 0, 0.85)', margin: 0 }} description={false} />

                    <Row style={{ marginTop: 20 }}>
                      <Text>{text_under_logo}</Text>
                    </Row>

                    <Row>
                      <Button
                        type="link"
                        style={{ padding: '5px 0' }}
                        onClick={() => CreateModalStore.setShowCreateHelp(true)}
                      >
                        {link_under_logo.text}
                      </Button>
                    </Row>
                  </Col>
                </Row>

                <Divider />

                <Row justify="space-between">
                  <Col xs={14}>
                    <Button
                      style={{ background: 'none', border: 'none', boxShadow: 'none' }}
                      onClick={(): void => action(0)}
                    >
                      <LeftOutlined/> {button_back}
                    </Button>

                    <Button
                      onClick={saveForLater}
                      style={{ background: 'none', border: 'none', boxShadow: 'none' }}
                    >
                      {button_save_later}
                    </Button>
                  </Col>

                  <Col xs={10}>
                    <Form.Item>
                      <Button
                        type="primary"
                        shape="round"
                        htmlType="submit"
                        disabled={saveDisabled}
                        style={{ marginLeft: 'auto', display: 'block' }}
                      >
                        {button_next}
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Col>
      </Layout>
    </>
  )
};
