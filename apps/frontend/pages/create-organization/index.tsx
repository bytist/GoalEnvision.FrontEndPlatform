/* eslint-disable @typescript-eslint/camelcase */
import React, { useEffect, useState } from 'react'
import '../../../../locales/utils/i18n';
import { WithNamespaces, withNamespaces } from 'react-i18next'
import { CreateModalStore } from '../../utils/contexts'
import Head from 'next/dist/next-server/lib/head'
import { Layout, Spin } from 'antd'
import { ErrorModal } from '../../components'
import { createActions } from '../../store/modules/create'
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch, useStore } from 'react-redux'
import {
  CreateHead,
  OrganizationDetails
} from "../../components";
import { ActionTypes } from '../../store/types'
import {
  CreateOrganizationsQueryType
} from '../../services/http/types'
import { useRouter } from "next/router";
import { goToSuccessUnits } from "../../assets/functions";

interface CreateProps extends WithNamespaces {
  /** i18n translate function */
  t: Function
}

const Index: React.FC<CreateProps> = ({ t }) => {
  const { Content, Header } = Layout;

  const router = useRouter();

  const modals = t('modals', { returnObjects: true });

  const breadcrumbsTexts = t('breadcrumbs', { returnObjects: true });

  const pageTexts = t('create_pages', { returnObjects: true });

  const { create_org_details } = pageTexts;

  const { getAccessTokenSilently } = useAuth0();

  const [token, setToken] = useState('');

  const [loading, setLoading] = useState(true);

  const { user } = useAuth0();

  const store = useStore();

  const dispatch = useDispatch();

  const [error, setError] = useState({
    title: '',
    text: ''
  });

  const showError = (title: string, text: string) => {
    setError({
      text: text,
      title: title
    });
    CreateModalStore.setShowErrorModal(true);
  };

  const [organization, setOrganization] = useState(undefined);

  const createOrganization = async (organization) => {
    if (organization.Id) {
      return await dispatch(createActions[ActionTypes.ORGANIZATIONS_UPDATE](token, organization))
    } else {
      return await dispatch(createActions[ActionTypes.ORGANIZATIONS_CREATE](token, organization))
    }
  };

  const handler = (step: number, data?: CreateOrganizationsQueryType) => {
    switch(step) {
      case(0) :
        exitHandler();
        break;
      case(2):
        setOrganization(data);
        let empId = 0;
        const state = store.getState().createState;
        state.allEmployees.some(e => {
          if (user.email === e.email) {
            empId = e.id;
            return true;
          }
        });
        const organization: CreateOrganizationsQueryType = {
          ...data,
          EmployeeCreatorId: empId
        };
        if (router.query.org) {
          organization.Id = router.query.org ? Number(router.query.org) : undefined;
        }
        /*
        if (!organization.Id) {
          setLoading(true);
          createOrganization(organization)
            .then((resp) => {
              setLoading(false);
              const org: any = resp;
              if (org && org.id) {
                goToSuccessUnits(router, org.id)
              } else {
                const data: any = resp;
                showError('Error', data.Message ? data.Message : 'Some error occured')
              }
            })
            .catch((err) => {
              console.log(err);
              setLoading(false)
            })
        } else {
          goToSuccessUnits(router)
        }
        */
        setLoading(true);
        createOrganization(organization)
          .then((resp) => {
            setLoading(false);
            const org: any = resp;
            if (org && org.id) {
              goToSuccessUnits(router, org.id)
            } else {
              const data: any = resp;
              showError('Error', data.Message ? data.Message : 'Some error occured')
            }
          })
          .catch((err) => {
            console.log(err);
            setLoading(false)
          })
        break;
      case(3) :
        router.push('/');
        break;
    }
  };

  const fetchData = async () => {
    if (token.length) {
      let orgId = router.query.org ? Number(router.query.org) : undefined;
      Promise.all([
        await dispatch(createActions[ActionTypes.EMPLOYEE_ALL_REQUEST](token)),
        orgId ? await dispatch(createActions[ActionTypes.ORGANIZATIONS_REQUEST](token, orgId)) : undefined,
        await dispatch(createActions[ActionTypes.INDUSTRIES_REQUEST](token)),
        await dispatch(createActions[ActionTypes.ROLES_GROUPS_REQUEST](token)),
      ])
        .then(() => {
          setLoading(false);
          const state = store.getState().createState;
          if (store.getState().createState.organizations[0]) {
            let industry: number = 0;
            state.industries.some(i => {
              if (i.name === state.organizations[0].industry) {
                industry = i.id;
                return true;
              }
            });
            let role = 0;
            state.allEmployees.some(e => {
              if (user.email === e.email) {
                state.rolesGroups.some(rg => {
                  rg.organizationRoles.some(r => {
                    if (e.organizationRole && r.name === e.organizationRole) {
                      role = r.id;
                      return true
                    }
                  });
                  if (role > 0) {
                    return true;
                  }
                });
                return true;
              }
            });
            setOrganization({
              OrganizationName: state.organizations[0].name,
              IndustryId: industry,
              EmployeeCreatorRoleId: role
            });
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log(err)
        })
    }
  };

  const exitHandler = () => {
    let showModal = false;
    for (let e of document.querySelectorAll('#OrganizationName, #IndustryId, #EmployeeCreatorRoleId')) {
      if (e.getAttribute('value').trim().length > 0) {
        showModal = true;
        break
      }
    }
    if (showModal) {
      CreateModalStore.setShowStep1ExitModal(true);
    } else {
      router.push('/');
    }
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
    dispatch({ type: ActionTypes.ORGANIZATIONS_CLEAR });
    setOrganization(undefined);
    fetchData()
  }, [token, router.query.org]);

  const {
    crumb_create_organization,
    crumb_create_org_details
  } = breadcrumbsTexts;

  const initialCrumbs = [
    {
      path: '/',
      breadcrumbName: crumb_create_organization?.text
    },
    {
      path: '/create-organization',
      breadcrumbName: crumb_create_org_details?.text
    }
  ];

  return (
    <>
      <Head>
        <title>Goal Envision</title>
      </Head>

      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ background: 'none', padding: '40px 0' }}>
          <CreateHead
            routes={initialCrumbs}
            exitHandler={exitHandler}
            step={1}
          />
        </Header>

        <ErrorModal
          errorText={error.text}
          errorTitle={error.title}
        />

        <Spin spinning={loading}>
          <Content style={{ padding: '40px 0' }}>
            <OrganizationDetails
              action={handler}
              modalTexts={modals.exit_modal}
              texts={create_org_details}
              industries={store.getState().createState.industries}
              rolesGroups={store.getState().createState.rolesGroups}
              organization={organization}
            />
          </Content>
        </Spin>
      </Layout>
    </>
  )
};

export default withNamespaces((props) => props.namespaces)(Index)
