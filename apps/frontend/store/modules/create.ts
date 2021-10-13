import { ActionTypes, AppThunk, CreateActionTypes } from '../types'
import {
  DictionaryCreateUnitTypeQueryType,
  DictionaryDeleteUnitTypeQueryType,
  DictionaryIndustriesQueryType,
  DictionaryOrganizationRolesGroupCreateQueryType,
  DictionaryOrganizationRolesGroupDeleteQueryType,
  CreateOrganizationsQueryType,
  DictionaryRolesCreateQueryType,
  DictionaryRolesDeleteQueryType,
  EmployeeDeleteQueryType,
  CreateEmployeeQueryType,
  CreateWorkGroupQueryType,
  WorkGroupDeleteQueryType,
  DeleteUnitQueryType,
  CreateUnitQueryType, EmployeesResponseType, WorkGroupsResponseType
} from '../../services/http/types'
import {
  DictionaryIndustriesType,
  DictionaryRolesGroupsType,
  DictionaryRolesType,
  DictionaryUnitTypesType,
  OrganizationsType,
  EmployeesType,
  WorkGroupsType,
  UnitsType
} from '../../types/entities'

import { httpService } from '../../services'

export interface CreateState {
  loading: boolean
  error: boolean
  industries: DictionaryIndustriesType[]
  roles: DictionaryRolesType[]
  rolesGroups: DictionaryRolesGroupsType[]
  unitTypes: DictionaryUnitTypesType[]
  organizations: OrganizationsType[]
  employees: EmployeesType[]
  allEmployees: EmployeesType[]
  workGroups: WorkGroupsType[]
  unsavedWorkGroups: WorkGroupsType[]
  units: UnitsType[]
}

export const initialState: CreateState = {
  loading: false,
  error: false,
  industries: [],
  roles: [],
  rolesGroups: [],
  unitTypes: [],
  organizations: [],
  employees: [],
  allEmployees: [],
  workGroups: [],
  unsavedWorkGroups: [],
  units: []
}

