/* eslint-disable @typescript-eslint/camelcase */
import React, { useEffect, useState } from 'react';
import { WithNamespaces, withNamespaces } from 'react-i18next';
import '../../../../locales/utils/i18n';
import '../create-organization';
import { CreateHead, ErrorModal, SuccessUnits } from '../../components';
import Head from "next/dist/next-server/lib/head";
import { Layout, Spin } from 'antd';
import { createActions } from '../../store/modules/create'
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch, useStore } from 'react-redux'
import { ActionTypes } from '../../store/types'
import { useRouter } from 'next/router'
import {
  CreateEmployeeQueryType,
  CreateUnitQueryType,
  CreateWorkGroupQueryType,
  EmployeesResponseType,
  UnitsResponseType,
  WorkGroupsResponseType
} from '../../services/http/types'
import { EmployeeFormType } from "../../types/create_forms";
import { CreateModalStore } from '../../utils/contexts';
import { goToSuccessUnits } from '../../assets/functions';

interface CreateProps extends WithNamespaces {
  /** i18n translate function */
  t: Function
}

const Index: React.FC<CreateProps> = ({ t }) => {
  const router = useRouter();

  const breadcrumbs = t('breadcrumbs', { returnObjects: true});

  const modals = t('modals', { returnObjects: true} );

  let texts = t('success_units', { returnObjects: true} );

  texts = { ...texts, modals: modals };

  const { Content, Header } = Layout;

  const dispatch = useDispatch();

  const store = useStore();

  const { getAccessTokenSilently } = useAuth0();

  const [token, setToken] = useState('');

  const [dictionaryLoaded, setDictionaryLoaded] = useState(false);

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

  const saveEmployee = async (human: EmployeeFormType, groups: WorkGroupsResponseType[]) => {
    if (human) {
      let FamilyName = human.name;
      let GivenName = '';
      let names = human.name.split(' ');
      if (names.length >= 2) {
        FamilyName = names[0];
        GivenName = names.slice(1).join(' ');
      }
      const employee: CreateEmployeeQueryType = {
        FamilyName: FamilyName,
        GivenName: GivenName,
        FormalTitle: human.title,
        FormalEmail: human.email,
        EmployerId: human.employerId,
        WorkGroups: []
      };
      console.log(groups);
      if (groups) {
        groups.map(g => {
          if (g.id) {
            employee.WorkGroups.push(g.id)
          }
        })
      }
      if (human.id) {
        employee.Id = human.id
      }
      if (!employee.Id) {
        return dispatch(createActions[ActionTypes.EMPLOYEE_CREATE](token, employee));
      } else {
        return dispatch(createActions[ActionTypes.EMPLOYEE_UPDATE](token, employee))
      }
    }
  };

  const saveHead = (human: EmployeeFormType) => {
    return saveEmployee(human, [])
      .then((result: any) => {
        console.log(result);
        if (result && result.id) {
          return result as EmployeesResponseType;
        } else if (result) {
          showError('Error', result.Message ? result.Message : 'Some error occured')
        }
      })
  };

  const saveWorkGroup = async (group: WorkGroupsResponseType, employees: Array<EmployeesResponseType>) => {
    const workGroup: CreateWorkGroupQueryType = {
      Name: group.name,
      Employees: []
    };
    if (group.id && store.getState().createState.units[0]) {
      workGroup.UnitId = store.getState().createState.units[0]?.id;
    }
    if (group.id) {
      workGroup.Id = group.id;
    }
    if (employees) {
      employees.map(h => {
        workGroup.Employees.push(h.id);
      });
    }
    if (!workGroup.Employees || workGroup.Employees.length === 0) {
      return dispatch({ type: ActionTypes.WORK_GROUP_UPDATE_SILENT, payload: [workGroup] });
    }
    if (!workGroup.Id) {
      return await dispatch(createActions[ActionTypes.WORK_GROUP_CREATE](token, workGroup))
    } else {
      return await dispatch(createActions[ActionTypes.WORK_GROUP_UPDATE](token, workGroup))
    }
  };

   const saveUnit = async (unit: UnitsResponseType, state) => {
     const workGroups = [];
     const keyEmployees = [];
     const employees = [];
     state.workGroups.map(g => {
       if (g.id) {
         if (workGroups.indexOf(g.id) < 0 && g.employees && g.employees.length > 0) workGroups.push(g.id);
         if (g.employees) {
           g.employees.map(e => {
             if (e.id && employees.indexOf(e.id) < 0) {
               employees.push(e.id);
             }
           })
         }
       }
     });
     state.employees.map(e => {
       if (e.id && keyEmployees.indexOf(e.id) < 0) {
         keyEmployees.push(e.id);
       }
       if (e.id && employees.indexOf(e.id) < 0) {
         employees.push(e.id);
       }
     });
     const Unit: CreateUnitQueryType = {
       Name: unit.name,
       UnitTypeId: typeof unit.unitType !== 'object' ? unit.unitType : unit.unitType?.id,
       OrganizationId: router.query.org ? Number(router.query.org) : store.getState().createState.organizations[0] ? store.getState().createState.organizations[0].id : 0,
       WorkGroups: workGroups,
       KeyEmployees: keyEmployees,
       Employees: employees
     };
     const stateUnit = store.getState().createState.units[0];
     if (state.head) {
       Unit.EmployeeHeadId = state.head.id
     }
     if (!stateUnit || !stateUnit.id) {
       return await dispatch(createActions[ActionTypes.UNIT_CREATE](token, Unit))
     } else {
       Unit.Id = stateUnit.id;
       return await dispatch(createActions[ActionTypes.UNIT_UPDATE](token, Unit))
     }
  };

  const deleteAction = (id: number, type: string) => {
    switch (type) {
      case ('employee'):
        const employees = store.getState().createState.employees.slice();
        let ind = -1;
        let found = false;
        employees.some(e => {
          ind++;
          if (e.id === id) {
            found = true;
            return true;
          }
        });
        if (found) {
          employees.splice(ind, 1);
          dispatch({ type: ActionTypes.EMPLOYEE_CLEAR });
          dispatch({ type: ActionTypes.EMPLOYEE_UPDATE, payload: employees });
        }
        // dispatch(createActions[ActionTypes.EMPLOYEE_DELETE](token, { employeeId: id }))
        break;
      case ('head'):
        // some action
        break;
      case ('workGroup'):
        const workGroups = store.getState().createState.workGroups.slice();
        ind = -1;
        found = false;
        workGroups.some(e => {
          ind++;
          if (e.id === id) {
            found = true;
            return true;
          }
        });
        if (found) {
          workGroups.splice(ind, 1);
          dispatch({ type: ActionTypes.WORK_GROUP_CLEAR });
          dispatch({ type: ActionTypes.WORK_GROUP_UPDATE, payload: workGroups });
        }
    }
  };

  const fetchData = async () => {
    if (token.length && router.query.org) {
      dispatch({ type: ActionTypes.UNIT_UPDATE, payload: [] });
      dispatch({ type: ActionTypes.EMPLOYEE_CLEAR });
      dispatch({ type: ActionTypes.WORK_GROUP_CLEAR });
      const orgId = Number(router.query.org);
      let unitId = router.query.unit ? Number(router.query.unit) : undefined;
      Promise.all([
        await dispatch(createActions[ActionTypes.ORGANIZATIONS_REQUEST](token, orgId)),
        unitId > 0 ? await dispatch(createActions[ActionTypes.UNIT_REQUEST](token, unitId)) : undefined,
        await dispatch(createActions[ActionTypes.EMPLOYEE_ALL_REQUEST](token)),
        await dispatch(createActions[ActionTypes.UNIT_TYPES_REQUEST](token)),
        unitId > 0 ? undefined : await dispatch(createActions[ActionTypes.UNIT_INITIAL]()),
      ])
        .then(() => {
          const unit = store.getState().createState.units[0];
          if (unit && unit.workGroups) {
            const getGroups = async (groups) => {
              return groups.reduce((p, group) => {
                return p.then(() => dispatch(createActions[ActionTypes.WORK_GROUP_REQUEST](token, group.id)))
              }, Promise.resolve())
            };
            getGroups(unit.workGroups)
              .then(() => setDictionaryLoaded(true))
          } else {
            setDictionaryLoaded(true)
          }
        })
        .catch((err) => {
          setDictionaryLoaded(true);
          console.log(err)
        })
    }
  };

  const getToken = async () => {
    try {
      const accessToken = await getAccessTokenSilently();
      setToken(accessToken)
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getToken()
  }, [getAccessTokenSilently, token]);

  useEffect(() => {
    fetchData()
  }, [token, router.query]);

  return (
    <>
      <Head>
        <title>Goal Envision</title>
      </Head>

      <Layout style={{ minHeight: '100vh' }} >
        <Header style={{ background: 'none', padding: '40px 0' }}>
          <CreateHead
            routes={[{
              path: '/success-units',
              breadcrumbName: !store.getState().createState.units[0] ?
                breadcrumbs?.crumb_create_success_units?.text :
                breadcrumbs?.crumb_edit_success_units?.text
            }]}
            exitHandler={() => goToSuccessUnits(router, router.query.org)}
          />
        </Header>

        <ErrorModal
          errorText={error.text}
          errorTitle={error.title}
        />

        <Spin spinning={!dictionaryLoaded}>
          <Content style={{ padding: '40px 0' }}>
            <SuccessUnits
              loaded={dictionaryLoaded}
              update={false}
              texts={texts}
              saveEmployee={saveEmployee}
              saveWorkGroup={saveWorkGroup}
              saveUnit={saveUnit}
              saveHead={saveHead}
              deleteAction={deleteAction}
            />
          </Content>
        </Spin>
      </Layout>
    </>
  )
};

export default withNamespaces((props) => props.namespaces)(Index);
