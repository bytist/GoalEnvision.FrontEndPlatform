import React, { memo } from 'react';
import { Row, Col, Typography, Dropdown, Menu, Divider} from "antd";
import { MoreOutlined, UserOutlined, TeamOutlined } from '@ant-design/icons';
import { Handle, Position } from 'react-flow-renderer';

export type UnitTemplateContextMenuItem = {
  text: string
  handler?: Function
};

export type UnitTemplateData = {
  hasSource?: boolean
  hasTarget?: boolean
  hasSideSource?: boolean
  hasSideTarget?: boolean
  label: string
  people?: number
  groups?: number
  useDivider?: boolean
  useIndicator?: string
  menuItems?: Array<UnitTemplateContextMenuItem>
};

interface UnitTemplateProps {
  id: string
  data?: UnitTemplateData
}

export const UnitTemplate = memo((props: UnitTemplateProps) => {
  const { Title } = Typography;

  const { id, data } = props;

  const { label, people, groups, useDivider, useIndicator, menuItems } = data;

  return (
    <>
      {data && data.hasTarget &&
        <Handle
          id={`${id}Port1`}
          type='target'
          position={Position.Top}
          style={{background: '#ccc'}}
          onConnect={(params) => console.log('handle onConnect', params)}
        />
      }
      {data && data.hasSideTarget &&
        <Handle
          id={`${id}PortLeft`}
          type='target'
          position={Position.Left}
          style={{background: '#ccc'}}
          onConnect={(params) => console.log('handle onConnect', params)}
        />
      }
      <Row id={`node-${id}`} style={{ alignContent: "space-between", height: '100%' }} >
        <Col span={24}>
          <Row justify="space-between" align="middle" style={{ flexWrap: 'nowrap' }}>
            <Title style={{ fontSize: 16, marginBottom: 0 }}>{label}</Title>
            {menuItems && menuItems.length > 0 &&
              <Dropdown
                overlay={(
                  <Menu>
                    {menuItems.map((item, i) => {
                      return (
                        <Menu.Item
                          key={`${id}MenuItem${i}`}
                          onClick={(ev) => item.handler ? item.handler(ev) : undefined}
                        >
                          {item.text}
                        </Menu.Item>
                      )
                    })}
                  </Menu>
                )}
                trigger={['click']}>

                <MoreOutlined/>
              </Dropdown>
            }
          </Row>
        </Col>

        {useDivider && <Divider/>}

        {(people || groups) ?
          <Col span={22}>
            {people && people > 0 ?
              <span style={{marginRight: 20}}>
                <UserOutlined style={{marginRight: 5}}/>
                {people}
              </span> : undefined
            }

            {groups && groups > 0 ?
              <span>
                <TeamOutlined style={{ marginRight: 5 }}/>
                {groups}
              </span> : undefined
            }
          </Col> : undefined
        }

        {useIndicator &&
          <Col span={2} style={{ textAlign: 'right', marginLeft: 'auto' }}>
            <span style={{
              display: 'inline-block',
              width: 16,
              height: 16,
              borderRadius: '100%',
              border: '1px solid #ddd',
              backgroundColor: useIndicator
            }}/>
          </Col>
        }
      </Row>
      {data && data.hasSource &&
        <Handle
          id={`${id}Port2`}
          type='source'
          position={Position.Bottom}
          style={{ background: '#ccc' }}
          onConnect={(params) => console.log('handle onConnect', params)}
        />
      }
      {data && data.hasSideSource &&
        <Handle
          id={`${id}PortRight`}
          type='source'
          position={Position.Right}
          style={{ background: '#ccc' }}
          onConnect={(params) => console.log('handle onConnect', params)}
        />
      }
    </>
  )
});