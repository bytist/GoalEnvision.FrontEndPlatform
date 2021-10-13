import React from 'react'
import { Button, Col, Row, Typography } from 'antd'
import { SendOutlined } from '@ant-design/icons'
import LinkNext from 'next/link'
import {useRouter} from "next/router";
import {goToOrganization} from "../../../assets/functions";
import {useAuth0} from "@auth0/auth0-react";

interface HeroTypes {
  imgSrc: string
  title: string
  subtitle: string
  btnText: string
  btnLink: string
  shoutText: string
  shoutLink: string
}

export const OrganizationsHero: React.FC<HeroTypes> = ({
  imgSrc,
  title,
  subtitle,
  btnText,
  btnLink,
  shoutText,
  shoutLink,
  }) => {
  const { Title, Link } = Typography;

  const router = useRouter();

  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const onCreateOrganizationClick = () =>
    isAuthenticated
      ? goToOrganization(router)
      : loginWithRedirect({
        redirectUri: `${process?.env?.NEXT_PUBLIC_REDIRECT_URI}create-organization`,
      })

  return (
    <section className="ge-section">
      <Row align="middle">
        <Col span={12}>
          <Title>{title}</Title>
          <Title level={2}>{subtitle}</Title>
          <Row align="middle" style={{ paddingTop: 40 }}>
            <Button
              type="primary"
              shape="round"
              style={{ marginRight: 16 }}
              onClick={onCreateOrganizationClick}
            >
              {btnText}
            </Button>
            <LinkNext href={shoutLink || '/'}>
              <Link href="/">
                <SendOutlined style={{ marginRight: 16 }} />
                {shoutText}
              </Link>
            </LinkNext>
          </Row>
        </Col>
        <Col span={12}>
          {' '}
          <img style={{ width: '100%' }} src={imgSrc} alt="" className="" />
        </Col>
      </Row>
    </section>
  )
}

export default OrganizationsHero