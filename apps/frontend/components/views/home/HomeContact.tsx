import './styles/HomeContact.component.less'

import { ArrowRight, Radio } from '../../CustomIcon'
import { Button, Col, Row, Typography } from 'antd'
import React, { CSSProperties } from 'react'

import LinkNext from 'next/link'

interface ContactPropTypes {
  title: string
  text: string
  linkText: string
  linkSrc: string
  linkSecText: string
  linkSecSrc: string
  imgSrc: string
  style?: CSSProperties
}

export const HomeContact: React.FC<ContactPropTypes> = ({
  title,
  text,
  linkText,
  linkSrc,
  linkSecText,
  linkSecSrc,
  imgSrc,
  style,
}) => {
  const { Title, Paragraph, Link } = Typography

  return (
    <section className="ge-contact" style={style}>
      <div className="ge-container">
        <Col xs={24} xl={0} className="ge-contact__main-col">
          <Title level={2} className="ge-contact__title">
            {title}
          </Title>
          <Paragraph className="ge-contact__text">{text}</Paragraph>
        </Col>
        <Row align="stretch" className="ge-contact__main-row">
          <Col
            xs={{ span: 24, order: 2 }}
            md={{ span: 12, order: 1 }}
            className="ge-contact__image-wrapper ge-contact__main-col"
          >
            <img src={imgSrc} alt="" />
          </Col>
          <Col
            xs={{ span: 24, order: 1 }}
            md={{ span: 12, order: 2 }}
            className="ge-contact__main-col"
          >
            <Col xs={0} xl={24}>
              <Title level={2} className="ge-contact__title">
                {title}
              </Title>
              <Paragraph className="ge-contact__text">{text}</Paragraph>
            </Col>
            <Col span={24}>
              <Row className="ge-contact__row">
                <Col span={24}>
                  <LinkNext href={linkSrc || '/'}>
                    <a href="/">
                      <Button
                        type="primary"
                        shape="round"
                        size="large"
                        className="ge-contact__btn"
                      >
                        {linkText}
                      </Button>
                    </a>
                  </LinkNext>
                </Col>
                <Col span={24} className="ge-contact__col">
                  <LinkNext href={linkSecSrc || '/'}>
                    <Link href="/" className="ge-contact__link">
                      <Radio
                        width={20}
                        height={16}
                        fill=""
                        className="ge-contact__radio-icon"
                      />
                      {linkSecText}
                      <ArrowRight
                        width={16}
                        height={8}
                        fill=""
                        className="ge-contact__arrow-icon"
                      />
                    </Link>
                  </LinkNext>
                </Col>
              </Row>
            </Col>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default HomeContact
