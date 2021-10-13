import {
  DictionaryCreateUnitTypeQueryType,
  DictionaryDeleteUnitTypeQueryType,
  DictionaryIndustriesQueryType,
  DictionaryIndustriesResponseType,
  DictionaryOrganizationRolesGroupCreateQueryType,
  DictionaryOrganizationRolesGroupDeleteQueryType,
  DictionaryRolesCreateQueryType,
  DictionaryRolesDeleteQueryType,
  DictionaryOrganizationRolesGroupsResponseType,
  DictionaryRolesResponseType,
  DictionaryUnitTypesResponseType,
  CreateOrganizationsQueryType,
  OrganizationsResponseType,
  EmployeesResponseType,
  CreateEmployeeQueryType,
  EmployeeDeleteQueryType,
  CreateWorkGroupQueryType,
  WorkGroupDeleteQueryType,
  WorkGroupsResponseType,
  DeleteUnitQueryType,
  UnitsResponseType,
  CreateUnitQueryType
} from './types'
import axios, { Method } from 'axios'

export const BASE_URL = 'https://goalenvision-api.dev.ukad-demo.com'

export const urls = {
  dictionaryIndustries: `${BASE_URL}/dictionary/industries/`,
  dictionaryIndustry: `${BASE_URL}/dictionary/industry/`,
  dictionaryRoles: `${BASE_URL}/dictionary/roles/`,
  dictionaryRole: `${BASE_URL}/dictionary/role/`,
  dictionaryRolesGroups: `${BASE_URL}/dictionary/organizationRolesGroups/`,
  dictionaryRolesGroup: `${BASE_URL}/dictionary/organizationRolesGroup/`,
  dictionaryUnitTypes: `${BASE_URL}/dictionary/unitTypes/`,
  dictionaryUnitType: `${BASE_URL}/dictionary/unitType/`,
  organizations: `${BASE_URL}/organizations/`,
  getOrganization: `${BASE_URL}/organizations/organization/`,
  organization: `${BASE_URL}/organizations/`,
  employees: `${BASE_URL}/employee/`,
  employee: `${BASE_URL}/employee/`,
  workGroups: `${BASE_URL}/workGroup/`,
  workGroup: `${BASE_URL}/workGroup/`,
  getWorkGroup: `${BASE_URL}/workGroup?workGroupId=`,
  units: `${BASE_URL}/unit/all`,
  unit: `${BASE_URL}/unit/`,
}

const querystring = require('querystring');

