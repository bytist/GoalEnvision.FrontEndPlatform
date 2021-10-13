import React from 'react'
import {
  GoalStatusOverview
} from '../../components'
import { BaseLayout } from '../../components/BaseLayout'
import { goalCards, goalTexts, peopleNotStarted } from '../../assets'
import { withNamespaces, WithNamespaces } from "react-i18next";
import '../../../../locales/utils/i18n';
import {AllStartPagesQuery} from "../../../../src/generated";
import { useAuth0 } from '@auth0/auth0-react'

interface OrganizationProps extends WithNamespaces {
  /** i18n translate function */
  t: Function,
  data?: NonNullable<AllStartPagesQuery>
}

export const Organizations: React.FC<OrganizationProps> = (props) => {
  const { t } = props;
  const modals = t('modals', { returnObjects: true} );
  const { isAuthenticated } = useAuth0();

  return (
    <BaseLayout>
      <div className="ge-container">
        {isAuthenticated &&
        <GoalStatusOverview
          cards={goalCards}
          texts={{ ...goalTexts, modalTexts: modals?.add_people_modal }}
          nonInvited={peopleNotStarted}
        />
        }
      </div>
    </BaseLayout>
  )
};

export default withNamespaces((props) => props.namespaces)(Organizations)
