import {
  DictionaryCreateUnitTypeQueryType,
  DictionaryDeleteUnitTypeQueryType,
  DictionaryIndustriesQueryType,
  DictionaryOrganizationRolesGroupCreateQueryType,
  DictionaryOrganizationRolesGroupDeleteQueryType,
  DictionaryRolesCreateQueryType,
  DictionaryRolesDeleteQueryType,
  DictionaryOrganizationRolesGroupsResponseType,
  CreateOrganizationsQueryType,
  CreateEmployeeQueryType,
  EmployeeDeleteQueryType,
  CreateWorkGroupQueryType,
  WorkGroupDeleteQueryType,
  DeleteUnitQueryType,
  CreateUnitQueryType, WorkGroupsResponseType, SetInitialUnitType
} from '../services/http/types'
import {
  DictionaryIndustriesType,
  DictionaryRolesType,
  DictionaryUnitTypesType,
  OrganizationsType,
  EmployeesType,
  WorkGroupsType,
  UnitsType,
} from '../types/entities'
import { rootReducer, store } from './index'

import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  StoreAction
>

export enum ActionTypes {
  // Create Store
  INDUSTRIES_REQUEST = 'INDUSTRIES_REQUEST',
  INDUSTRIES_SUCCESS = 'INDUSTRIES_SUCCESS',
  INDUSTRIES_FAILURE = 'INDUSTRIES_FAILURE',
  INDUSTRIES_UPDATE = 'INDUSTRIES_UPDATE',
  INDUSTRIES_CREATE = 'INDUSTRIES_CREATE',
  INDUSTRIES_DELETE = 'INDUSTRIES_DELETE',

  ROLES_REQUEST = 'ROLES_REQUEST',
  ROLES_SUCCESS = 'ROLES_SUCCESS',
  ROLES_FAILURE = 'ROLES_FAILURE',
  ROLES_UPDATE = 'ROLES_UPDATE',
  ROLES_CREATE = 'ROLES_CREATE',
  ROLES_DELETE = 'ROLES_DELETE',

  ROLES_GROUPS_REQUEST = 'ROLES_GROUPS_REQUEST',
  ROLES_GROUPS_SUCCESS = 'ROLES_GROUPS_SUCCESS',
  ROLES_GROUPS_FAILURE = 'ROLES_GROUPS_FAILURE',
  ROLES_GROUPS_UPDATE = 'ROLES_GROUPS_UPDATE',
  ROLES_GROUPS_CREATE = 'ROLES_GROUPS_CREATE',
  ROLES_GROUPS_DELETE = 'ROLES_GROUPS_DELETE',

  UNIT_TYPES_REQUEST = 'UNIT_TYPES_REQUEST',
  UNIT_TYPES_SUCCESS = 'UNIT_TYPES_SUCCESS',
  UNIT_TYPES_FAILURE = 'UNIT_TYPES_FAILURE',
  UNIT_TYPES_UPDATE = 'UNIT_TYPES_UPDATE',
  UNIT_TYPES_CREATE = 'UNIT_TYPES_CREATE',
  UNIT_TYPES_DELETE = 'UNIT_TYPES_DELETE',

  ORGANIZATIONS_REQUEST = 'ORGANIZATIONS_REQUEST',
  ORGANIZATIONS_SUCCESS = 'ORGANIZATIONS_SUCCESS',
  ORGANIZATIONS_FAILURE = 'ORGANIZATIONS_FAILURE',
  ORGANIZATIONS_CREATE = 'ORGANIZATIONS_CREATE',
  ORGANIZATIONS_UPDATE = 'ORGANIZATIONS_UPDATE',
  ORGANIZATIONS_CLEAR = 'ORGANIZATIONS_CLEAR',

  EMPLOYEE_ALL_REQUEST = 'EMPLOYEE_ALL_REQUEST',
  EMPLOYEE_REQUEST = 'EMPLOYEE_REQUEST',
  EMPLOYEE_SUCCESS = 'EMPLOYEE_SUCCESS',
  EMPLOYEE_FAILURE = 'EMPLOYEE_FAILURE',
  EMPLOYEE_UPDATE = 'EMPLOYEE_UPDATE',
  EMPLOYEE_ALL_UPDATE = 'EMPLOYEE_ALL_UPDATE',
  EMPLOYEE_CREATE = 'EMPLOYEE_CREATE',
  EMPLOYEE_DELETE = 'EMPLOYEE_DELETE',
  EMPLOYEE_CLEAR = 'EMPLOYEE_CLEAR',

  WORK_GROUP_REQUEST = 'WORK_GROUP_REQUEST',
  WORK_GROUP_SUCCESS = 'WORK_GROUP_SUCCESS',
  WORK_GROUP_FAILURE = 'WORK_GROUP_FAILURE',
  WORK_GROUP_UPDATE = 'WORK_GROUP_UPDATE',
  WORK_GROUP_UPDATE_SILENT = 'WORK_GROUP_UPDATE_SILENT',
  WORK_GROUP_CREATE = 'WORK_GROUP_CREATE',
  WORK_GROUP_DELETE = 'WORK_GROUP_DELETE',
  WORK_GROUP_CLEAR = 'WORK_GROUP_CLEAR',

  UNIT_REQUEST = 'UNIT_REQUEST',
  UNIT_SUCCESS = 'UNIT_SUCCESS',
  UNIT_FAILURE = 'UNIT_FAILURE',
  UNIT_UPDATE = 'UNIT_UPDATE',
  UNIT_CREATE = 'UNIT_CREATE',
  UNIT_DELETE = 'UNIT_DELETE',
  UNIT_INITIAL = 'UNIT_INITIAL'
}

