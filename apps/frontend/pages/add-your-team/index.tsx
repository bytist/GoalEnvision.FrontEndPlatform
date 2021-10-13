import React from 'react'

import { BaseLayout } from '../../components/BaseLayout'
import { observer } from 'mobx-react-lite'
import { LeftTree, RightTree } from '../../components/customerMarket'

import { Button, Row, Col} from 'antd'
import LinkNext from 'next/link'
import '../../assets/core/customerMarket.less'
import Image from 'next/image';

export const defineYourTargetGroup: React.FC = observer(() => {

  const GroupIllustration = () => {
    return <Image src="/screenshot.png" alt="Group illustration" width="250px" height="250px" />
  }

  return (
    <BaseLayout>     
      <div className="ge-container">
        <div style={{display: 'flex'}} >
          <div>
            <Row className="flex-add out-border">
              <Col span={24}>
                <Row className="header-table">
                  <div>
                    Define your target group
                  </div>
                  <div className="ander-line">
                    + Invite people
                  </div>
                </Row>
                <Row>
                  <Col span={12} className="left-tree">
                      <LeftTree />
                  </Col>
                  <Col span={12} className="right-tree">
                      <RightTree />
                  </Col>
                </Row>
              </Col>
            </Row>

            <div className="btn-add-page">
              <div>
                  <LinkNext href={'/select-your-plan'}>
                      <Button
                      size="large"
                      type="primary"
                      shape="round"
                      className="ge-hero__btn"
                      >
                      Start the process with 23 colleagues 
                      </Button>
                  </LinkNext>
              </div>
              <div>
                <LinkNext href={'/select-your-plan'}>
                      <Button
                        size="large"
                        type="link"
                        shape="round"
                        className="ge-hero__btn"
                      >
                        Continue myself
                      </Button>
                </LinkNext>
              </div>
            </div>            
          </div>
        </div>

      </div>
    </BaseLayout>
  )
})

export default defineYourTargetGroup
