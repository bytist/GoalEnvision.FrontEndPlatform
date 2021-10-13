import {
  Button,
  Col,
  Divider,
  Empty,
  Form,
  Layout,
  Row,
  Typography,
} from 'antd'
import {
  DiagramConnectorType,
  DiagramNode,
  DiagramPlusNode,
  SuccessDiagram,
} from '../'
import {
  OrganizationsResponseType,
  UnitsResponseType,
} from '../../../../services/http/types'
/* eslint-disable @typescript-eslint/camelcase */
import React, { useEffect, useState } from 'react'
import { goToOrganization, goToUnit } from '../../../../assets/functions'

import { CreateBuildSuccessPageTextType } from '../../../../types/texts'
import { CreateHelp } from '../../../modals'
import { CreateModalStore } from '../../../../utils/contexts'
import { LeftOutlined } from '@ant-design/icons'
import { Node } from 'react-flow-renderer'
import { useRouter } from 'next/router'

interface CreatePage {
  action: Function
  deleteUnitAction: Function
  data: {
    organization: OrganizationsResponseType | undefined
    units: Array<UnitsResponseType>
  }
  texts: CreateBuildSuccessPageTextType
}

export const BuildSuccess: React.FC<CreatePage> = ({
  action,
  deleteUnitAction,
  texts,
  data,
}) => {
  const { Text } = Typography

  console.log('test tree')

  const router = useRouter()

  const {
    button_back,
    button_next,
    text_under_logo,
    link_under_logo,
    text_help,
    diagram,
  } = texts

  const { button_edit, button_add_unit } = diagram

  const deleteUnit = async (unit: UnitsResponseType) => {
    if (unit) {
      deleteUnitAction(unit)
    }
  }

  const [diagramComponent, setDiagramComponent] = useState(undefined)

  useEffect(() => {
    const { organization, units } = data
    let x = 0
    const offsetX = 240

    if (organization) {
      const nodes: Node[] = [
        DiagramNode({
          id: 'company',
          x: 0,
          y: 0,
          width: 200,
          height: 100,
          data: {
            label: organization?.name,
            people: 1,
            hasSource: true,
            hasSideSource: true,
            menuItems: [
              {
                text: button_edit,
                handler: () => goToOrganization(router, organization?.id),
              },
            ],
          },
        }),
      ]

      const connectors: DiagramConnectorType[] = [
        {
          id: 'AddButtonId',
          source: 'company',
          target: 'addUnit',
        },
      ]

      let y = 0
      const offsetY = 150
      const unitsOffset = units.length ? 300 : 150

      if (units) {
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
                people: u.employees ? u.employees.length : 0,
                groups: u.workGroups ? u.workGroups.length : 0,
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
                  {
                    text: 'Delete',
                    handler: () => {
                      deleteUnit(u)
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
      }

      nodes.push(
        DiagramPlusNode({
          id: 'addUnit',
          x: 79,
          y: y + unitsOffset,
          data: {
            hasTarget: true,
            action: () => {
              router.push(`/add-success-unit?org=${organization.id}`)
            },
            text: button_add_unit,
          },
        })
      )

      y += offsetY * 2 + unitsOffset

      setDiagramComponent(
        <SuccessDiagram
          nodes={nodes}
          connectors={connectors}
          hideControls
          style={{ height: y }}
        />
      )
    }
  }, [data])

  return (
    <>
      <CreateHelp text={text_help} />

      <Col
        lg={{ span: 20, offset: 2, flex: 1 }}
        xs={{ span: 24, offset: 0 }}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <Row style={{ flex: 1 }}>
          <Col
            lg={{ span: 24, offset: 0 }}
            xs={{ span: 22, offset: 2 }}
            style={{ marginTop: '100px', width: '100%' }}
          >
            <Row
              justify="space-between"
              style={{ flex: 1, height: 'calc(100vh - 350px)' }}
            >
              <Col lg={12} xs={24} style={{ marginTop: -80 }}>
                {diagramComponent}
              </Col>

              <Col lg={{ span: 8, offset: 4 }} xs={{ span: 24, offset: 0 }}>
                <Empty
                  style={{ border: '1px solid rgba(0, 0, 0, 0.85)', margin: 0 }}
                  description={false}
                />

                <Row style={{ marginTop: 20 }}>
                  <Text>{text_under_logo}</Text>
                </Row>

                <Row>
                  <Button
                    type="link"
                    style={{ padding: '5px 0' }}
                    onClick={() => CreateModalStore.setShowCreateHelp(true)}
                  >
                    {link_under_logo?.text}
                  </Button>
                </Row>
              </Col>
            </Row>

            <Divider />

            <Row justify="space-between">
              <Col xs={14}>
                <Button
                  style={{
                    background: 'none',
                    border: 'none',
                    boxShadow: 'none',
                  }}
                  onClick={() => goToOrganization(router, router.query.org)}
                >
                  <LeftOutlined /> {button_back}
                </Button>
              </Col>

              <Col>
                <Form.Item>
                  <Button
                    type="primary"
                    shape="round"
                    onClick={() => action(1)}
                  >
                    {button_next}
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </>
  )
}
