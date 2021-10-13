import {
  HomeBenefits,
  HomeContact,
  HomeDropMenu,
  HomeGoals,
  HomeHero,
  HomeInterview,
  LoginModal,
} from '../../components'
import React, { useEffect, useState } from 'react'

import { AuthModalStore } from '../../utils/contexts'
import { BaseLayout } from '../../components/BaseLayout'
import { HomePageProps } from '../../common/homeStaticProps'
import { observer } from 'mobx-react-lite'
import { useAuth0 } from '@auth0/auth0-react'

export { getServerSideProps } from '../../common/homeStaticProps'

export const Index: React.FC<HomePageProps> = observer((props) => {
  const pageData = props?.data?.allStart_pages?.edges[0]?.node
  const [activeTab, setActiveTab] = useState('1')
  const { user } = useAuth0()

  useEffect(() => {
    //TODO set global localstorage servise
    const isNotFirstLogin = localStorage.getItem('completed-registration')
    if (
      user &&
      user['https://goalenvision-api.dev.ukad-demo.com/loginCounter'] === 1 &&
      !isNotFirstLogin
    ) {
      AuthModalStore.setShowModal(true)
      localStorage.setItem('completed-registration', 'true')
    }
    if (
      user &&
      user['https://goalenvision-api.dev.ukad-demo.com/loginCounter'] !== 1
    ) {
      localStorage.removeItem('completed-registration')
    }
  }, [user])

  return (
    <BaseLayout
      onClick={(e: string) => setActiveTab(e)}
      dataLayout={props.dataLayout}
    >
      {activeTab === '2' && <HomeDropMenu />}
      <>
        <LoginModal />
        <HomeHero
          imgSrc={pageData?.repeatable_elements[0]?.background_image?.url}
          title={pageData?.repeatable_elements[0]?.description[0]?.text}
          subtitle={pageData?.repeatable_elements[0]?.description[1]?.text}
          btnText={pageData?.button[0]?.text}
          btnLink="#"
          shoutText={pageData?.shout_text[0]?.text}
          shoutLink="#"
        />
        <HomeGoals
          titleFirst={
            pageData?.body2[0]?.__typename === 'Start_pageBody2Goals1' &&
            pageData?.body2[0]?.fields[0]?.header[0]?.text
          }
          titleSecond={
            pageData?.body2[0]?.__typename === 'Start_pageBody2Goals1' &&
            pageData?.body2[0]?.fields[1]?.header[0]?.text
          }
          textFirst={
            pageData?.body2[0]?.__typename === 'Start_pageBody2Goals1' &&
            pageData?.body2[0]?.fields[0]?.description[0]?.text
          }
          textSecond={
            pageData?.body2[0]?.__typename === 'Start_pageBody2Goals1' &&
            pageData?.body2[0]?.fields[1]?.description[0]?.text
          }
          linkTextFirst={
            pageData?.body2[0]?.__typename === 'Start_pageBody2Goals1' &&
            pageData?.body2[0]?.fields[0]?.button_text[0]?.text
          }
          linkTextSecond={
            pageData?.body2[0]?.__typename === 'Start_pageBody2Goals1' &&
            pageData?.body2[0]?.fields[1]?.button_text[0]?.text
          }
          firstImgUrl={
            (pageData?.body2[0]?.__typename === 'Start_pageBody2Goals1' &&
              pageData?.body2[0]?.fields[0]?.image?.url) ||
            ''
          }
          secImgUrl={
            (pageData?.body2[0]?.__typename === 'Start_pageBody2Goals1' &&
              pageData?.body2[0]?.fields[1]?.image?.url) ||
            ''
          }
        />
        <HomeBenefits
          title={
            pageData?.body2[1]?.__typename === 'Start_pageBody2Goals' &&
            pageData?.body2[1]?.primary?.heading[0]?.text
          }
          linkSrc="#"
          linkText={
            pageData?.body2[1]?.__typename === 'Start_pageBody2Goals' &&
            pageData?.body2[1]?.primary?.contact_us_button_text
          }
          cards={
            pageData?.body2[1]?.__typename === 'Start_pageBody2Goals' &&
            pageData?.body2[1]?.fields
          }
        />
        <HomeInterview
          title={
            pageData?.body2[2]?.__typename ===
              'Start_pageBody2Interview_block' &&
            pageData?.body2[2]?.primary?.heading[0]?.text
          }
          videoSrc={
            pageData?.body2[2]?.__typename ===
              'Start_pageBody2Interview_block' &&
            pageData?.body2[2]?.primary?.video_id[0]?.text
          }
          subtitle={
            pageData?.body2[2]?.__typename ===
              'Start_pageBody2Interview_block' &&
            pageData?.body2[2]?.primary?.title[0]?.text
          }
          text={
            pageData?.body2[2]?.__typename ===
              'Start_pageBody2Interview_block' &&
            pageData?.body2[2]?.primary?.description[0]?.text
          }
        />
        <HomeContact
          title={
            pageData?.body2[3]?.__typename === 'Start_pageBody2Contact_block' &&
            pageData?.body2[3]?.primary?.title[0]?.text
          }
          text={
            pageData?.body2[3]?.__typename === 'Start_pageBody2Contact_block' &&
            pageData?.body2[3]?.primary?.description[0]?.text
          }
          linkText={
            pageData?.body2[3]?.__typename === 'Start_pageBody2Contact_block' &&
            pageData?.body2[3]?.primary?.contact_us_button_text
          }
          linkSrc="#"
          linkSecText={
            pageData?.body2[3]?.__typename === 'Start_pageBody2Contact_block' &&
            pageData?.body2[3]?.primary?.unlock_button_text
          }
          linkSecSrc="#"
          imgSrc={
            pageData?.body2[3]?.__typename === 'Start_pageBody2Contact_block'
              ? pageData?.body2[3]?.primary?.image?.url
              : undefined
          }
        />
      </>
    </BaseLayout>
  )
})

// export default withApollo(
//   ssrAllStarts.withPage((arg) => ({
//     variables: { lang: 'en-us' || '' },
//   }))(Index)
// )
export default Index
