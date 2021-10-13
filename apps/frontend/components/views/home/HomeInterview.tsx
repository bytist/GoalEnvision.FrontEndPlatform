import './styles/HomeInterview.component.less'

import { Button, Col, Row, Typography } from 'antd'

import React from 'react'
import { Ticks } from '../../CustomIcon'

interface InterviewTPropTypes {
  title: string
  videoSrc: string
  subtitle: string
  text: string
}

export const HomeInterview: React.FC<InterviewTPropTypes> = ({
  title,
  videoSrc,
  subtitle,
  text,
}) => {
  const { Title, Paragraph } = Typography

  return (
    <section className="ge-interview">
      <div className="ge-container">
        <Title level={2} className="ge-interview__title">
          {subtitle}
        </Title>
        <Row className="ge-interview__main-row">
          <Col xs={{order: 2, span: 24}} xl={{order: 1, span: 12}} className="ge-interview__col">
            <Row className="ge-interview__info-row">
              <Col xs={{span: 12, offset: 6}} xl={{span: 4, offset: 0}} className="ge-interview__ticks-wrapper">
                <Ticks width={75} height={44} fill="#fff" style={{fontSize: 75, position: 'relative', top: -35}} />
              </Col>
              <Col xs={{span: 24}} md={{span: 16, offset: 4}} xl={{span: 20, offset: 0}} className="ge-interview__info">
                <Title className="ge-interview__subtitle" level={3}>
                  {title}
                </Title>
                <Paragraph className="ge-interview__text">{text}</Paragraph>
                <Button
                  size="large"
                  type="primary"
                  shape="round"
                  className="ge-interview__btn"
                >
                  See what Goal Envision can do for you{' '}
                </Button>
              </Col>
            </Row>
          </Col>
          <Col xs={{order: 1, span: 22, offset: 1}} xl={{order: 2, span: 12, offset: 0}} className="ge-interview__col _last">
            <iframe
              title="video"
              className="ge-interview__video"
              src={`https://www.youtube.com/embed/${videoSrc}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default HomeInterview
