/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import { Col, Row, Typography } from 'antd'

interface OrganizationsBenefitsTypesProps {
  title: string
  cards: Array<number>
  linkSrc: string
  linkText: string
}

export const OrganizationsBenefits: React.FC<OrganizationsBenefitsTypesProps> = ({
  title,
  cards,
}) => {
  const { Title, Paragraph } = Typography
  return (
    <section className="ge-section">
      <Title level={2} style={{ textAlign: 'center', paddingBottom: 40 }}>
        {title}
      </Title>
      <Row>
        {(cards || []).map((e) => {
          return (
            <Col key={e} span={8}>
              <Col
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  border: '1px solid black',
                  borderRadius: '50%',
                  width: 200,
                  height: 200,
                  padding: 10,
                  margin: '0 auto 20px',
                }}
              >
                <img
                  src="https://picsum.photos/200/200"
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%',
                  }}
                />
              </Col>
              <Col>
                <Paragraph style={{ textAlign: 'center' }}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptatum, ab.
                </Paragraph>
              </Col>
            </Col>
          )
        })}
        <Col offset={4} span={16} style={{ textAlign: 'center', paddingTop: 100 }}>
          <Row>
            <Col span={12}>
              <img
                src="https://picsum.photos/200/300"
                alt=""
                style={{
                  width: 200,
                  height: 300,
                }}
              />
            </Col>
            <Col span={12}>
              <Title level={3}>Lorem ipsum dolor sit amet.</Title>
              <Paragraph style={{ textAlign: 'center' }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatum, ab.
              </Paragraph>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  )
}

export default OrganizationsBenefits