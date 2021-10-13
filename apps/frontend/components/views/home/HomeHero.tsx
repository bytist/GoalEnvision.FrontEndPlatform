import './styles/HomeHero.component.less'

import { ArrowRight, Radio } from '../../CustomIcon'
import { Button, Carousel, Col, Row, Typography } from 'antd'

import LinkNext from 'next/link'
import React from 'react'

interface HeroTypes {
  imgSrc: string
  title: string
  subtitle: string
  btnText: string
  btnLink: string
  shoutText: string
  shoutLink: string
}

export const HomeHero: React.FC<HeroTypes> = ({
  imgSrc,
  title,
  subtitle,
  btnText,
  btnLink,
  shoutText,
  shoutLink,
}) => {
  const { Title, Link } = Typography

  return (
    <section className="ge-hero">
      <div className="ge-container">
        <Carousel dots={{ className: 'ge-hero__dots' }}>
          {[1, 2, 3].map((i) => {
            return (
              <div key={i}>
                <Row align="middle" className="ge-hero__main-row">
                  <Col xs={24} md={12} xl={10}>
                    <Title className="ge-hero__title">
                      {title} {subtitle}
                    </Title>
                    <Col xs={{ span: 24 }} md={{ span: 0 }} className="ge-hero__img-wrapper">
                      {' '}
                      <img
                        style={{ width: '100%' }}
                        src={imgSrc}
                        alt=""
                        className=""
                      />
                    </Col>
                    <Row align="middle">
                      <Col span={24} style={{ marginBottom: 24 }}>
                        <LinkNext href={btnLink || '/'}>
                          <a href="/">
                            <Button
                              size="large"
                              type="primary"
                              shape="round"
                              className="ge-hero__btn"
                            >
                              {btnText}
                            </Button>
                          </a>
                        </LinkNext>
                      </Col>
                      <Col span={24}>
                        <LinkNext href={shoutLink || '/'}>
                          <Link href="/" className="ge-hero__link">
                            <Radio
                              width={20}
                              height={16}
                              fill=""
                              className="ge-hero__radio-icon"
                            />
                            {shoutText}
                            <ArrowRight
                              width={16}
                              height={8}
                              fill=""
                              className="ge-hero__arrow-icon"
                            />
                          </Link>
                        </LinkNext>
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    xs={{ span: 0 }}
                    md={{
                      offset: 1,
                      span: 11,
                    }}
                    xl={{
                      offset: 1,
                      span: 13,
                    }}
                  >
                    {' '}
                    <img
                      style={{ width: '100%' }}
                      src={imgSrc}
                      alt=""
                      className=""
                    />
                  </Col>
                </Row>
              </div>
            )
          })}
        </Carousel>
      </div>
    </section>
  )
}

export default HomeHero
