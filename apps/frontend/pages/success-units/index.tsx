import '../../../../locales/utils/i18n'

import { BuildSuccess, CreateHead } from '../../components'
import { Layout, Spin } from 'antd'
/* eslint-disable @typescript-eslint/camelcase */
import React, { useEffect, useState } from 'react'
import { WithNamespaces, withNamespaces } from 'react-i18next'
import { useDispatch, useStore } from 'react-redux'

import { ActionTypes } from '../../store/types'
import Head from 'next/dist/next-server/lib/head'
import { createActions } from '../../store/modules/create'
import { goToDiagram } from '../../assets/functions'
import { useAuth0 } from '@auth0/auth0-react'
import { useRouter } from 'next/router'

interface CreateProps extends WithNamespaces {
  /** i18n translate function */
  t: Function
}

const Index: React.FC<CreateProps> = ({ t }) => {
  const { Content, Header } = Layout

  const breadcrumbsTexts = t('breadcrumbs', { returnObjects: true })

  const pageTexts = t('create_pages', { returnObjects: true })

  const { create_build_success } = pageTexts

  const { getAccessTokenSilently } = useAuth0()

  const [token, setToken] = useState('')

  const [loading, setLoading] = useState(true)

  const handler = (step: number) => {
    switch (step) {
      case 0:
        router.push('/')
        break
      case 1:
        goToDiagram(router, router.query.org)
        break
    }
  }

  const store = useStore()

  const dispatch = useDispatch()

  const router = useRouter()

  const fetchData = async () => {
    let orgId = router.query.org ? Number(router.query.org) : undefined
    if (!orgId) {
      const state = store.getState().createState
      orgId = state.organizations[0] ? state.organizations[0].id : undefined
    }
    if (token.length && orgId) {
      dispatch({ type: ActionTypes.UNIT_UPDATE, payload: [] })
      Promise.all([
        await dispatch(createActions[ActionTypes.UNIT_REQUEST](token)),
        await dispatch(
          createActions[ActionTypes.ORGANIZATIONS_REQUEST](token, orgId)
        ),
      ])
        .then(() => {
          setLoading(false)
        })
        .catch((err) => {
          setLoading(false)
          console.log(err)
        })
    }
  }

  const deleteUnitAction = async (unit) => {
    await dispatch(
      createActions[ActionTypes.UNIT_DELETE](token, { unitId: unit.id })
    )
    fetchData()
  }

  useEffect(() => {
    const getToken = async () => {
      try {
        const accessToken = await getAccessTokenSilently()
        setToken(accessToken)
      } catch (error) {
        console.log(error)
      }
    }
    getToken()
  }, [getAccessTokenSilently, token])

  useEffect(() => {
    fetchData()
  }, [token, router.query.org])

  const {
    crumb_create_organization,
    crumb_create_success_units,
  } = breadcrumbsTexts

  const initialCrumbs = [
    {
      path: '/',
      breadcrumbName: crumb_create_organization?.text,
    },
    {
      path: '/success-units',
      breadcrumbName: crumb_create_success_units?.text,
    },
  ]

  return (
    <>
      <Head>
        <title>Goal Envision</title>
      </Head>

      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ background: 'none', padding: '40px 0' }}>
          <CreateHead
            routes={initialCrumbs}
            exitHandler={() => goToDiagram(router, router.query.org)}
            step={2}
          />
        </Header>
        <Content style={{ padding: '40px 0', display: 'flex', justifyContent: 'stretch', alignItems: 'stretch' }}>
            <BuildSuccess
              action={handler}
              deleteUnitAction={deleteUnitAction}
              data={{
                organization: store.getState().createState.organizations[0],
                units: store.getState().createState.units,
              }}
              texts={create_build_success}
            />
        </Content>
      </Layout>
    </>
  )
}

export default withNamespaces((props) => props.namespaces)(Index)