export type CreateActionTypes =
  | (Action<ActionTypes.INDUSTRIES_UPDATE> & {
      payload: DictionaryIndustriesType[]
    })
  | (Action<ActionTypes.INDUSTRIES_CREATE> & {
      payload: DictionaryIndustriesQueryType
    })
  | (Action<ActionTypes.INDUSTRIES_DELETE> & {
      payload: DictionaryIndustriesQueryType
    })
  | Action<ActionTypes.INDUSTRIES_REQUEST>
  | Action<ActionTypes.INDUSTRIES_SUCCESS>
  | Action<ActionTypes.INDUSTRIES_FAILURE>
  | (Action<ActionTypes.ROLES_UPDATE> & {
      payload: DictionaryRolesType[]
    })
  | (Action<ActionTypes.ROLES_CREATE> & {
      payload: DictionaryRolesCreateQueryType
    })
  | (Action<ActionTypes.ROLES_DELETE> & {
      payload: DictionaryRolesDeleteQueryType
    })
  | Action<ActionTypes.ROLES_REQUEST>
  | Action<ActionTypes.ROLES_SUCCESS>
  | Action<ActionTypes.ROLES_FAILURE>
  | (Action<ActionTypes.ROLES_GROUPS_UPDATE> & {
      payload: DictionaryOrganizationRolesGroupsResponseType[]
    })
  | (Action<ActionTypes.ROLES_GROUPS_CREATE> & {
      payload: DictionaryOrganizationRolesGroupCreateQueryType
    })
  | (Action<ActionTypes.ROLES_GROUPS_DELETE> & {
      payload: DictionaryOrganizationRolesGroupDeleteQueryType
    })
  | Action<ActionTypes.ROLES_GROUPS_REQUEST>
  | Action<ActionTypes.ROLES_GROUPS_SUCCESS>
  | Action<ActionTypes.ROLES_GROUPS_FAILURE>
  | (Action<ActionTypes.UNIT_TYPES_UPDATE> & {
      payload: DictionaryUnitTypesType[]
    })
  | (Action<ActionTypes.UNIT_TYPES_CREATE> & {
      payload: DictionaryCreateUnitTypeQueryType
    })
  | (Action<ActionTypes.UNIT_TYPES_DELETE> & {
      payload: DictionaryDeleteUnitTypeQueryType
    })
  | Action<ActionTypes.UNIT_TYPES_REQUEST>
  | Action<ActionTypes.UNIT_TYPES_SUCCESS>
  | Action<ActionTypes.UNIT_TYPES_FAILURE>
  | (Action<ActionTypes.ORGANIZATIONS_CREATE> & {
      payload: CreateOrganizationsQueryType
    })
  | (Action<ActionTypes.ORGANIZATIONS_UPDATE> & {
      payload: OrganizationsType[]
    })
  | Action<ActionTypes.ORGANIZATIONS_REQUEST>
  | Action<ActionTypes.ORGANIZATIONS_CLEAR>
  | Action<ActionTypes.ORGANIZATIONS_SUCCESS>
  | Action<ActionTypes.ORGANIZATIONS_FAILURE>
  | (Action<ActionTypes.EMPLOYEE_UPDATE> & {
      payload: EmployeesType[]
    })
  | (Action<ActionTypes.EMPLOYEE_ALL_UPDATE> & {
      payload: EmployeesType[]
    })
  | (Action<ActionTypes.EMPLOYEE_CREATE> & {
      payload: CreateEmployeeQueryType
    })
  | (Action<ActionTypes.EMPLOYEE_DELETE> & {
      payload: EmployeeDeleteQueryType
    })
  | Action<ActionTypes.EMPLOYEE_REQUEST>
  | Action<ActionTypes.EMPLOYEE_ALL_REQUEST>
  | Action<ActionTypes.EMPLOYEE_CLEAR>
  | Action<ActionTypes.EMPLOYEE_SUCCESS>
  | Action<ActionTypes.EMPLOYEE_FAILURE>
  | (Action<ActionTypes.WORK_GROUP_UPDATE> & {
      payload: WorkGroupsType[]
    })
  | (Action<ActionTypes.WORK_GROUP_CREATE> & {
      payload: CreateWorkGroupQueryType
    })
  | (Action<ActionTypes.WORK_GROUP_UPDATE_SILENT> & {
    payload: WorkGroupsResponseType[]
  })
  | (Action<ActionTypes.WORK_GROUP_DELETE> & {
      payload: WorkGroupDeleteQueryType
    })
  | Action<ActionTypes.WORK_GROUP_REQUEST>
  | Action<ActionTypes.WORK_GROUP_SUCCESS>
  | Action<ActionTypes.WORK_GROUP_FAILURE>
  | Action<ActionTypes.WORK_GROUP_CLEAR>
  | (Action<ActionTypes.UNIT_UPDATE> & {
    payload: UnitsType[]
  })
  | (Action<ActionTypes.UNIT_CREATE> & {
      payload: CreateUnitQueryType
    })
  | (Action<ActionTypes.UNIT_DELETE> & {
      payload: DeleteUnitQueryType
    })
  | Action<ActionTypes.UNIT_REQUEST>
  | Action<ActionTypes.UNIT_SUCCESS>
  | Action<ActionTypes.UNIT_FAILURE>
  | Action<ActionTypes.UNIT_INITIAL> & {
      payload: SetInitialUnitType
}


export type StoreAction = CreateActionTypes
