import React from 'react'
import {
  HomeContact,
  OrganizationsBenefits,
  OrganizationsHero,
  OrganizationsInterview,
} from '../../components'
import { BaseLayout } from '../../components/BaseLayout'
import { withNamespaces, WithNamespaces } from "react-i18next";
import '../../../../locales/utils/i18n';
import {AllStartPagesQuery} from "../../../../src/generated";

interface OrganizationProps extends WithNamespaces {
  /** i18n translate function */
  t: Function,
  data?: NonNullable<AllStartPagesQuery>
}

export const Organizations: React.FC<OrganizationProps> = (props) => {
  const pageData = props?.data?.allStart_pages?.edges[0]?.node
  return (
    <BaseLayout>
      <div className="ge-container">
        <OrganizationsHero
          imgSrc="https://picsum.photos/600/400"
          title="All organizations benefits from Goal based leadership"
          subtitle=""
          btnText="Add your first organization "
          btnLink="/create-organization"
          shoutText="Join with the invitation code"
          shoutLink="test"
        />
        <OrganizationsInterview
          title="Learn more about organizations in GoalEnvision"
          videoSrc="test"
          subtitle=""
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          linkText="Go to the leadership training "
        />
        <OrganizationsBenefits
          title="Efficient leadership training that is theoretical as well as practical. We guarantee  time well spent!"
          cards={[1, 2, 3]}
          linkSrc="test"
          linkText="test"
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
      </div>
    </BaseLayout>
  )
};

export default withNamespaces((props) => props.namespaces)(Organizations)
