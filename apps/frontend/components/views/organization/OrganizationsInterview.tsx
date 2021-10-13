import React from 'react'
import {Button, Col, Row, Typography} from 'antd'

interface InterviewPropTypes {
  title: string
  videoSrc: string
  subtitle?: string
  text: string
  linkText: string
}

export const OrganizationsInterview: React.FC<InterviewPropTypes> = ({
  title,
  videoSrc,
  subtitle,
  text,
  linkText,
  }) => {
  const {Title, Paragraph} = Typography

  return (
    <section className="ge-section">
      <Title level={2} style={{textAlign: 'center', marginBottom: 40}}>
        {subtitle}
      </Title>
      <Row gutter={40}>
        <Col span={12}>
          <iframe
            title="video"
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${videoSrc}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </Col>
        <Col span={12}>
          <Title level={3}>{title}</Title>
          <Paragraph>{text}</Paragraph>
          <Button type="primary" shape="round">
            {linkText}
          </Button>
        </Col>
      </Row>
    </section>
  )
}

export default OrganizationsInterview