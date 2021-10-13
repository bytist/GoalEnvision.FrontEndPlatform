import React from 'react';
import { Route } from 'react-router';
import { Row, Col, Breadcrumb, Layout } from 'antd';
import {
  CodeSandboxOutlined,
  CloseCircleOutlined,
  ApartmentOutlined,
  UnorderedListOutlined
} from '@ant-design/icons';
import { RoundButton } from "../../templates/buttons";

interface CreateBreadProps {
  routes: Array<Route>
  exitHandler: Function
  step?: number
}

export const CreateHead: React.FC<CreateBreadProps> = ({ routes, exitHandler, step }) => {
  const breadCrumbRender = (route, params, routes, paths) => {
    const last = routes.indexOf(route) === routes.length - 1;

    return last ? (
      <span>{route.breadcrumbName}</span>
    ) : (
      <a href={paths.join('/')}>{route.breadcrumbName}</a>
    );
  };

  return (
    <Layout>
      <Col lg={{ span: 20, offset: 2 }} xs={{ offset: 0, span: 22 }}>
        <Row align={'middle'}>
          <Col
            onClick={() => exitHandler()}
            lg={{ span: 5, offset: 0 }}
            xs={{ span: 22, offset: 2 }}
            style={{ fontSize: 32, cursor: 'pointer' }}>
            <Row align={'middle'}>
              <Col span={3} pull={1}>
                <CodeSandboxOutlined />
              </Col>

              <Col span={20}>
                Goal envision
              </Col>
            </Row>
          </Col>

          <Col lg={{ span: 19, offset: 0 }} xs={{ span: 22, offset: 1 }}>
            <Row align={'middle'}>
              <Col span={16} style={{ textAlign: 'left' }}>
                <Breadcrumb separator='>' itemRender={breadCrumbRender} routes={routes} />
              </Col>

              <Col span={8} style={{ fontSize: 24, textAlign: 'right' }} onClick={() => exitHandler}>
                {step && step === 2 &&
                  <RoundButton
                    style={{ marginRight: 20 }}
                    left={{
                      icon: <ApartmentOutlined />,
                      onClick: () => console.log('clicked')
                    }}
                    right={{
                      icon: <UnorderedListOutlined />,
                      onClick: () => console.log('clicked')
                    }}
                  />
                }

                <CloseCircleOutlined className="btn" onClick={() => exitHandler() } />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Layout>
  )
};
