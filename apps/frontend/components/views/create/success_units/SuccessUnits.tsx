import {
  AddEmployeeModal,
  AddGroupModal,
  AddHeadModal,
  AddNewEmployeeModal,
  AddNewHeadModal,
  ErrorModal,
} from '../../../modals'
import {
  Button,
  Card,
  Col,
  Divider,
  Dropdown,
  Form,
  Input,
  Layout,
  Menu,
  Row,
  Select,
  Tooltip,
} from 'antd'
import {
  CloseOutlined,
  MoreOutlined,
  PlusOutlined,
  UserOutlined,
} from '@ant-design/icons'
import {
  EmployeesResponseType,
  WorkGroupsResponseType,
} from '../../../../services/http/types'
/* eslint-disable @typescript-eslint/camelcase */
import React, { useEffect, useState } from 'react'
import { checkIfInvalid, goToSuccessUnits } from '../../../../assets/functions'

import { CreateModalStore } from '../../../../utils/contexts'
import { CreateSuccessUnitsPageTextType } from '../../../../types/texts'
import { EmployeeFormType } from '../../../../types/create_forms'
import { useRouter } from 'next/router'
import { useStore } from 'react-redux'

interface SuccessUnitsProps {
  loaded: boolean
  update: boolean
  texts: CreateSuccessUnitsPageTextType
  saveEmployee: Function
  saveWorkGroup: Function
  saveUnit: Function
  saveHead: Function
  deleteAction: Function
}

interface EmployeesState {
  [key: number]: EmployeesResponseType
}

interface WorkGroupsState {
  [key: number]: WorkGroupsResponseType
}

