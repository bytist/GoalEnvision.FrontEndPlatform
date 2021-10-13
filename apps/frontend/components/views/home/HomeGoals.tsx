import './styles/HomeGoals.component.less'

import { Button, Card, Col, Row, Typography } from 'antd'

import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useRouter } from 'next/router'

interface GoalsTypes {
  titleFirst?: string
  titleSecond?: string
  textFirst?: string
  textSecond?: string
  linkTextFirst?: string
  linkTextSecond?: string
  linkSrcFirst?: string
  linkSrcSecond?: string
  firstImgUrl?: string
  secImgUrl?: string
}

export const HomeGoals: React.FC<GoalsTypes> = ({
  titleFirst,
  titleSecond,
  textFirst,
  textSecond,
  linkTextFirst,
  linkTextSecond,
  firstImgUrl,
  secImgUrl,
}) => {
  const { Title, Paragraph } = Typography

  const { isAuthenticated, loginWithRedirect } = useAuth0()

  const router = useRouter()

  const onCreateOrganizationClick = () =>
    isAuthenticated
      ? router.push('/organization')
      : loginWithRedirect({
          redirectUri: `${process?.env?.NEXT_PUBLIC_REDIRECT_URI}organization`,
        })

  return (
    <section className="ge-goals">
      <div className="ge-container">
        <Row align="stretch" className="ge-goals__main-row">
          <Col xs={24} md={12} className="ge-goals__card-wrapper">
            <Card style={{ height: '100%' }} className="ge-goals__card _first">
              <Row style={{ height: '100%' }}>
                <Col
                  xs={{ span: 8, offset: 8 }}
                  xl={{ span: 6, offset: 0 }}
                  className="ge-goals__img-wrapper"
                >
                  {firstImgUrl && (
                    <img
                      src={firstImgUrl}
                      alt="goals"
                      width="100%"
                      height="auto"
                    />
                  )}
                </Col>
                <Col className="ge-goals__flex-col" xs={24} xl={18}>
                  <div>
                    <Title level={3} className="ge-goals__title">
                      {titleFirst}
                    </Title>
                    <Paragraph className="ge-goals__text">
                      {textFirst}
                    </Paragraph>
                  </div>
                  <Button
                    className="ge-goals__btn _secondary"
                    type="primary"
                    shape="round"
                    size="large"
                    onClick={onCreateOrganizationClick}
                  >
                    {linkTextFirst}
                  </Button>
                  <Button className="ge-goals__btn-mobile" type="link">
                    {linkTextFirst}
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={24} md={12} className="ge-goals__card-wrapper">
            <Card style={{ height: '100%' }} className="ge-goals__card">
              <Row style={{ height: '100%' }}>
                <Col
                  xs={{ span: 8, offset: 8 }}
                  xl={{ span: 6, offset: 0 }}
                  className="ge-goals__img-wrapper"
                >
                  {secImgUrl && (
                    <img
                      src={secImgUrl}
                      alt="goals"
                      width="100%"
                      height="auto"
                    />
                  )}
                </Col>
                <Col className="ge-goals__flex-col" xs={24} xl={18}>
                  <div>
                    <Title level={3} className="ge-goals__title">
                      {titleSecond}
                    </Title>
                    <Paragraph className="ge-goals__text">
                      {textSecond}
                    </Paragraph>
                  </div>
                  <Button
                    className="ge-goals__btn"
                    type="primary"
                    shape="round"
                    size="large"
                  >
                    {linkTextSecond}
                  </Button>
                  <Button className="ge-goals__btn-mobile" type="link">
                    {linkTextSecond}
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default HomeGoals
