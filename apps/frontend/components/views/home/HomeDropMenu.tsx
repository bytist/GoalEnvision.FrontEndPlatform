import './styles/HomeDropMenu.component.less'

import { Button, Card, Col, Row, Typography } from 'antd'

import React from 'react'

export const HomeDropMenu: React.FC = () => {
  const { Title, Paragraph } = Typography

  return (
    <div className="ge-home-drop-menu">
      <div className="ge-container">
        <Row gutter={70}>
          <Col span={7}>
            <Title level={3} className="ge-home-drop-menu__title">
              Lear goal based leadership
            </Title>
            <Paragraph className="ge-home-drop-menu__text">
              Auctor bibendum natoque class erat tellus turpis nascetur curae;
              diam sem, ultricies dis, curae; libero in dictumst ornare
              scelerisque.
            </Paragraph>
          </Col>
          <Col span={10}>
            <Card
              style={{ height: '100%' }}
              className="ge-home-drop-menu__card"
            >
              <Row style={{ height: '100%' }}>
                <Col span={6}>
                  <img src="" alt="" width="100%" height="auto" />
                </Col>
                <Col className="ge-home-drop-menu__flex-col" span={18}>
                  <Title level={3} className="ge-home-drop-menu__title">
                    Begin your jouney to get your leadership skills certified
                  </Title>
                  <Button
                    className="ge-home-drop-menu__btn"
                    type="primary"
                    shape="round"
                    size="large"
                  >
                    Start learning now!
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={6} offset={1}>
            <ul>
              <li>1item</li>
              <li>2item</li>
              <li>3item</li>
              <li>4item</li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default HomeDropMenu
