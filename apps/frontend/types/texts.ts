import { Maybe, Scalars } from "src/generated";

export type CreatePageSelectTextType = {
  __typename?: 'CreatePageSelectTextType';
  /** select label */
  label?: Maybe<Scalars['String']>;
  /** select placeholder */
  placeholder?: Maybe<Scalars['String']>;
  /** select default value */
  default_value: Maybe<Scalars['String']>;
  /** select option groups array, if any */
  option_groups?: Maybe<Array<Maybe<CreatePageSelectOptionGroupTextType>>>;
  /** select options array, if any */
  options?: Maybe<Array<Maybe<CreatePageSelectOptionTextType>>>;
  /** error message, if input is required and empty */
  error?: Maybe<Scalars['String']>;
  /** error message, if input value length is not valid */
  error_length?: Maybe<Scalars['String']>;
  /** error message, if entry with such a value already exists */
  error_exists?: Maybe<Scalars['String']>;
};

export type CreatePageSelectOptionGroupTextType = {
  __typename?: 'CreatePageSelectOptionGroupTextType';
  label?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<CreatePageSelectOptionTextType>>>;
};

export type CreatePageSelectOptionTextType = {
  __typename?: 'CreatePageSelectOptionTextType';
  text?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type CreatePageInputTextType = {
  __typename?: 'CreatePagesInputTextType';
  /** input label */
  label?: Maybe<Scalars['String']>;
  /** input default value */
  default_value?: Maybe<Scalars['String']>;
  /** input placeholder */
  placeholder?: Maybe<Scalars['String']>;
  /** input small description, when its value is set */
  suffix?: Maybe<Scalars['String']>;
  /** error message, if input is required and empty */
  error?: Maybe<Scalars['String']>;
  /** error message, if input value length is not valid */
  error_length?: Maybe<Scalars['String']>;
  /** error message, if entry with such a value already exists */
  error_exists?: Maybe<Scalars['String']>;
};

export type CreateOrgDetailsInputsTextType = {
  __typename?: 'CreateOrgDetailsInputsTextType';
  input_OrganizationName?: Maybe<CreatePageInputTextType>;
  input_IndustryId?: Maybe<CreatePageSelectTextType>;
  input_EmployeeCreatorRoleId?: Maybe<CreatePageSelectTextType>;
  text_add_more?: Maybe<Scalars['String']>;
};

export type CreateOrgDetailsPageTextType = {
  __typename?: 'CreateOrgDetailsPageTextType';
  form?: Maybe<CreateOrgDetailsInputsTextType>;
  text_under_logo?: Maybe<Scalars['String']>;
  link_under_logo?: {
    text: Maybe<Scalars['String']>;
    url: Maybe<Scalars['String']>;
  };
  text_help?: Maybe<Scalars['String']>;
  button_save_later: Maybe<Scalars['String']>;
  button_back: Maybe<Scalars['String']>;
  button_next: Maybe<Scalars['String']>;
};

export type CreateBuildSuccessPageTextType = {
  __typename?: 'CreateBuildSuccessPageTextType';
  text_under_logo?: Maybe<Scalars['String']>;
  link_under_logo?: {
    text: Maybe<Scalars['String']>;
    url: Maybe<Scalars['String']>;
  };
  text_help?: Maybe<Scalars['String']>;
  diagram: {
    button_edit: Maybe<Scalars['String']>;
    button_add_directors: Maybe<Scalars['String']>;
    button_add_management: Maybe<Scalars['String']>;
    button_add_unit: Maybe<Scalars['String']>;
  };
  button_back: Maybe<Scalars['String']>;
  button_next: Maybe<Scalars['String']>;
};

export type CreateOrgDetailsPageExitModalTextType = {
  __typename?: 'CreateOrgDetailsPageExitModalTextType';
  /** Modal title */
  modal_title?: Maybe<Scalars['String']>;
  /** Modal subtitle */
  title_text?: Maybe<Scalars['String']>;
  /** Text after subtitle */
  text?: Maybe<Scalars['String']>;
  /** Confirm button text */
  button_confirm?: Maybe<Scalars['String']>;
  /** Cancel button text */
  button_cancel?: Maybe<Scalars['String']>;
};

export type CreateSuccessUnitsPageAddHeadModalTextType = {
  __typename?: 'CreateSuccessUnitsPageAddHeadModalTextType';
  modal_title?: Maybe<Scalars['String']>;
  button_save?: Maybe<Scalars['String']>;
  button_add_new_head?: Maybe<Scalars['String']>;
  text_more: Maybe<Scalars['String']>;
  input_name?: Maybe<CreatePageInputTextType>;
  input_title: Maybe<CreatePageInputTextType>;
  input_email: Maybe<CreatePageInputTextType>;
  input_employerId: Maybe<CreatePageSelectTextType>;
};

export type CreateSuccessUnitsPageAddGroupModalTextType = {
  __typename?: 'CreateSuccessUnitsPageAddGroupModalTextType';
  modal_title?: Maybe<Scalars['String']>;
  text_more?: Maybe<Scalars['String']>;
  button_save?: Maybe<Scalars['String']>;
  button_add_people?: Maybe<Scalars['String']>;
  button_add_new_employee?: Maybe<Scalars['String']>;
  input_name?: Maybe<CreatePageInputTextType>;
  input_department: Maybe<CreatePageInputTextType>;
};

export type CreateSuccessUnitsPageAddPeopleModalTextType = {
  __typename?: 'CreateSuccessUnitsPageAddPeopleModalTextType';
  modal_title?: Maybe<Scalars['String']>;
  text_more?: Maybe<Scalars['String']>;
  button_save?: Maybe<Scalars['String']>;
  button_add_group?: Maybe<Scalars['String']>;
  button_add_new_employee?: Maybe<Scalars['String']>;
  input_name?: Maybe<CreatePageInputTextType>;
  input_title: Maybe<CreatePageInputTextType>;
  input_email: Maybe<CreatePageInputTextType>;
  input_employerId: Maybe<CreatePageSelectTextType>;
};

export type CreateSuccessUnitsPageModalsTextType = {
  __typename?: 'CreateSuccessUnitsPageModalsTextType';
  add_head_modal?: Maybe<CreateSuccessUnitsPageAddHeadModalTextType>;
  add_people_modal?: Maybe<CreateSuccessUnitsPageAddPeopleModalTextType>;
  add_group_modal?: Maybe<CreateSuccessUnitsPageAddGroupModalTextType>;
};

export type CreateSuccessUnitsPageUnitDetailsTextType = {
  __typename?: 'CreateSuccessUnitsPageUnitDetailsTextType';
  label?: Maybe<Scalars['String']>;
  input_name?: Maybe<CreatePageInputTextType>;
  input_type?: Maybe<CreatePageSelectTextType>;
};

export type CreateSuccessUnitsPageHeadOfUnitTextType = {
  __typename?: 'CreateSuccessUnitsPageHeadOfUnitTextType';
  label?: Maybe<Scalars['String']>;
  button_add?: Maybe<Scalars['String']>;
};

export type CreateSuccessUnitsPageWorkGroupsTextType = {
  __typename?: 'CreateSuccessUnitsPageWorkGroupsTextType';
  label?: Maybe<Scalars['String']>;
  button_add?: Maybe<Scalars['String']>;
};

export type CreateSuccessUnitsPageManagerTextType = {
  __typename?: 'CreateSuccessUnitsPageManagerTextType';
  label?: Maybe<Scalars['String']>;
  button_add?: Maybe<Scalars['String']>;
};

export type CreateSuccessUnitsPageTextType = {
  __typename?: 'CreateSuccessUnitsPageTextType';
  modals?: Maybe<CreateSuccessUnitsPageModalsTextType>;
  text_learn_more?: Maybe<Scalars['String']>;
  text_optional?: Maybe<Scalars['String']>;
  button_cancel?: Maybe<Scalars['String']>;
  button_save?: Maybe<Scalars['String']>;
  button_edit?: Maybe<Scalars['String']>;
  /** Error when employee not created and no error message returned */
  error_employee_add_default?: Maybe<Scalars['String']>;
  unit_details?: Maybe<CreateSuccessUnitsPageUnitDetailsTextType>;
  head_of_unit?: Maybe<CreateSuccessUnitsPageHeadOfUnitTextType>;
  work_groups?: Maybe<CreateSuccessUnitsPageWorkGroupsTextType>;
  manager?: Maybe<CreateSuccessUnitsPageManagerTextType>;
};