class HttpService {
  private fetchData = async <T>(
    url: string,
    token: string,
    method: Method = 'get',
    params: object = null,
    body: object = null
  ) => {
    try {
      const { data } = await axios.request<T>({
        url: url,
        method: method,
        data: body,
        /*
        auth: {
          username: 'demo',
          password: 'demo'
        },
        */
        headers: {
          Authorization: `Bearer ${token}`,
          'Access-Control-Allow-Origin': '*',
        },
        params: params,
        paramsSerializer: function (params) {
          return querystring.stringify(params)
        },
      })
      return data
    } catch (error) {
      console.error(error?.response?.data);
      return error?.response?.data
    }
  }
  getDictionaryIndustries = (token: string) => {
    return this.fetchData<DictionaryIndustriesResponseType[]>(
      urls.dictionaryIndustries,
      token
    )
  }
  createDictionaryIndustries = (
    token: string,
    params: DictionaryIndustriesQueryType
  ) => {
    return this.fetchData(urls.dictionaryIndustry, token, 'post', params)
  }
  deleteDictionaryIndustries = (
    token: string,
    params: DictionaryIndustriesQueryType
  ) => {
    return this.fetchData(urls.dictionaryIndustry, token, 'delete', params)
  }
  getDictionaryRoles = (token: string) => {
    return this.fetchData<DictionaryRolesResponseType[]>(
      urls.dictionaryRoles,
      token
    )
  }
  createDictionaryRole = (
    token: string,
    params: DictionaryRolesCreateQueryType
  ) => {
    return this.fetchData(urls.dictionaryRole, token, 'post', params)
  }
  deleteDictionaryRole = (
    token: string,
    params: DictionaryRolesDeleteQueryType
  ) => {
    return this.fetchData(urls.dictionaryRole, token, 'delete', params)
  }
  getDictionaryRolesGroups = (token: string) => {
    return this.fetchData<DictionaryOrganizationRolesGroupsResponseType[]>(
      urls.dictionaryRolesGroups,
      token
    )
  }
  createDictionaryRolesGroup = (
    token: string,
    params: DictionaryOrganizationRolesGroupCreateQueryType
  ) => {
    return this.fetchData(urls.dictionaryRolesGroup, token, 'post', params)
  }
  deleteDictionaryRolesGroup = (
    token: string,
    params: DictionaryOrganizationRolesGroupDeleteQueryType
  ) => {
    return this.fetchData(urls.dictionaryRolesGroup, token, 'delete', params)
  }
  getDictionaryUnitTypesGroups = (token: string) => {
    return this.fetchData<DictionaryUnitTypesResponseType[]>(
      urls.dictionaryUnitTypes,
      token
    )
  }
  createDictionaryUnitTypeGroups = (
    token: string,
    params: DictionaryCreateUnitTypeQueryType
  ) => {
    return this.fetchData(urls.dictionaryUnitType, token, 'post', params)
  }
  deleteDictionaryUnitTypeGroups = (
    token: string,
    params: DictionaryDeleteUnitTypeQueryType
  ) => {
    return this.fetchData(urls.dictionaryUnitType, token, 'delete', params)
  }
  getOrganizations = (token: string, organizationId?: number) => {
    if (!organizationId) {
      return this.fetchData<OrganizationsResponseType[]>(
        urls.organizations,
        token
      )
    } else {
      return this.fetchData<OrganizationsResponseType>(
        `${urls.getOrganization}${organizationId}`,
        token
      )
    }
  }
  createOrganization = (
    token: string,
    params: CreateOrganizationsQueryType
  ) => {
    return this.fetchData(urls.organization, token, 'post', params)
  }
  updateOrganization = (
    token: string,
    params: CreateOrganizationsQueryType
  ) => {
    return this.fetchData(urls.organization, token, 'put', params)
  }
  getEmployees = (token: string) => {
    return this.fetchData<EmployeesResponseType[]>(
      urls.employees,
      token
    )
  }
  createEmployee = (
    token: string,
    params: CreateEmployeeQueryType
  ) => {
    return this.fetchData(urls.employee, token, 'post', params)
  }
  updateEmployee = (
    token: string,
    params: CreateEmployeeQueryType
  ) => {
    return this.fetchData(urls.employee, token, 'put', params)
  }
  deleteEmployee = (
    token: string,
    params: EmployeeDeleteQueryType
  ) => {
    return this.fetchData(urls.employee, token, 'delete', params)
  }
  getWorkGroup = (token: string, workGroupId: number) => {
    return this.fetchData<WorkGroupsResponseType>(
      `${urls.getWorkGroup}${workGroupId}`,
      token
    )
  }
  createWorkGroup = (
    token: string,
    params: CreateWorkGroupQueryType
  ) => {
    return this.fetchData(urls.workGroup, token, 'post', params)
  }
  updateWorkGroup = (
    token: string,
    params: CreateWorkGroupQueryType
  ) => {
    return this.fetchData(urls.workGroup, token, 'put', params)
  }
  deleteWorkGroup = (
    token: string,
    params: WorkGroupDeleteQueryType
  ) => {
    return this.fetchData(urls.workGroup, token, 'delete', params)
  }
  getUnits = (token: string, unitId?: number) => {
    if (!unitId) {
      return this.fetchData<UnitsResponseType[]>(
        urls.units,
        token
      )
    } else {
      return this.fetchData<UnitsResponseType>(
        `${urls.unit}?unitId=${unitId}`,
        token
      )
    }
  }
  createUnit = (
    token: string,
    params: CreateUnitQueryType
  ) => {
    return this.fetchData(urls.unit, token, 'post', params)
  }
  updateUnit = (
    token: string,
    params: CreateUnitQueryType
  ) => {
    return this.fetchData(urls.unit, token, 'put', params)
  }
  deleteUnit = (
    token: string,
    params: DeleteUnitQueryType
  ) => {
    return this.fetchData(urls.unit, token, 'delete', params)
  }
}

export const httpService = new HttpService()