export const createReducer = (
  state = initialState,
  action: CreateActionTypes
): CreateState => {
  switch (action.type) {
    case ActionTypes.INDUSTRIES_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      }
    }
    case ActionTypes.INDUSTRIES_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      }
    }
    case ActionTypes.INDUSTRIES_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      }
    }
    case ActionTypes.INDUSTRIES_UPDATE: {
      return {
        ...state,
        industries: [...action.payload],
      }
    }
    case ActionTypes.ROLES_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      }
    }
    case ActionTypes.ROLES_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      }
    }
    case ActionTypes.ROLES_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      }
    }
    case ActionTypes.ROLES_UPDATE: {
      return {
        ...state,
        roles: [...action.payload],
      }
    }
    case ActionTypes.ROLES_GROUPS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      }
    }
    case ActionTypes.ROLES_GROUPS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      }
    }
    case ActionTypes.ROLES_GROUPS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      }
    }
    case ActionTypes.ROLES_GROUPS_UPDATE: {
      return {
        ...state,
        rolesGroups: [...action.payload],
      }
    }
    case ActionTypes.UNIT_TYPES_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      }
    }
    case ActionTypes.UNIT_TYPES_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      }
    }
    case ActionTypes.UNIT_TYPES_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      }
    }
    case ActionTypes.UNIT_TYPES_UPDATE: {
      return {
        ...state,
        unitTypes: [...action.payload],
      }
    }
    case ActionTypes.UNIT_INITIAL: {
      return {
        ...state,
        units: [action.payload],
      }
    }
    case ActionTypes.ORGANIZATIONS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      }
    }
    case ActionTypes.ORGANIZATIONS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      }
    }
    case ActionTypes.ORGANIZATIONS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      }
    }
    case ActionTypes.ORGANIZATIONS_UPDATE: {
      return {
        ...state,
        organizations: Array.isArray(action.payload) ? [...action.payload] : [...[action.payload]],
      }
    }
    case ActionTypes.ORGANIZATIONS_CLEAR: {
      return {
        ...state,
        organizations: [],
      }
    }
    case ActionTypes.EMPLOYEE_ALL_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      }
    }
    case ActionTypes.EMPLOYEE_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      }
    }
    case ActionTypes.EMPLOYEE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      }
    }
    case ActionTypes.EMPLOYEE_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      }
    }
    case ActionTypes.EMPLOYEE_UPDATE: {
      let filtered = {};
      let allFiltered = {};
      state.allEmployees.map(e => allFiltered[e.id] = e);
      state.employees.map(e => filtered[e.id] = e);
      if (Array.isArray(action.payload)) {
        action.payload.map(e => {
          filtered[e.id] = e;
          allFiltered[e.id] = e;
        });
      } else {
        const employee = action.payload as EmployeesResponseType;
        if (employee) {
          filtered[employee.id] = action.payload;
          allFiltered[employee.id] = action.payload;
        }
      }
      return {
        ...state,
        employees: Object.values(filtered),
        allEmployees: Object.values(allFiltered)
      }
    }
    case ActionTypes.EMPLOYEE_CLEAR: {
      return {
        ...state,
        employees: []
      }
    }
    case ActionTypes.EMPLOYEE_ALL_UPDATE: {
      return {
        ...state,
        allEmployees: Array.isArray(action.payload) ? [...action.payload] : [...[action.payload]],
      }
    }
    case ActionTypes.WORK_GROUP_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      }
    }
    case ActionTypes.WORK_GROUP_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      }
    }
    case ActionTypes.WORK_GROUP_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      }
    }
    case ActionTypes.WORK_GROUP_CLEAR: {
      return {
        ...state,
        workGroups: []
      }
    }
    case ActionTypes.WORK_GROUP_UPDATE: {
      let filtered = {};
      state.workGroups.map(e => filtered[e.id] = e);
      if (Array.isArray(action.payload)) {
        action.payload.map(e => {
          filtered[e.id] = e;
        });
      } else {
        const group = action.payload as WorkGroupsResponseType;
        if (group) filtered[group.id] = action.payload;
      }
      let unit;
      if (state.units[0]) {
        unit = state.units[0];
        unit.workGroups = Object.values(filtered);
      }
      return {
        ...state,
        workGroups: Object.values(filtered),
        units: unit ? [unit] : []
      }
    }
    case ActionTypes.WORK_GROUP_UPDATE_SILENT: {
      return {
        ...state,
        unsavedWorkGroups: [...action.payload],
      }
    }
    case ActionTypes.UNIT_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      }
    }
    case ActionTypes.UNIT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      }
    }
    case ActionTypes.UNIT_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      }
    }
    case ActionTypes.UNIT_UPDATE: {
      return {
        ...state,
        units: Array.isArray(action.payload) ? [...action.payload] : [...[action.payload]],
      }
    }
    default:
      return state
  }
}