export const SuccessUnits: React.FC<SuccessUnitsProps> = ({
  texts,
  loaded,
  saveEmployee,
  saveWorkGroup,
  saveUnit,
  saveHead,
  update,
  deleteAction,
}) => {
  const {
    modals,
    text_learn_more,
    text_optional,
    button_cancel,
    button_save,
    button_edit,
    error_employee_add_default,
    unit_details,
    head_of_unit,
    work_groups,
    manager,
  } = texts

  const router = useRouter()

  const store = useStore()

  const { Option } = Select

  const [form] = Form.useForm()

  const [saveDisabled, setSaveDisabled] = useState(
    !!store.getState().createState.units[0]
  )

  const [showAddGroupAfter, setShowAddGroupAfter] = useState(false)

  const validateField = (rule: any, val: string) => {
    return new Promise<void>((resolve, reject) => {
      let invalid = false
      if (!val || val.length < 3) {
        invalid = true
      }
      if (invalid) {
        if (!saveDisabled) setSaveDisabled(true)
        reject(texts[`input_${rule.field}`]?.error_length)
      } else {
        if (checkIfInvalid(form)) {
          if (!saveDisabled) setSaveDisabled(true)
        } else if (saveDisabled) {
          setSaveDisabled(false)
        }
        resolve()
      }
    })
  }

  const [localState, setLocalState] = useState({
    employees: {} as EmployeesState,
    head: undefined as EmployeesResponseType,
    workGroups: {} as WorkGroupsState,
    selectedHead: undefined as EmployeesResponseType,
    selectedEmployee: undefined as EmployeesResponseType,
    selectedGroup: undefined as WorkGroupsResponseType,
    unsavedGroups: [],
    selectedGroups: [] as WorkGroupsResponseType[],
  })

  const editGroup = (group) => {
    setShowAddGroupAfter(true)
    setLocalState({
      ...localState,
      selectedGroup: group,
      selectedGroups: [group],
    })
    CreateModalStore.setShowAddGroupModal(true)
  }

  const editHead = (human) => {
    setShowAddGroupAfter(false)
    setLocalState({
      ...localState,
      selectedHead: human,
      selectedGroups: [],
    })
    CreateModalStore.setShowAddHeadModal(true)
  }

  const editHuman = (human) => {
    setShowAddGroupAfter(false)
    setLocalState({
      ...localState,
      selectedEmployee: human,
      selectedGroups: [],
    })
    CreateModalStore.setShowAddNewEmployeeModal(true)
  }

  const addEmployeeInGroupModal = (group) => {
    console.log('test', group)
    if (group) {
      setLocalState({
        ...localState,
        selectedGroup: group,
      })
    }
    CreateModalStore.setShowAddNewEmployeeModal(true)
  }

  const addGroup = (
    group: WorkGroupsResponseType,
    employees: Array<EmployeesResponseType>
  ) => {
    if (!showAddGroupAfter || !group) {
      setLocalState({
        ...localState,
        selectedGroup: undefined,
        selectedGroups: [],
      })
    }
    return new Promise<void>((resolve) => {
      if (group) {
        saveWorkGroup(group, employees).then((g) => {
          if (g && g.id) {
            setLocalState({
              ...localState,
              workGroups: {
                ...localState.workGroups,
                [g.id]: g,
              },
            })
          } else {
            setLocalState({
              ...localState,
              unsavedGroups: store.getState().createState.unsavedWorkGroups,
            })
          }
        })
      }
      setShowAddGroupAfter(false)
      resolve()
    })
  }

  const addHead = (head: EmployeeFormType) => {
    return new Promise<void>((resolve) => {
      saveHead(head).then((h) => {
        if (h && h.id) {
          setLocalState({
            ...localState,
            head: h,
          })
        }
      })
      setLocalState({
        ...localState,
        selectedHead: undefined,
        selectedGroups: [],
      })
      resolve()
    })
  }

  const showError = (title: string, text: string) => {
    setError({
      text: text,
      title: title,
    })
    CreateModalStore.setShowErrorModal(true)
  }

  const addHuman = (
    human: EmployeeFormType,
    groups: WorkGroupsResponseType[],
    showAddGroupAfter: false
  ) => {
    return new Promise<void>((resolve) => {
      const asKeyEmployee =
        !localState.selectedGroups || localState.selectedGroups.length === 0
      setLocalState({
        ...localState,
        selectedEmployee: undefined,
        selectedGroups: [],
      })
      if (human) {
        saveEmployee(human, groups, asKeyEmployee).then((h) => {
          if (h && h.id) {
            const workGroups = localState.workGroups
            if (groups) {
              groups.map((g) => {
                if (workGroups[g.id]) {
                  if (!g.employees) g.employees = []
                  let exists = false
                  g.employees.map((e) => {
                    if (e.id === h.id) {
                      exists = true
                      return true
                    }
                  })
                  if (!exists) g.employees.push(h)
                }
              })
            }
            if (asKeyEmployee) {
              setLocalState({
                ...localState,
                workGroups: workGroups,
                employees: {
                  ...localState.employees,
                  [h.id]: h,
                },
              })
            } else {
              setLocalState({
                ...localState,
                workGroups: workGroups,
              })
            }
            if (showAddGroupAfter) {
              const employees =
                localState.selectedGroup && localState.selectedGroup.employees
                  ? localState.selectedGroup.employees
                  : []
              console.log(employees)
              setLocalState({
                ...localState,
                selectedGroup: {
                  ...localState.selectedGroup,
                  employees: [...employees, ...[h]],
                },
              })
              CreateModalStore.setShowAddGroupModal(true)
            }
          } else if (h.Message) {
            showError(error_employee_add_default, h.Message)
          }
        })
      }
      resolve()
    })
  }

  const addExistingHuman = (human: EmployeesResponseType) => {
    setLocalState({
      ...localState,
      employees: {
        ...localState.employees,
        [human.id]: human,
      },
    })
  }

  const addExistingHead = (human: EmployeesResponseType) => {
    setLocalState({
      ...localState,
      head: human,
    })
  }

  const addMemberToGroup = (group: EmployeesResponseType) => {
    setLocalState({
      ...localState,
      selectedGroups: group ? [group] : [],
    })
    setShowAddGroupAfter(false)
    CreateModalStore.setShowAddNewEmployeeModal(true)
  }

  const delMemberFromGroup = (
    group: WorkGroupsResponseType,
    humanIndex: number
  ) => {
    if (group && group.employees) {
      group.employees.splice(humanIndex, 1)
      setLocalState({
        ...localState,
        workGroups: {
          ...localState.workGroups,
          [group.id]: group,
        },
      })
    }
  }

  const delHead = (index: number) => {
    setLocalState({
      ...localState,
      selectedHead: undefined,
      head: undefined,
    })
    deleteAction(index, 'head')
  }

  const delGroup = (group: WorkGroupsResponseType) => {
    const workGroups = localState.workGroups
    delete workGroups[group.id]
    setLocalState({
      ...localState,
      workGroups: workGroups,
    })
    deleteAction(group.id, 'workGroup')
  }

  const delMember = (index: number) => {
    const employees = localState.employees
    delete employees[index]
    setLocalState({
      ...localState,
      employees: employees,
    })
    deleteAction(index, 'employee')
  }

  useEffect(() => {
    if (loaded) {
      const state = store.getState().createState
      const unit = state.units[0]
      const employees = {}
      const groups = {}
      // const unsaved = state.unsavedWorkGroups;
      let head = undefined
      form.resetFields()
      if (unit) {
        if (unit.headEmployeeId && state.allEmployees) {
          state.allEmployees.some((e) => {
            if (e.id === unit.headEmployeeId) {
              head = e
              return true
            }
          })
        }
        if (unit.keyEmployees) {
          unit.keyEmployees.map((e) => {
            employees[e.id] = e
          })
        }
        if (unit.workGroups) {
          unit.workGroups.map((g) => {
            groups[g.id] = g
          })
        }
        if (state.workGroups) {
          state.workGroups.map((g) => {
            groups[g.id] = g
          })
        }
      }
      setLocalState({
        ...localState,
        employees: employees,
        workGroups: groups,
        head: head,
        // unsavedGroups: unsaved
      })
    }
  }, [loaded, update])

  useEffect(() => {
    form.resetFields()
    if (!saveDisabled && !store.getState().createState.units[0]) {
      setSaveDisabled(true);
    } else if (saveDisabled && store.getState().createState.units[0] && store.getState().createState.units[0].name.length) {
      setSaveDisabled(false);
    }
  }, [store.getState().createState.units[0]])

  const [error, setError] = useState({
    title: '',
    text: '',
  })

  return (
    <>
      <ErrorModal errorText={error.text} errorTitle={error.title} />

      <AddGroupModal
        texts={modals.add_group_modal}
        groups={Object.values(localState.workGroups)}
        employees={store.getState().createState.allEmployees}
        item={localState.selectedGroup}
        addEmployeeInGroupModal={addEmployeeInGroupModal}
        addHandler={addGroup}
      />

      <AddNewHeadModal
        texts={modals.add_head_modal}
        item={localState.selectedHead}
        employers={store.getState().createState.allEmployees}
        addHandler={addHead}
      />

      <AddHeadModal
        texts={modals.add_head_modal}
        employees={store.getState().createState.allEmployees}
        currentEmployees={localState.head ? [localState.head] : []}
        addHandler={addExistingHead}
      />

      <AddNewEmployeeModal
        texts={modals.add_people_modal}
        groups={Object.values(localState.workGroups)}
        employers={store.getState().createState.allEmployees}
        item={localState.selectedEmployee}
        usedGroups={localState.selectedGroups}
        openAddGroupAfter={showAddGroupAfter}
        addHandler={addHuman}
      />

      <AddEmployeeModal
        texts={modals.add_people_modal}
        employees={store.getState().createState.allEmployees}
        currentEmployees={localState.employees}
        addHandler={addExistingHuman}
      />

      <Layout style={{ height: '100%' }}>
        <Col lg={{ span: 20, offset: 2, flex: 1 }} xs={{ span: 24, offset: 0 }}>
          <Row>
            <Col lg={5} xs={0} />

            <Col lg={{ span: 18, offset: 0 }} xs={{ span: 22, offset: 2 }}>
              <Form
                layout="vertical"
                form={form}
                initialValues={
                  store.getState().createState.units[0]
                    ? {
                        name: store.getState().createState.units[0]?.name,
                        unitType: store.getState().createState.units[0]
                          ?.unitType?.id,
                      }
                    : {}
                }
                onFinish={(values) =>
                  saveUnit(values, {
                    employees: Object.values(localState.employees),
                    workGroups: Object.values(localState.workGroups),
                    head: localState.head,
                  }).then((u) => {
                    if (u && u.id) {
                      goToSuccessUnits(router, router.query.org)
                    }
                  })
                }
                style={{ marginTop: '40px', width: '100%' }}
              >
                <Row justify="space-between">
                  <Col lg={10} xs={24}>
                    <Form.Item style={{ marginBottom: 10 }}>
                      <Row align="middle" style={{ paddingBottom: 10 }}>
                        <Col style={{ fontSize: 24 }} lg={12}>
                          {unit_details.label}
                        </Col>

                        <Col lg={12} style={{ textAlign: 'right' }}>
                          <Tooltip title={text_learn_more}>
                            <a href=" #">{text_learn_more}</a>
                          </Tooltip>
                        </Col>
                      </Row>

                      <Form.Item
                        name="name"
                        rules={[
                          { required: true, message: '' },
                          { validator: validateField },
                        ]}
                      >
                        <Input
                          placeholder={unit_details?.input_name?.placeholder}
                        />
                      </Form.Item>
                    </Form.Item>

                    <Form.Item
                      name="unitType"
                      rules={[
                        { required: true, message: '' },
                        { validator: validateField },
                      ]}
                    >
                      <Select
                        placeholder={unit_details?.input_type?.placeholder}>
                        {store.getState().createState.unitTypes.map(unitType => {
                          return <Option
                            key={`unitType-${unitType.id}`}
                            value={unitType.id}>
                              {unitType.name}
                            </Option>
                        })}
                      </Select>
                    </Form.Item>

                    <Row
                      align="middle"
                      style={{ marginTop: 40, paddingBottom: 5 }}
                    >
                      <Col style={{ fontSize: 24 }} lg={12}>
                        {head_of_unit.label}
                      </Col>

                      <Col lg={12} style={{ textAlign: 'right' }}>
                        <Tooltip title={text_optional}>{text_optional}</Tooltip>
                      </Col>
                    </Row>

                    {!localState.head && (
                      <Form.Item>
                        <Button
                          type="link"
                          style={{ textAlign: 'left', padding: '2px 0' }}
                          onClick={(): void => {
                            editHead(undefined);
                            setShowAddGroupAfter(false);
                            // CreateModalStore.setShowChooseHeadModal(true)
                            CreateModalStore.setShowAddHeadModal(true)
                          }}
                          icon={<PlusOutlined />}
                        >
                          {head_of_unit.button_add}
                        </Button>
                      </Form.Item>
                    )}

                    {localState.head && (
                      <Form.Item style={{ marginTop: 5 }}>
                        <Card
                          key={`cardHead${localState.head.id}`}
                          style={{ marginBottom: 5, borderRadius: 8 }}
                          bodyStyle={{ padding: '5px 10px' }}
                        >
                          <Row justify="space-between" align="middle">
                            <Col>
                              <UserOutlined style={{ marginRight: 5 }} />
                              <b style={{ fontSize: 16, marginRight: 5 }}>
                                {`${localState.head.familyName} ${
                                  localState.head.givenName
                                    ? localState.head.givenName
                                    : ''
                                }`.trim()}
                              </b>
                              <span style={{ fontSize: 12 }}>
                                {localState.head.formalTitle}
                              </span>
                            </Col>

                            <Col>
                              <CloseOutlined
                                onClick={() => delHead(localState.head.id)}
                              />

                              <Dropdown
                                overlay={
                                  <Menu>
                                    <Menu.Item
                                      key={`head${localState.head.id}`}
                                      onClick={() => {
                                        editHead(localState.head)
                                      }}
                                    >
                                      {button_edit}
                                    </Menu.Item>
                                  </Menu>
                                }
                                trigger={['click']}
                              >
                                <MoreOutlined />
                              </Dropdown>
                            </Col>
                          </Row>
                        </Card>
                      </Form.Item>
                    )}

                    <Row
                      align="middle"
                      style={{ marginTop: 40, paddingBottom: 5 }}
                    >
                      <Col style={{ fontSize: 24 }} span={24}>
                        {manager.label}
                      </Col>
                    </Row>

                    {Object.values(localState.employees).length > 0 && (
                      <Form.Item style={{ marginBottom: 5 }}>
                        {Object.values(localState.employees).map((human, i) => {
                          return (
                            <Card
                              key={`cardHuman${i}`}
                              style={{ marginBottom: 5, borderRadius: 8 }}
                              bodyStyle={{ padding: '5px 10px' }}
                            >
                              <Row justify="space-between" align="middle">
                                <Col>
                                  <UserOutlined style={{ marginRight: 5 }} />
                                  <b style={{ fontSize: 16, marginRight: 5 }}>
                                    {`${human.familyName} ${
                                      human.givenName ? human.givenName : ''
                                    }`.trim()}
                                  </b>
                                  <span style={{ fontSize: 12 }}>
                                    {human.formalTitle}
                                  </span>
                                </Col>

                                <Col>
                                  <CloseOutlined
                                    onClick={() => delMember(human.id)}
                                  />

                                  <Dropdown
                                    overlay={
                                      <Menu>
                                        <Menu.Item
                                          key={`people${i}`}
                                          onClick={() => {
                                            editHuman(human)
                                          }}
                                        >
                                          {button_edit}
                                        </Menu.Item>
                                      </Menu>
                                    }
                                    trigger={['click']}
                                  >
                                    <MoreOutlined />
                                  </Dropdown>
                                </Col>
                              </Row>
                            </Card>
                          )
                        })}
                      </Form.Item>
                    )}

                    <Form.Item>
                      <Button
                        type="link"
                        style={{ textAlign: 'left', padding: '2px 0' }}
                        onClick={(): void => {
                          setLocalState({
                            ...localState,
                            selectedEmployee: undefined,
                          })
                          setShowAddGroupAfter(false)
                          CreateModalStore.setShowAddEmployeeModal(true)
                        }}
                        icon={<PlusOutlined />}
                      >
                        {manager.button_add}
                      </Button>
                    </Form.Item>
                  </Col>

                  <Col lg={11} xs={24}>
                    <Row align="middle" style={{ paddingBottom: 5 }}>
                      <Col style={{ fontSize: 24 }} lg={12}>
                        {work_groups.label}
                      </Col>

                      <Col lg={12} style={{ textAlign: 'right' }}>
                        <Tooltip title={text_learn_more}>
                          <a href=" #">{text_learn_more}</a>
                        </Tooltip>
                      </Col>
                    </Row>

                    {Object.values(localState.workGroups).length > 0 && (
                      <Form.Item style={{ margin: '5px 0 5px' }}>
                        {Object.values(localState.workGroups).map(
                          (group, i) => {
                            return (
                              <Card
                                key={`cardGroup${i}`}
                                style={{ marginBottom: 5, borderRadius: 8 }}
                                bodyStyle={{ padding: '5px 10px' }}
                              >
                                <Row justify="space-between" align="middle">
                                  <b style={{ fontSize: 16 }}>{group.name}</b>

                                  <Dropdown
                                    overlay={
                                      <Menu>
                                        <Menu.Item
                                          onClick={() => {
                                            editGroup(group)
                                          }}
                                        >
                                          {button_edit}
                                        </Menu.Item>
                                        <Menu.Item
                                          onClick={() => {
                                            delGroup(group)
                                          }}
                                        >
                                          {'Delete'}
                                        </Menu.Item>
                                      </Menu>
                                    }
                                    trigger={['click']}
                                  >
                                    <MoreOutlined />
                                  </Dropdown>
                                </Row>

                                {group.employees &&
                                  group.employees.map((human, j) => {
                                    return (
                                      <Card
                                        key={`cardHumanInGroup${j}`}
                                        style={{
                                          margin: '5px 5px 5px 0',
                                          borderRadius: 8,
                                        }}
                                        bodyStyle={{ padding: '5px 10px' }}
                                      >
                                        <Row
                                          justify="space-between"
                                          align="middle"
                                        >
                                          <Col>
                                            <UserOutlined
                                              style={{ marginRight: 5 }}
                                            />
                                            <b
                                              style={{
                                                fontSize: 16,
                                                marginRight: 5,
                                              }}
                                            >
                                              {`${human.familyName} ${
                                                human.givenName
                                                  ? human.givenName
                                                  : ''
                                              }`.trim()}
                                            </b>
                                            <span style={{ fontSize: 12 }}>
                                              {human.formalTitle}
                                            </span>
                                          </Col>

                                          <Col>
                                            <CloseOutlined
                                              onClick={() =>
                                                delMemberFromGroup(group, j)
                                              }
                                            />

                                            <Dropdown
                                              overlay={
                                                <Menu>
                                                  <Menu.Item
                                                    key={`human${i}${j}`}
                                                    onClick={() => {
                                                      editHuman(human)
                                                    }}
                                                  >
                                                    {button_edit}
                                                  </Menu.Item>
                                                </Menu>
                                              }
                                              trigger={['click']}
                                            >
                                              <MoreOutlined />
                                            </Dropdown>
                                          </Col>
                                        </Row>
                                      </Card>
                                    )
                                  })}

                                <Button
                                  type="link"
                                  style={{
                                    textAlign: 'left',
                                    padding: '2px 0',
                                  }}
                                  onClick={(): void => addMemberToGroup(group)}
                                  icon={<PlusOutlined />}
                                >
                                  {manager.button_add}
                                </Button>
                              </Card>
                            )
                          }
                        )}
                      </Form.Item>
                    )}

                    <Form.Item>
                      <Button
                        type="link"
                        style={{ textAlign: 'left', padding: '2px 0' }}
                        onClick={(): void => {
                          editGroup(undefined)
                          setShowAddGroupAfter(true)
                          setLocalState({
                            ...localState,
                            selectedGroup: undefined,
                          })
                          CreateModalStore.setShowAddGroupModal(true)
                        }}
                        icon={<PlusOutlined />}
                      >
                        {work_groups.button_add}
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>

                <Divider />

                <Row justify="space-between">
                  <Col xs={14}>
                    <Button
                      type="text"
                      onClick={() => goToSuccessUnits(router, router.query.org)}
                    >
                      {button_cancel}
                    </Button>
                  </Col>

                  <Col xs={10}>
                    <Form.Item>
                      <Button
                        type="primary"
                        shape="round"
                        htmlType="submit"
                        disabled={saveDisabled}
                        style={{
                          marginLeft: 'auto',
                          display: 'block',
                          width: 200,
                        }}
                      >
                        {button_save}
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
}
