import React from 'react'

import { BaseLayout } from '../../components/BaseLayout'
import { observer } from 'mobx-react-lite'

import { Button } from 'antd'
import LinkNext from 'next/link'
import '../../assets/core/customerMarket.less'
import Image from 'next/image';

export const defineYourTargetGroup: React.FC = observer(() => {

  const GroupIllustration = () => {
    return <Image src="/screenshot.png" alt="More peoples" width="250px" height="250px" />
  }

  return (
    <BaseLayout>         
        <div className="ge-container">
          <div style={{display: 'flex'}} >
            <div>
              <div className="flex-define">
                <h1>Imagine who your organization seems…</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, deleniti, maxime similique nisi quisquam reiciendis distinctio dignissimos assumenda molestias pariatur, animi illum dolores minima veritatis est reprehenderit doloremque ab. Sunt?
                Modi ipsam atque asperiores, ab aut alias inventore voluptas in nostrum velit tempora fugiat consequuntur dolor deserunt dignissimos rerum porro nihil repellendus similique voluptatem consequatur? Reprehenderit iste excepturi necessitatibus asperiores!
                Consequuntur cum doloremque a hic totam, eos ducimus accusantium qui minus? Ipsa soluta quo impedit voluptatum quam nesciunt molestiae vel dolorem ea earum iste aspernatur nihil eos iure, nulla blanditiis?</p>
                <h2>3 questions to answer together…</h2>
              </div>
              <div className="btn-row">
                <div>
                  <LinkNext href={'/select-your-plan'}>
                        <Button
                          size="large"
                          type="primary"
                          shape="round"
                          className="ge-hero__btn"
                        >
                          Define together with your team
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