export const createActions = {
  // Dictionary Industries Actions
  [ActionTypes.INDUSTRIES_REQUEST]: (token: string): AppThunk => async (
    dispatch
  ) => {
    dispatch({ type: ActionTypes.INDUSTRIES_REQUEST })
    const response = await httpService.getDictionaryIndustries(token)
    if (response && !response.StatusCode) {
      dispatch({ type: ActionTypes.INDUSTRIES_SUCCESS })
      dispatch({ type: ActionTypes.INDUSTRIES_UPDATE, payload: response })
    } else {
      dispatch({ type: ActionTypes.INDUSTRIES_FAILURE })
    }
    return response
  },
  [ActionTypes.INDUSTRIES_CREATE]: (
    token: string,
    params: DictionaryIndustriesQueryType
  ): AppThunk => async (dispatch) => {
    dispatch({ type: ActionTypes.INDUSTRIES_REQUEST })
    const response = await httpService.createDictionaryIndustries(token, params)
    if (response) {
      dispatch({ type: ActionTypes.INDUSTRIES_SUCCESS })
      dispatch(createActions[ActionTypes.INDUSTRIES_REQUEST](token))
    } else {
      dispatch({ type: ActionTypes.INDUSTRIES_FAILURE })
    }
    return response
  },
  [ActionTypes.INDUSTRIES_DELETE]: (
    token: string,
    params: DictionaryIndustriesQueryType
  ): AppThunk => async (dispatch) => {
    dispatch({ type: ActionTypes.INDUSTRIES_REQUEST })
    const response = await httpService.deleteDictionaryIndustries(token, params)
    dispatch({ type: ActionTypes.INDUSTRIES_SUCCESS })
    dispatch(createActions[ActionTypes.INDUSTRIES_REQUEST](token))
    return response
  },

  // Roles Actions
  [ActionTypes.ROLES_REQUEST]: (token: string): AppThunk => async (
    dispatch
  ) => {
    dispatch({ type: ActionTypes.ROLES_REQUEST })
    const response = await httpService.getDictionaryRoles(token)
    if (response && !response.StatusCode) {
      dispatch({ type: ActionTypes.ROLES_SUCCESS })
      dispatch({ type: ActionTypes.ROLES_UPDATE, payload: response })
    } else {
      dispatch({ type: ActionTypes.ROLES_FAILURE })
    }
    return response
  },
  [ActionTypes.ROLES_CREATE]: (
    token: string,
    params: DictionaryRolesCreateQueryType
  ): AppThunk => async (dispatch) => {
    dispatch({ type: ActionTypes.ROLES_REQUEST })
    const response = await httpService.createDictionaryRole(token, params)
    if (response) {
      dispatch({ type: ActionTypes.ROLES_SUCCESS })
      dispatch(createActions[ActionTypes.ROLES_REQUEST](token))
    } else {
      dispatch({ type: ActionTypes.ROLES_FAILURE })
    }
    return response
  },
  [ActionTypes.ROLES_DELETE]: (
    token: string,
    params: DictionaryRolesDeleteQueryType
  ): AppThunk => async (dispatch) => {
    dispatch({ type: ActionTypes.ROLES_REQUEST })
    const response = await httpService.deleteDictionaryRole(token, params)
    dispatch({ type: ActionTypes.ROLES_SUCCESS })
    dispatch(createActions[ActionTypes.ROLES_REQUEST](token))
    return response
  },

  // Roles Groups Actions
  [ActionTypes.ROLES_GROUPS_REQUEST]: (token: string): AppThunk => async (
    dispatch
  ) => {
    dispatch({ type: ActionTypes.ROLES_GROUPS_REQUEST })
    const response = await httpService.getDictionaryRolesGroups(token)
    if (response && !response.StatusCode) {
      dispatch({ type: ActionTypes.ROLES_GROUPS_SUCCESS })
      dispatch({ type: ActionTypes.ROLES_GROUPS_UPDATE, payload: response })
    } else {
      dispatch({ type: ActionTypes.ROLES_GROUPS_FAILURE })
    }
    return response
  },
  [ActionTypes.ROLES_GROUPS_CREATE]: (
    token: string,
    params: DictionaryOrganizationRolesGroupCreateQueryType
  ): AppThunk => async (dispatch) => {
    dispatch({ type: ActionTypes.ROLES_GROUPS_REQUEST })
    const response = await httpService.createDictionaryRolesGroup(token, params)
    if (response) {
      dispatch({ type: ActionTypes.ROLES_GROUPS_SUCCESS })
      dispatch(createActions[ActionTypes.ROLES_GROUPS_REQUEST](token))
    } else {
      dispatch({ type: ActionTypes.ROLES_GROUPS_FAILURE })
    }
    return response
  },
  [ActionTypes.ROLES_GROUPS_DELETE]: (
    token: string,
    params: DictionaryOrganizationRolesGroupDeleteQueryType
  ): AppThunk => async (dispatch) => {
    dispatch({ type: ActionTypes.ROLES_GROUPS_REQUEST })
    const response = await httpService.deleteDictionaryRolesGroup(token, params)
    dispatch({ type: ActionTypes.ROLES_GROUPS_SUCCESS })
    dispatch(createActions[ActionTypes.ROLES_GROUPS_REQUEST](token))
    return response
  },

  // UnitTypes Requests
  [ActionTypes.UNIT_TYPES_REQUEST]: (token: string): AppThunk => async (
    dispatch
  ) => {
    dispatch({ type: ActionTypes.UNIT_TYPES_REQUEST })
    const response = await httpService.getDictionaryUnitTypesGroups(token)
    if (response && !response.StatusCode) {
      dispatch({ type: ActionTypes.UNIT_TYPES_SUCCESS })
      dispatch({ type: ActionTypes.UNIT_TYPES_UPDATE, payload: response })
      // dispatch({ type: ActionTypes.UNIT_INITIAL, payload: {
      //     name: '',
      //     unitType: response[0]
      //   }})
    } else {
      dispatch({ type: ActionTypes.UNIT_TYPES_FAILURE })
    }
    return response
  },
  [ActionTypes.UNIT_INITIAL]: (): AppThunk => async (
    dispatch,
    getState
  ) => {
      dispatch({ type: ActionTypes.UNIT_INITIAL, payload: {
          name: '',
          unitType: getState().createState.unitTypes[0]
        }})
  },
  [ActionTypes.UNIT_TYPES_CREATE]: (
    token: string,
    params: DictionaryCreateUnitTypeQueryType
  ): AppThunk => async (dispatch) => {
    dispatch({ type: ActionTypes.UNIT_TYPES_REQUEST })
    const response = await httpService.createDictionaryUnitTypeGroups(
      token,
      params
    )
    if (response) {
      dispatch({ type: ActionTypes.UNIT_TYPES_SUCCESS })
      dispatch(createActions[ActionTypes.UNIT_TYPES_REQUEST](token))
    } else {
      dispatch({ type: ActionTypes.UNIT_TYPES_FAILURE })
    }
    return response
  },
  [ActionTypes.UNIT_TYPES_DELETE]: (
    token: string,
    params: DictionaryDeleteUnitTypeQueryType
  ): AppThunk => async (dispatch) => {
    dispatch({ type: ActionTypes.UNIT_TYPES_REQUEST })
    const response = await httpService.deleteDictionaryUnitTypeGroups(
      token,
      params
    )
    dispatch({ type: ActionTypes.UNIT_TYPES_SUCCESS })
    dispatch(createActions[ActionTypes.UNIT_TYPES_REQUEST](token))
    return response
  },

  // Units Requests
  [ActionTypes.UNIT_REQUEST]: (token: string, id?: number): AppThunk => async (
    dispatch
  ) => {
    dispatch({ type: ActionTypes.UNIT_REQUEST })
    const response = await httpService.getUnits(token, id)
    if (response && !response.StatusCode) {
      dispatch({ type: ActionTypes.UNIT_SUCCESS })
      dispatch({ type: ActionTypes.UNIT_UPDATE, payload: response })
      if (response.workGroups) dispatch({ type: ActionTypes.WORK_GROUP_UPDATE, payload: response.workGroups })
      if (response.employees) dispatch({ type: ActionTypes.EMPLOYEE_UPDATE, payload: response.employees })
    } else {
      dispatch({ type: ActionTypes.UNIT_FAILURE })
    }
    return response
  },
  [ActionTypes.UNIT_CREATE]: (
    token: string,
    params: CreateUnitQueryType
  ): AppThunk => async (dispatch) => {
    dispatch({ type: ActionTypes.UNIT_REQUEST })
    const response = await httpService.createUnit(
      token,
      params
    )
    if (response) {
      dispatch({ type: ActionTypes.UNIT_SUCCESS })
      dispatch({ type: ActionTypes.UNIT_UPDATE, payload: response })
    } else {
      dispatch({ type: ActionTypes.UNIT_FAILURE })
    }
    return response
  },
  [ActionTypes.UNIT_UPDATE]: (
    token: string,
    params: CreateUnitQueryType
  ): AppThunk => async (dispatch) => {
    dispatch({ type: ActionTypes.UNIT_REQUEST })
    const response = await httpService.updateUnit(
      token,
      params
    )
    if (response) {
      dispatch({ type: ActionTypes.UNIT_SUCCESS })
      dispatch({ type: ActionTypes.UNIT_UPDATE, payload: response })
    } else {
      dispatch({ type: ActionTypes.UNIT_FAILURE })
    }
    return response
  },
  [ActionTypes.UNIT_DELETE]: (
    token: string,
    params: DeleteUnitQueryType
  ): AppThunk => async (dispatch) => {
    dispatch({ type: ActionTypes.UNIT_REQUEST })
    const response = await httpService.deleteUnit(
      token,
      params
    )
    dispatch({ type: ActionTypes.UNIT_SUCCESS })
    await dispatch(createActions[ActionTypes.UNIT_REQUEST](token))
    return response
  },

  // Organizations
  [ActionTypes.ORGANIZATIONS_REQUEST]: (token: string, id?: number): AppThunk => async (
    dispatch
  ) => {
    dispatch({ type: ActionTypes.ORGANIZATIONS_REQUEST })
    const response = await httpService.getOrganizations(token, id)
    if (response && !response.StatusCode) {
      dispatch({ type: ActionTypes.ORGANIZATIONS_SUCCESS })
      dispatch({ type: ActionTypes.ORGANIZATIONS_UPDATE, payload: response })
    } else {
      dispatch({ type: ActionTypes.ORGANIZATIONS_FAILURE })
    }
    return response
  },
  [ActionTypes.ORGANIZATIONS_CREATE]: (
    token: string,
    params: CreateOrganizationsQueryType
  ): AppThunk => async (dispatch) => {
    dispatch({ type: ActionTypes.ORGANIZATIONS_REQUEST })
    const response = await httpService.createOrganization(
      token,
      params
    )
    if (response) {
      dispatch({ type: ActionTypes.ORGANIZATIONS_SUCCESS })
      dispatch({ type: ActionTypes.ORGANIZATIONS_UPDATE, payload: response })
    } else {
      dispatch({ type: ActionTypes.ORGANIZATIONS_FAILURE })
    }
    return response
  },
  [ActionTypes.ORGANIZATIONS_UPDATE]: (
    token: string,
    params: CreateOrganizationsQueryType
  ): AppThunk => async (dispatch) => {
    dispatch({ type: ActionTypes.ORGANIZATIONS_REQUEST })
    const response = await httpService.updateOrganization(
      token,
      params
    )
    if (response) {
      dispatch({ type: ActionTypes.ORGANIZATIONS_SUCCESS })
      dispatch({ type: ActionTypes.ORGANIZATIONS_UPDATE, payload: response })
    } else {
      dispatch({ type: ActionTypes.ORGANIZATIONS_FAILURE })
    }
    return response
  },

  // Employees Actions
  [ActionTypes.EMPLOYEE_ALL_REQUEST]: (token: string): AppThunk => async (
    dispatch
  ) => {
    dispatch({ type: ActionTypes.EMPLOYEE_ALL_REQUEST })
    const response = await httpService.getEmployees(token)
    if (response && !response.StatusCode) {
      dispatch({ type: ActionTypes.EMPLOYEE_SUCCESS })
      dispatch({ type: ActionTypes.EMPLOYEE_ALL_UPDATE, payload: response })
    } else {
      dispatch({ type: ActionTypes.EMPLOYEE_FAILURE })
    }
    return response
  },
  [ActionTypes.EMPLOYEE_REQUEST]: (token: string): AppThunk => async (
    dispatch
  ) => {
    dispatch({ type: ActionTypes.EMPLOYEE_REQUEST })
    const response = await httpService.getEmployees(token)
    if (response && !response.StatusCode) {
      dispatch({ type: ActionTypes.EMPLOYEE_SUCCESS })
      dispatch({ type: ActionTypes.EMPLOYEE_UPDATE, payload: response })
    } else {
      dispatch({ type: ActionTypes.EMPLOYEE_FAILURE })
    }
    return response
  },
  [ActionTypes.EMPLOYEE_CREATE]: (
    token: string,
    params: CreateEmployeeQueryType
  ): AppThunk => async (dispatch) => {
    dispatch({ type: ActionTypes.EMPLOYEE_REQUEST })
    const response = await httpService.createEmployee(token, params)
    if (response) {
      dispatch({ type: ActionTypes.EMPLOYEE_SUCCESS })
      dispatch({ type: ActionTypes.EMPLOYEE_UPDATE, payload: response })
    } else {
      dispatch({ type: ActionTypes.EMPLOYEE_FAILURE })
    }
    return response
  },
  [ActionTypes.EMPLOYEE_UPDATE]: (
    token: string,
    params: CreateEmployeeQueryType
  ): AppThunk => async (dispatch) => {
    dispatch({ type: ActionTypes.EMPLOYEE_REQUEST })
    const response = await httpService.updateEmployee(token, params)
    if (response) {
      dispatch({ type: ActionTypes.EMPLOYEE_SUCCESS })
      dispatch({ type: ActionTypes.EMPLOYEE_UPDATE, payload: response })
    } else {
      dispatch({ type: ActionTypes.EMPLOYEE_FAILURE })
    }
    return response
  },
  [ActionTypes.EMPLOYEE_DELETE]: (
    token: string,
    params: EmployeeDeleteQueryType
  ): AppThunk => async (dispatch) => {
    dispatch({ type: ActionTypes.EMPLOYEE_REQUEST })
    const response = await httpService.deleteEmployee(token, params)
    dispatch({ type: ActionTypes.EMPLOYEE_SUCCESS })
    await dispatch(createActions[ActionTypes.EMPLOYEE_REQUEST](token))
    return response
  },

  // Work groups Actions
  [ActionTypes.WORK_GROUP_REQUEST]: (token: string, workGroupId: number): AppThunk => async (
    dispatch
  ) => {
    dispatch({ type: ActionTypes.WORK_GROUP_REQUEST })
    const response = await httpService.getWorkGroup(token, workGroupId)
    if (response && !response.StatusCode) {
      dispatch({ type: ActionTypes.WORK_GROUP_SUCCESS })
      dispatch({ type: ActionTypes.WORK_GROUP_UPDATE, payload: response })
    } else {
      dispatch({ type: ActionTypes.WORK_GROUP_FAILURE })
    }
    return response
  },
  [ActionTypes.WORK_GROUP_CREATE]: (
    token: string,
    params: CreateWorkGroupQueryType
  ): AppThunk => async (dispatch) => {
    dispatch({ type: ActionTypes.WORK_GROUP_REQUEST })
    const response = await httpService.createWorkGroup(token, params)
    if (response) {
      dispatch({ type: ActionTypes.WORK_GROUP_SUCCESS })
      dispatch({ type: ActionTypes.WORK_GROUP_UPDATE, payload: response })
    } else {
      dispatch({ type: ActionTypes.WORK_GROUP_FAILURE })
    }
    return response
  },
  [ActionTypes.WORK_GROUP_UPDATE]: (
    token: string,
    params: CreateWorkGroupQueryType,
  ): AppThunk => async (dispatch) => {
    dispatch({ type: ActionTypes.WORK_GROUP_REQUEST })
    const response = await httpService.updateWorkGroup(token, params)
    if (response) {
      dispatch({ type: ActionTypes.WORK_GROUP_SUCCESS })
      dispatch({ type: ActionTypes.WORK_GROUP_UPDATE, payload: response })
    } else {
      dispatch({ type: ActionTypes.WORK_GROUP_FAILURE })
    }
    return response
  },
  [ActionTypes.WORK_GROUP_UPDATE]: (
    token: string,
    params: CreateWorkGroupQueryType
  ): AppThunk => async (dispatch) => {
    dispatch({ type: ActionTypes.WORK_GROUP_REQUEST })
    const response = await httpService.updateWorkGroup(token, params)
    if (response) {
      dispatch({ type: ActionTypes.WORK_GROUP_SUCCESS })
      dispatch({ type: ActionTypes.WORK_GROUP_UPDATE, payload: response })
    } else {
      dispatch({ type: ActionTypes.WORK_GROUP_FAILURE })
    }
    return response
  },
  [ActionTypes.WORK_GROUP_DELETE]: (
    token: string,
    params: WorkGroupDeleteQueryType
  ): AppThunk => async (dispatch) => {
    dispatch({ type: ActionTypes.WORK_GROUP_REQUEST })
    const response = await httpService.deleteWorkGroup(token, params)
    dispatch({ type: ActionTypes.WORK_GROUP_SUCCESS })
    // dispatch(createActions[ActionTypes.WORK_GROUP_REQUEST](token))
    return response
  },
}
