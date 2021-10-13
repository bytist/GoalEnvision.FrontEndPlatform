import './BaseLayout.component.less'

import {
  Avatar,
  Button,
  Col,
  Divider,
  Dropdown,
  Layout,
  Menu,
  Popover,
  Row,
  Space,
  Typography,
} from 'antd'
import {
  Facebook,
  Instagram,
  LinkedIn,
  Medal,
  Twitter,
  Youtube,
} from '../CustomIcon'
import { GlobalOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons'
import React, { useState } from 'react'

import { AngleDown } from '../CustomIcon'
import { AppLangStore } from '../../utils/contexts'
import Head from 'next/head'
import { HomePageProps } from '../../common/homeStaticProps'
import LinkNext from 'next/link'
import classNames from 'classnames'
import { observer } from 'mobx-react-lite'
import { useAuth0 } from '@auth0/auth0-react'

export const BaseLayout: React.FC<HomePageProps> = observer(
  ({ children, onClick, dataLayout }) => {
    const { Header, Content, Footer } = Layout

    // Temp solution
    const imgUri = 'https://prismic-io.s3.amazonaws.com/goalenvisionapp/db6b3ba2-c6e1-46e8-bfb5-9afa68497cf2_logo.svg'

    const { Title, Paragraph, Link } = Typography

    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0()

    const dataFields = dataLayout?.allSite_settingss?.edges[0]?.node

    const [activeKey, setActiveKey] = useState('1')

    const navMenuItemClick: Function = (key: string): void => {
      onClick(key)
      setActiveKey(key)
    }

    const langMenu = (
      <Menu>
        <Menu.Item
          className={classNames({ _active: AppLangStore.lang === 'en-us' })}
        >
          <LinkNext href="/en">
            <a href=" ">EN</a>
          </LinkNext>
        </Menu.Item>
        <Menu.Item
          className={classNames({ _active: AppLangStore.lang === 'sv-se' })}
        >
          <LinkNext href="/sv">
            <a href=" ">SE</a>
          </LinkNext>
        </Menu.Item>
      </Menu>
    )

    const loginMenu = (
      <Menu>
        <Menu.Item>
          <Link
            href=" "
            onClick={() =>
              loginWithRedirect({
                redirectUri: `${process?.env?.NEXT_PUBLIC_REDIRECT_URI}my-page`,
              })
            }
          >
            Registration
          </Link>
        </Menu.Item>
        <Menu.Item>
          <a
            href=" "
            onClick={() =>
              loginWithRedirect({
                redirectUri: `${process?.env?.NEXT_PUBLIC_REDIRECT_URI}my-page`,
              })
            }
          >
            Log In
          </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item disabled>
          <Link disabled>Integratee business systems</Link>
        </Menu.Item>
        <Menu.Item disabled>
          <Link disabled>Integratee business</Link>
        </Menu.Item>
        <Menu.Item disabled>
          <Link disabled>Business systems</Link>
        </Menu.Item>
      </Menu>
    )

    const logoutMenu = (
      <Row>
        <Col span={16}>
          <Title level={4}>Lorem ipsum title</Title>
          <Paragraph>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci,
            recusandae.
          </Paragraph>
          <Col>
            <Link>Get profile</Link>
          </Col>
          <Col>
            <Link>Get started with sertification</Link>
          </Col>
        </Col>
        <Col>
          <Medal width={100} height={100} fill="" style={{ fontSize: 100 }} />
        </Col>
        <Divider />
        <Col>
          <Link>Add roles & organiations</Link>
        </Col>
        <Col span={24}>
          <Link onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
          </Link>
        </Col>
      </Row>
    )

    return (
      <>
        <Head>
          <title>Goal Envision</title>
        </Head>
        <Layout style={{ background: '#F7F9FB' }}>
          <Header
            className={classNames('ge-header', {
              _filled: activeKey !== '1',
            })}
          >
            <Row align="middle" justify="space-between">
              <Col xs={12} lg={3}>
                <LinkNext href="/">
                  <a href="/" style={{ display: 'inline-block' }}>
                    <img
                      // src={dataFields?.main_logo?.url}
                      src={imgUri}
                      alt=""
                      style={{ maxWidth: '100%' }}
                      className="ge-header__logo"
                    />
                  </a>
                </LinkNext>
              </Col>
              <Col>
                <Row>
                  <Col className="ge-header__menu-wrapper">
                    <Menu
                      className="ge-header__menu"
                      mode="horizontal"
                      defaultSelectedKeys={['1']}
                    >
                      {(dataFields?.body1 || []).map((item, idx: number) => (
                        <React.Fragment
                          key={item?.primary?.button_name[0]?.text}
                        >
                          <Menu.Item
                            key={idx + 1}
                            className={classNames('ge-header__menu-item', {
                              expanded: activeKey === '1',
                            })}
                            onClick={({ key }) => navMenuItemClick(key)}
                          >
                            {item?.primary?.button_name[0]?.text}
                          </Menu.Item>
                        </React.Fragment>
                      ))}
                    </Menu>
                  </Col>
                  <Col
                    id="dropdownContainer"
                    className="ge-header__dropdown-container"
                  >
                    <Dropdown
                      align={{ offset: [0, 30] }}
                      overlay={langMenu}
                      trigger={['click']}
                      getPopupContainer={() =>
                        document.getElementById('dropdownContainer')
                      }
                    >
                      <a
                        className="ant-dropdown-link ge-header__lang-btn"
                        onClick={(e) => e.preventDefault()}
                        href=" "
                        style={{ paddingLeft: 24, paddingRight: 24 }}
                      >
                        <GlobalOutlined style={{ marginRight: 12 }} />
                        <AngleDown
                          width={10}
                          height={10}
                          fill="black"
                          className="ge-header__lang-icon"
                        />
                      </a>
                    </Dropdown>
                  </Col>
                  <Col style={{ display: 'flex', alignItems: 'center' }}>
                    {isAuthenticated ? (
                      <Popover
                        className="ge-header__desktop-btn"
                        align={{ offset: [0, 30] }}
                        content={logoutMenu}
                        placement="bottomLeft"
                        trigger={['click']}
                        overlayClassName="ge-header__logout"
                        getPopupContainer={() =>
                          document.getElementById('dropdownContainer')
                        }
                      >
                        <Button
                          size="large"
                          type="primary"
                          shape="round"
                          icon={<MenuOutlined />}
                        >
                          <Avatar src={user.picture} icon={<UserOutlined />} />
                        </Button>
                      </Popover>
                    ) : (
                      <>
                        <Button
                          size="large"
                          type="primary"
                          shape="circle"
                          icon={<MenuOutlined />}
                          className="ge-header__mobile-btn"
                        ></Button>
                        <Dropdown
                          className="ge-header__desktop-btn"
                          align={{ offset: [0, 30] }}
                          overlay={loginMenu}
                          trigger={['click']}
                          getPopupContainer={() =>
                            document.getElementById('dropdownContainer')
                          }
                        >
                          <Button
                            size="large"
                            type="primary"
                            shape="round"
                            icon={<MenuOutlined />}
                          >
                            {dataFields?.sign_in_button[0]?.text}
                          </Button>
                        </Dropdown>
                      </>
                    )}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Header>

          <Content className="site-layout">
            <div className="site-layout-background">{children}</div>
          </Content>

          <Footer className="ge-footer">
            <div className="ge-footer__inner">
              <div className="ge-container _desktop">
                <ul className="ge-footer__list">
                  {(
                    (dataFields?.body[0].__typename ===
                      'Site_settingsBodyValues' &&
                      dataFields?.body[0]?.fields) ||
                    []
                  ).map((item, idx: number) => (
                    <li key={idx}>{item.value[0].text}</li>
                  ))}
                </ul>
              </div>
              <Divider className="ge-footer__divider _desktop" />
              <div className="ge-container">
                <Row className="ge-footer__main-row">
                  <Col xs={24} md={9} xl={8} className="ge-footer__col">
                    <LinkNext href="/">
                      <a href="/" style={{ display: 'inline-block' }}>
                        <img
                          src={
                            (dataFields?.body[1]?.__typename ===
                              'Site_settingsBodyInformationblock' &&
                              dataFields?.body[1]?.primary?.logo?.url) ||
                            ''
                          }
                          alt=""
                          style={{ maxWidth: '100%' }}
                          className="ge-footer__logo"
                        />
                      </a>
                    </LinkNext>
                    <Paragraph className="ge-footer__text">
                      {dataFields?.body[1]?.__typename ===
                      'Site_settingsBodyInformationblock' &&
                      dataFields?.body[1]?.primary?.company_description[0]
                        ?.text}
                    </Paragraph>
                  </Col>
                  <Col
                    xs={{ span: 0 }}
                    md={{
                      offset: 1,
                      span: 6,
                    }}
                    lg={{
                      offset: 0,
                      span: 5,
                    }}
                    className="ge-footer__main-col"
                  >
                    <Title level={4} className="ge-footer__subtitle">
                      {dataFields?.body[2]?.__typename ===
                      'Site_settingsBodySublinks' &&
                      dataFields?.body[2]?.primary?.sublinks_title[0]?.text}
                    </Title>
                    <ul className="ge-footer__links">
                      {(
                        (dataFields?.body[2]?.__typename ===
                          'Site_settingsBodySublinks' &&
                          dataFields?.body[2]?.fields) ||
                        []
                      ).map((item, idx: number) => (
                        <li key={idx}>
                          <Link href="#" className="ge-footer__link">
                            {item?.sublink_name[0]?.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Col>
                  <Col
                    xs={{ span: 0 }}
                    md={{
                      offset: 1,
                      span: 6,
                    }}
                    lg={{
                      offset: 0,
                      span: 5,
                    }}
                    className="ge-footer__main-col"
                  >
                    <Title level={4} className="ge-footer__subtitle">
                      {dataFields?.body[3]?.__typename ===
                      'Site_settingsBodySublinks' &&
                      dataFields?.body[3]?.primary?.sublinks_title[0]?.text}
                    </Title>
                    <ul className="ge-footer__links">
                      {(
                        (dataFields?.body[3]?.__typename ===
                          'Site_settingsBodySublinks' &&
                          dataFields?.body[3]?.fields) ||
                        []
                      ).map((item, idx: number) => (
                        <li key={idx}>
                          <Link href="#" className="ge-footer__link">
                            {item?.sublink_name[0]?.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Col>
                  <Col xs={24} xl={6} className="ge-footer__main-col">
                    <Title level={4} className="ge-footer__subtitle _desktop">
                      {dataFields?.body[4]?.__typename ===
                      'Site_settingsBodySocial_network_link' &&
                      dataFields?.body[4]?.primary?.social_links_header[0]
                        .text}
                    </Title>
                    <Space size="large" className="ge-footer__social-wrapper">
                      <Button
                        className="ge-footer__social-link"
                        shape="circle"
                        icon={<Youtube width={12} height={12} fill="#fff" />}
                      />
                      <Button
                        className="ge-footer__social-link"
                        shape="circle"
                        icon={<Facebook width={12} height={12} fill="#fff" />}
                      />
                      <Button
                        className="ge-footer__social-link"
                        shape="circle"
                        icon={<Twitter width={12} height={12} fill="#fff" />}
                      />
                      <Button
                        className="ge-footer__social-link"
                        shape="circle"
                        icon={<Instagram width={12} height={12} fill="#fff" />}
                      />
                      <Button
                        className="ge-footer__social-link"
                        shape="circle"
                        icon={<LinkedIn width={12} height={12} fill="#fff" />}
                      />
                    </Space>
                  </Col>
                </Row>
              </div>
              <Divider className="ge-footer__divider" />
              <Paragraph className="ge-footer__copyrigrhts">
                <span>
                  (C) Auctor bibendum natoque class erat tellus turpis nascetur
                  curae; diam sem, ultricies dis, curae; libero in dictumst
                  ornare scelerisque.
                </span>
              </Paragraph>
            </div>
          </Footer>
        </Layout>
      </>
    )
  }
)

export default BaseLayout
