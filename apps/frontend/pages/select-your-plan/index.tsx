import '../../assets/core/customerMarket.less'
/* eslint-disable @typescript-eslint/camelcase */
import '../../../../locales/utils/i18n';

import { BuildSuccess, CreateHead } from "../../components"
import { Button, Card, Space } from 'antd'
import { Layout, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { WithNamespaces, withNamespaces } from 'react-i18next'
import { useDispatch, useStore } from 'react-redux'

import { ActionTypes } from '../../store/types'
import { BaseLayout } from '../../components/BaseLayout'
import Head from 'next/dist/next-server/lib/head'
import LinkNext from 'next/link'
import { createActions } from '../../store/modules/create'
import { goToSelectPlan } from "../../assets/functions"
import { observer } from 'mobx-react-lite'
import { useAuth0 } from '@auth0/auth0-react'
import { useRouter } from "next/router";

interface card {
  id: number;
  title: string;
  title2: string;
  text1: string;
  text2: string;
}

interface CreateProps extends WithNamespaces {
  /** i18n translate function */
  t: Function
}

export const selectYourPlan: React.FC<CreateProps> = observer(({ t }) => {
  const { Content, Header } = Layout;

  const breadcrumbsTexts = t('breadcrumbs', { returnObjects: true });

  const pageTexts = t('create_pages', { returnObjects: true });

  const { create_build_success } = pageTexts;

  const { getAccessTokenSilently } = useAuth0();

  const [token, setToken] = useState('');

  const [loading, setLoading] = useState(true);

  const handler = (step: number) => {
    switch(step) {
      case(0) :
        router.push('/');
        break;
      case(1):
        goToSelectPlan(router, router.query.org);
        break;
    }
  };

  const store = useStore();

  const dispatch = useDispatch();

  const router = useRouter();

  const fetchData = async () => {
    let orgId = router.query.org ? Number(router.query.org) : undefined;
    if (!orgId) {
      const state = store.getState().createState;
      orgId = state.organizations[0] ? state.organizations[0].id : undefined
    }
    if (token.length && orgId) {
      dispatch({ type: ActionTypes.UNIT_UPDATE, payload: [] });
      Promise.all([
        await dispatch(createActions[ActionTypes.UNIT_REQUEST](token)),
        await dispatch(createActions[ActionTypes.ORGANIZATIONS_REQUEST](token, orgId)),
      ])
        .then((values) => {
          setLoading(false);
          console.log('values', values);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err)
        })
    }
  };

  const deleteUnitAction = async (unit) => {
    await dispatch(createActions[ActionTypes.UNIT_DELETE](token, { unitId: unit.id }));
    fetchData();
  };

  useEffect(() => {
    const getToken = async () => {
      try {
        const accessToken = await getAccessTokenSilently();
        setToken(accessToken)
      } catch (error) {
        console.log(error)
      }
    };
    getToken()
  }, [getAccessTokenSilently, token]);

  useEffect(() => {
    fetchData()
  }, [token, router.query.org]);

  const {
    crumb_select_your_plan,
    crumb_choose_your_plan
  } = breadcrumbsTexts;

  const initialCrumbs = [
    {
      path: '/',
      breadcrumbName: crumb_select_your_plan?.text
    },
    {
      path: '/success-units',
      breadcrumbName: crumb_choose_your_plan?.text
    }
  ];

  const cards: card[] = [
    {id: 1, title: 'Free', title2: '0 Euro/m',  text1: '1 user', text2: 'Set vision & goals'},
    {id: 2, title: 'Premium', title2: '260 Euro/m', text1: '25 users', text2: 'Set vision & goals Collaborate in setting vision Delegate reportin'},
    {id: 3, title: 'Integrase', title2: 'Quote', text1: 'Unlimited users', text2: 'Set vision & goals Collaborate in setting vision Delegate reporting Integrations '}
  ];

  return (
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ background: 'none', padding: '40px 0' }}>
          <CreateHead
            routes={initialCrumbs}
            exitHandler={() => goToSelectPlan(router, router.query.org)}
            step={2}
          />
        </Header>
        <div className="ge-container">
          <div className="flex-select-text">
              <h1>Start your subscription to collaborate</h1>
            </div>

            <div className="flex-select">
              <Space align="start">
                {cards.map(card => {
                  return (
                    <div key={card.id}>
                      <Card className="flex-select-card" title={card.title} extra={card.title2} style={{ width: 300 }}>
                        <div className="flex-select-space">
                          <p>{card.text1}</p>
                          <p>{card.text2}</p>
                        </div>
                        <div className="flex-select-btn">
                          <LinkNext href={'/add-your-team'}>
                              <Button
                                size="large"
                                type="primary"
                                shape="round"
                                className="ge-hero__btn"
                              >
                                Choose
                              </Button>
                          </LinkNext>
                        </div>
                      </Card>
                    </div>
                  )
                })}

              </Space>

            </div>
            <div className="flex-select-text">
              <h1>Here is more about our pricing</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, deleniti, maxime similique nisi quisquam reiciendis distinctio dignissimos assumenda molestias pariatur.
              </p>
            </div>
        </div>

      </Layout>
  )
})

export default withNamespaces((props) => props.namespaces)(selectYourPlan);
