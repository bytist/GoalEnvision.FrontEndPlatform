import { Button, Card, Col, Divider, Progress, Row, Typography } from 'antd'
import {
  CaretRightOutlined,
  PlusOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { DiagramConnectorType, DiagramNode, SuccessDiagram } from '../create'
/* eslint-disable @typescript-eslint/camelcase */
import React, { useEffect, useState } from 'react'
import { goToOrganization, goToUnit } from '../../../assets/functions'
import { useDispatch, useStore } from 'react-redux'

import { ActionTypes } from '../../../store/types'
import { AddNewEmployeeModal } from '../../modals'
import { CreateModalStore } from '../../../utils/contexts'
import { CreateSuccessUnitsPageAddPeopleModalTextType } from '../../../types/texts'
import { EmployeeFormType } from '../../../types/create_forms'
import LinkNext from 'next/link'
import { Node } from 'react-flow-renderer'
import { createActions } from '../../../store/modules/create'
import { useAuth0 } from '@auth0/auth0-react'
import { useRouter } from 'next/router'

interface GoalStatusOverviewCardType {
  __typename?: 'GoalStatusOverviewCard'
  title?: string
  text?: string
  button?: string
}

interface GoalStatusOverviewTypesProps {
  cards: Array<GoalStatusOverviewCardType>
  texts: {
    component_title: string
    training_title: string
    text_people_started_subtitle: string
    text_people_not_started_subtitle: string
    text_completed: string
    button_invite: string
    button_invite_all: string
    button_add_people: string
    diagram_title: string
    modalTexts: CreateSuccessUnitsPageAddPeopleModalTextType
  }
  nonInvited: Array<EmployeeFormType>
}

export const GoalStatusOverview: React.FC<GoalStatusOverviewTypesProps> = ({
  texts,
  cards,
  nonInvited,
}) => {
  const { Title, Paragraph } = Typography

  const router = useRouter()

  const [nonInvitedPeople, setNonInvitedPeople] = useState([])

  const addHuman = () => {
    CreateModalStore.setShowAddNewEmployeeModal(true)
  }

  const onHumanAdd = (human: EmployeeFormType) => {
    return new Promise((resolve) => {
      if (human && Object.keys(human).length > 0) {
        const people = nonInvitedPeople.slice()
        people.push(human)
        setNonInvitedPeople(people)
        resolve(true)
      } else {
        resolve(true)
      }
    })
  }

  useEffect(() => {
    if (nonInvited) {
      setNonInvitedPeople([...nonInvitedPeople, ...nonInvited])
    }
  }, [])

  const { getAccessTokenSilently } = useAuth0()

  const [token, setToken] = useState('')

  const store = useStore()

  const dispatch = useDispatch()

  const [diagram, setDiagram] = useState(undefined)

  useEffect(() => {
    const getToken = async () => {
      try {
        const accessToken = await getAccessTokenSilently()
        setToken(accessToken)
      } catch (error) {
        console.log(error)
      }
    }
    getToken()
  }, [getAccessTokenSilently, token])

  useEffect(() => {
    if (token.length) {
      const fetchData = async () => {
        const orgId = router.query.org ? Number(router.query.org) : undefined
        Promise.all([
          await dispatch(
            createActions[ActionTypes.ORGANIZATIONS_REQUEST](token, orgId)
          ),
          await dispatch(createActions[ActionTypes.EMPLOYEE_REQUEST](token)),
          await dispatch(createActions[ActionTypes.UNIT_REQUEST](token)),
        ])
          .then((values) => {
            const organization = store.getState().createState.organizations[0]
            const units = store.getState().createState.units
            let x = 0
            const offsetX = 240
            const centerX = (units.length / 2) * offsetX - offsetX / 2

            const nodes: Node[] = [
              DiagramNode({
                id: 'company',
                x: centerX,
                y: 0,
                width: 200,
                height: 100,
                data: {
                  hasSource: true,
                  label: organization.name,
                  people: store.getState().createState.employees?.length,
                  menuItems: [
                    {
                      text: 'Edit',
                      handler: () => goToOrganization(router, organization?.id),
                    },
                    { text: 'Add board of directors' },
                    { text: 'Add person' },
                    { text: 'Add work group' },
                  ],
                },
              }),
              // DiagramNode({
              //   id: 'management',
              //   x: centerX,
              //   y: 150,
              //   width: 200,
              //   height: 100,
              //   data: {
              //     hasSource: true,
              //     hasTarget: true,
              //     label: 'Management team',
              //     people: 1,
              //     menuItems: [
              //       { text: 'View' },
              //       { text: 'Edit' },
              //       { text: 'Add team member' },
              //       { text: 'Remove management team' }
              //     ]
              //   }
              // }),
            ]

            const connectors: DiagramConnectorType[] = [
              {
                id: 'mainToChild',
                source: 'company',
                target: 'management',
              },
              // {
              //   id: 'managementToMarketing',
              //   source: 'management',
              //   target: 'marketing',
              // },
              // {
              //   id: 'managementToSales',
              //   source: 'management',
              //   target: 'sales',
              // },
              // {
              //   id: 'managementToManufacturing',
              //   source: 'management',
              //   target: 'manufacturing',
              // },
            ]

            units.map((u) => {
              nodes.push(
                DiagramNode({
                  id: `unit-${u.id}`,
                  x,
                  y: 150,
                  width: 200,
                  data: {
                    hasTarget: true,
                    label: u.name,
                    useDivider: true,
                    useIndicator: 'green',
                    people: u.employees.length,
                    groups: u.workGroups.length,
                    menuItems: [
                      {
                        text: 'View',
                        handler: () => {
                          goToUnit(router, u.id)
                        },
                      },
                      {
                        text: 'Edit',
                        handler: () => {
                          goToUnit(router, u.id)
                        },
                      },
                      { text: 'Add person' },
                      { text: 'Add work group' },
                      {
                        text: 'Add new unit on same level',
                        handler: () => goToUnit(router),
                      },
                      { text: 'Add sub unit' },
                    ],
                  },
                })
              )
              connectors.push({
                id: `managementToUnit-${u.id}`,
                source: 'company',
                target: `unit-${u.id}`,
              })
              x += offsetX
            })

            setDiagram(
              <SuccessDiagram
                title={texts.diagram_title}
                fit={true}
                nodes={nodes}
                style={{ width: 800, margin: 'auto' }}
                connectors={connectors}
              />
            )
          })
          .catch((err) => {
            console.log(err)
          })
      }
      fetchData()
    }
  }, [dispatch, router, store, texts.diagram_title, token])

  return (
    <>
      <AddNewEmployeeModal
        texts={texts.modalTexts}
        groups={[]}
        addHandler={onHumanAdd}
      />
      <section className="ge-section">
        <Title>{texts.component_title}</Title>

        <Row>
          <Col lg={18} xs={24} style={{ borderRight: '1px solid #ccc' }}>
            <Row>
              <Col xl={2} lg={3} xs={0} />
              {(cards || []).map((e, i, arr) => {
                return (
                  <Col
                    style={{
                      borderRadius:
                        i === 0
                          ? '16px 0 0 16px'
                          : i === arr.length - 1
                          ? '0 16px 16px 0'
                          : '0',
                      overflow: 'hidden',
                    }}
                    key={`goalOverviewCol${i}`}
                    xl={4}
                    lg={6}
                    xs={24}
                    className="goal-card-col"
                  >
                    <Card
                      bodyStyle={{
                        padding: '25px 10px',
                        textAlign: 'center',
                      }}
                      className="goal-card"
                      key={`goalOverviewCard${i}`}
                    >
                      <Title style={{ fontSize: 14 }}>{e.title}</Title>

                      <Divider />

                      <Paragraph style={{ color: '#a6a6a6', fontSize: 12 }}>
                        {e.text}
                      </Paragraph>

                      <LinkNext href={'/define-your-target-group'}>
                        <Button
                          type="primary"
                          shape="round"
                          icon={<CaretRightOutlined />}
                          style={{ padding: '0 7px', fontSize: 12 }}
                        >
                          {e.button}
                        </Button>
                      </LinkNext>
                    </Card>
                  </Col>
                )
              })}
            </Row>

            <Row>
              <Col lg={{ span: 24 }} xs={{ span: 24, offset: 0 }}>
                {diagram}
              </Col>
            </Row>
          </Col>

          <Col lg={6} xs={24}>
            <Row>
              <Col span={22} offset={1}>
                <Title style={{ fontSize: 20 }}>{texts.training_title}</Title>

                <Paragraph style={{ color: '#a6a6a6', fontSize: 14 }}>
                  {texts.text_people_started_subtitle} (1)
                </Paragraph>

                <Row align="middle">
                  <span style={{ position: 'relative' }}>
                    <Progress
                      style={{ position: 'absolute', top: 0, left: 0 }}
                      type="circle"
                      showInfo={false}
                      strokeWidth={3}
                      strokeColor="blue"
                      width={34}
                      percent={25}
                    />
                    <UserOutlined
                      style={{
                        border: '1px solid #ccc',
                        borderRadius: '100%',
                        fontSize: 24,
                        padding: 4,
                        marginRight: 5,
                      }}
                    />
                  </span>
                  You {texts.text_completed} 25%
                </Row>

                <Row
                  justify="space-between"
                  align="middle"
                  style={{ marginTop: 10 }}
                >
                  <Col span={20}>
                    <Paragraph
                      style={{ color: '#a6a6a6', fontSize: 14, margin: 0 }}
                    >
                      {texts.text_people_not_started_subtitle} (
                      {nonInvitedPeople.length})
                    </Paragraph>
                  </Col>

                  <Col span={4}>
                    <Button style={{ padding: '0 5px' }} type="link">
                      {texts.button_invite_all}
                    </Button>
                  </Col>
                </Row>

                {(nonInvitedPeople || []).map((person: EmployeeFormType, i) => {
                  return (
                    <Row
                      key={`nonInvited${i}`}
                      justify="space-between"
                      align="middle"
                      style={{ marginTop: 10 }}
                    >
                      <Col span={20}>
                        <Row align="middle">
                          <UserOutlined
                            style={{
                              border: '1px solid #ccc',
                              borderRadius: '100%',
                              fontSize: 24,
                              padding: 4,
                              marginRight: 5,
                            }}
                          />

                          <Row>
                            <Col span={24}>{person.name}</Col>
                            <Col style={{ fontSize: 11 }} span={24}>
                              {person.title}
                            </Col>
                          </Row>
                        </Row>
                      </Col>

                      <Col span={4}>
                        <Button type="primary">{texts.button_invite}</Button>
                      </Col>
                    </Row>
                  )
                })}

                <Row style={{ marginTop: 20 }}>
                  <Button
                    type="link"
                    icon={<PlusOutlined />}
                    onClick={() => addHuman()}
                  >
                    {texts.button_add_people}
                  </Button>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    </>
  )
}
