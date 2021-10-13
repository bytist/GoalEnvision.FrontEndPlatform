import './styles/HomeBenefits.component.less'

import { Button, Col, Row, Typography } from 'antd'

import LinkNext from 'next/link'
/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import { Start_PageBody2GoalsFields } from 'src/generated'

interface BenefitsTypesProps {
  title: string
  cards: Array<Start_PageBody2GoalsFields>
  linkSrc: string
  linkText: string
}

export const HomeBenefits: React.FC<BenefitsTypesProps> = ({
  title,
  cards,
  linkSrc,
  linkText,
}) => {
  const { Title, Paragraph } = Typography
  return (
    <section className="ge-benefits">
      <div className="ge-container">
        <Title level={2} className="ge-benefits__title">
          {title}
        </Title>
        <Row className="ge-benefits__cards-row">
          {(cards || []).map(({ description, image, title }) => {
            return (
              <Col key={title} xs={24} md={12} xl={8} className="ge-benefits__card-col">
                <Row>
                  <Col xs={{span: 6, offset: 9}} md={{span: 12, offset: 0}} className="ge-benefits__img-wrapper">
                    <img src={image.url} alt="" />
                  </Col>
                  <Col xs={{span: 20, offset: 2}} md={{span: 12, offset: 0}} className="ge-benefits__card-info">
                    <Title level={3} className="ge-benefits__card-title">
                      {title}
                    </Title>
                    <Paragraph className="ge-benefits__card-text">
                      {description[0]?.text}
                    </Paragraph>
                  </Col>
                </Row>
              </Col>
            )
          })}
          <Col span={24} style={{ textAlign: 'center' }}>
            <LinkNext href={linkSrc || '/'}>
              <a href="/">
                <Button
                  className="ge-benefits__btn"
                  size="large"
                  type="primary"
                  shape="round"
                >
                  {linkText}
                </Button>
              </a>
            </LinkNext>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default HomeBenefits
