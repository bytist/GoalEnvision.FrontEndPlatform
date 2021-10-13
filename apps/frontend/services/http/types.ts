export interface DictionaryIndustriesResponseType {
  id?: number
  name?: string
}

export interface DictionaryRolesResponseType {
  id?: number
  name?: string
}

export interface DictionaryOrganizationRolesGroupsResponseType {
  id?: number
  name?: string
  organizationRoles?: Array<DictionaryRolesResponseType>
}

export interface DictionaryUnitTypesResponseType {
  id?: number
  name?: string
}

export interface OrganizationsResponseType {
  id?: number
  name?: string
  industry?: string
}

export interface EmployeesResponseType {
  id?: 0,
  familyName?: string
  givenName?: string
  email?: string
  formalTitle?: string
  formalEmail?: string
  pictureUrl?: string
  organizationRole?: string
  organization?: string
}

export interface WorkGroupsResponseType {
  id?: number
  name?: string
  employees?: Array<EmployeesResponseType>
}

export interface UnitsResponseType {
  id?: number
  name?: string
  unitType?: DictionaryUnitTypesResponseType
  headEmployeeId?: number
  headEmployeeGivenName?: string
  headEmployeeFamilyName?: string
  employees?: Array<EmployeesResponseType>
  keyEmployees?: Array<EmployeesResponseType>
  workGroups?: Array<WorkGroupsResponseType>
}

// Query params payloads

export interface DictionaryIndustriesQueryType {
  industry: string
}
export interface DictionaryRolesCreateQueryType {
  Name: string
  GroupId: number
}
export interface DictionaryRolesDeleteQueryType {
  role: string
}
export interface DictionaryOrganizationRolesGroupCreateQueryType {
  name: string
}
export interface DictionaryOrganizationRolesGroupDeleteQueryType {
  groupId: number
}
export interface DictionaryCreateUnitTypeQueryType {
  type: string
}
export interface DictionaryDeleteUnitTypeQueryType {
  id: number
}

export interface EmployeeDeleteQueryType {
  employeeId: number
}

export interface WorkGroupDeleteQueryType {
  workGroupId: number
}

export interface DeleteUnitQueryType {
  unitId: number
}

export interface SetInitialUnitType {
  name: string,
  unitType: DictionaryUnitTypesResponseType
}

export interface CreateOrganizationsQueryType {
  Id?: number
  OrganizationName: string
  IndustryId: number
  EmployeeCreatorId: number
  EmployeeCreatorRoleId: number
}

export interface CreateEmployeeQueryType {
  Id?: number
  FamilyName: string
  GivenName: string
  FormalTitle: string
  FormalEmail: string
  EmployerId: number
  WorkGroups?: Array<number>
}

export interface CreateWorkGroupQueryType {
  Id?: number
  Name: string
  UnitId?: number
  Employees: Array<number>
}

export interface CreateUnitQueryType {
  Id?: number
  Name: string
  UnitTypeId: number
  OrganizationId: number
  EmployeeHeadId?: number
  Employees?: Array<number>
  KeyEmployees?: Array<number>
  WorkGroups?: Array<number>
}
