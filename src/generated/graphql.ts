import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** DateTime */
  DateTime: any;
  /** Raw JSON value */
  Json: any;
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
};


export type Employee_Editing = _Document & _Linkable & {
  __typename?: 'Employee_editing';
  add_employee?: Maybe<Scalars['Json']>;
  save_employee?: Maybe<Scalars['Json']>;
  _meta: Meta;
  _linkType?: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type Employee_EditingConnectionConnection = {
  __typename?: 'Employee_editingConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<Employee_EditingConnectionEdge>>>;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type Employee_EditingConnectionEdge = {
  __typename?: 'Employee_editingConnectionEdge';
  /** The item at the end of the edge. */
  node: Employee_Editing;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};


export type Meta = {
  __typename?: 'Meta';
  /** The id of the document. */
  id: Scalars['String'];
  /** The uid of the document. */
  uid?: Maybe<Scalars['String']>;
  /** The type of the document. */
  type: Scalars['String'];
  /** The tags of the document. */
  tags: Array<Scalars['String']>;
  /** The language of the document. */
  lang: Scalars['String'];
  /** Alternate languages the document. */
  alternateLanguages: Array<RelatedDocument>;
  /** The first publication date of the document. */
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  /** The last publication date of the document. */
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
};

export type Organization_Details = _Document & _Linkable & {
  __typename?: 'Organization_details';
  parent_page?: Maybe<_Linkable>;
  goal_status_label?: Maybe<Scalars['Json']>;
  people_label?: Maybe<Scalars['Json']>;
  add_people_label?: Maybe<Scalars['Json']>;
  people_started_training_label?: Maybe<Scalars['Json']>;
  people_not_started_training_label?: Maybe<Scalars['Json']>;
  success_structure_title?: Maybe<Scalars['Json']>;
  body?: Maybe<Array<Organization_DetailsBody>>;
  _meta: Meta;
  _linkType?: Maybe<Scalars['String']>;
};

export type Organization_DetailsBody = Organization_DetailsBodyCompany_Unit_Context_Menu | Organization_DetailsBodyContact_Block | Organization_DetailsBodyAdnvatanges_Block | Organization_DetailsBodyAdditional_Info;

export type Organization_DetailsBodyAdditional_Info = {
  __typename?: 'Organization_detailsBodyAdditional_info';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<Organization_DetailsBodyAdditional_InfoPrimary>;
};

export type Organization_DetailsBodyAdditional_InfoPrimary = {
  __typename?: 'Organization_detailsBodyAdditional_infoPrimary';
  title?: Maybe<Scalars['Json']>;
  video_link?: Maybe<_Linkable>;
  video_id?: Maybe<Scalars['Json']>;
  video_description?: Maybe<Scalars['Json']>;
  button_content?: Maybe<Scalars['Json']>;
  button_link1?: Maybe<_Linkable>;
};

export type Organization_DetailsBodyAdnvatanges_Block = {
  __typename?: 'Organization_detailsBodyAdnvatanges_block';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<Organization_DetailsBodyAdnvatanges_BlockPrimary>;
  fields?: Maybe<Array<Organization_DetailsBodyAdnvatanges_BlockFields>>;
};

export type Organization_DetailsBodyAdnvatanges_BlockFields = {
  __typename?: 'Organization_detailsBodyAdnvatanges_blockFields';
  advantage_image?: Maybe<Scalars['Json']>;
  advantage_description?: Maybe<Scalars['Json']>;
};

export type Organization_DetailsBodyAdnvatanges_BlockPrimary = {
  __typename?: 'Organization_detailsBodyAdnvatanges_blockPrimary';
  title?: Maybe<Scalars['Json']>;
  certificate_image?: Maybe<Scalars['Json']>;
  certificate_title?: Maybe<Scalars['Json']>;
  certificate_descriptions?: Maybe<Scalars['Json']>;
};

export type Organization_DetailsBodyCompany_Unit_Context_Menu = {
  __typename?: 'Organization_detailsBodyCompany_unit_context_menu';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Organization_DetailsBodyCompany_Unit_Context_MenuFields>>;
};

export type Organization_DetailsBodyCompany_Unit_Context_MenuFields = {
  __typename?: 'Organization_detailsBodyCompany_unit_context_menuFields';
  menu_point_title?: Maybe<Scalars['Json']>;
  link_to_action?: Maybe<_Linkable>;
};

export type Organization_DetailsBodyContact_Block = {
  __typename?: 'Organization_detailsBodyContact_block';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<Organization_DetailsBodyContact_BlockPrimary>;
};

export type Organization_DetailsBodyContact_BlockPrimary = {
  __typename?: 'Organization_detailsBodyContact_blockPrimary';
  title?: Maybe<Scalars['Json']>;
  description?: Maybe<Scalars['Json']>;
  contact_us_button_text?: Maybe<Scalars['String']>;
  contact_us_link?: Maybe<_Linkable>;
  unlock_button_text?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['Json']>;
};

/** A connection to a list of items. */
export type Organization_DetailsConnectionConnection = {
  __typename?: 'Organization_detailsConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<Organization_DetailsConnectionEdge>>>;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type Organization_DetailsConnectionEdge = {
  __typename?: 'Organization_detailsConnectionEdge';
  /** The item at the end of the edge. */
  node: Organization_Details;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type Organizations_Create_Step_1 = _Document & _Linkable & {
  __typename?: 'Organizations_create_step_1';
  organization_title?: Maybe<Scalars['Json']>;
  name_dropdown?: Maybe<Scalars['Json']>;
  moreinfobutton?: Maybe<Scalars['Json']>;
  industry_title?: Maybe<Scalars['Json']>;
  industry_dropdown?: Maybe<Scalars['Json']>;
  role_title?: Maybe<Scalars['Json']>;
  role_dropdown?: Maybe<Scalars['Json']>;
  body?: Maybe<Array<Organizations_Create_Step_1Body>>;
  _meta: Meta;
  _linkType?: Maybe<Scalars['String']>;
};

export type Organizations_Create_Step_1Body =
  Organizations_Create_Step_1BodyOrganization_Detail_Footer
  | Organizations_Create_Step_1BodyOrganization_Header
  | Organizations_Create_Step_1BodyAdditional_Info_Block;

export type Organizations_Create_Step_1BodyAdditional_Info_Block = {
  __typename?: 'Organizations_create_step_1BodyAdditional_info_block';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<Organizations_Create_Step_1BodyAdditional_Info_BlockPrimary>;
};

export type Organizations_Create_Step_1BodyAdditional_Info_BlockPrimary = {
  __typename?: 'Organizations_create_step_1BodyAdditional_info_blockPrimary';
  scheme_picture?: Maybe<Scalars['Json']>;
  help_label?: Maybe<Scalars['Json']>;
  leadership_button?: Maybe<Scalars['Json']>;
  leadership_link?: Maybe<_Linkable>;
};

export type Organizations_Create_Step_1BodyOrganization_Detail_Footer = {
  __typename?: 'Organizations_create_step_1BodyOrganization_detail_footer';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<Organizations_Create_Step_1BodyOrganization_Detail_FooterPrimary>;
};

export type Organizations_Create_Step_1BodyOrganization_Detail_FooterPrimary = {
  __typename?: 'Organizations_create_step_1BodyOrganization_detail_footerPrimary';
  previous_step_button?: Maybe<Scalars['Json']>;
  save_button?: Maybe<Scalars['Json']>;
  next_step_button?: Maybe<Scalars['Json']>;
};

export type Organizations_Create_Step_1BodyOrganization_Header = {
  __typename?: 'Organizations_create_step_1BodyOrganization_header';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<Organizations_Create_Step_1BodyOrganization_HeaderPrimary>;
  fields?: Maybe<Array<Organizations_Create_Step_1BodyOrganization_HeaderFields>>;
};

export type Organizations_Create_Step_1BodyOrganization_HeaderFields = {
  __typename?: 'Organizations_create_step_1BodyOrganization_headerFields';
  step_name?: Maybe<Scalars['Json']>;
};

export type Organizations_Create_Step_1BodyOrganization_HeaderPrimary = {
  __typename?: 'Organizations_create_step_1BodyOrganization_headerPrimary';
  process_name?: Maybe<Scalars['Json']>;
};

/** A connection to a list of items. */
export type Organizations_Create_Step_1ConnectionConnection = {
  __typename?: 'Organizations_create_step_1ConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<Organizations_Create_Step_1ConnectionEdge>>>;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type Organizations_Create_Step_1ConnectionEdge = {
  __typename?: 'Organizations_create_step_1ConnectionEdge';
  /** The item at the end of the edge. */
  node: Organizations_Create_Step_1;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type Organizations_Main_Page = _Document & _Linkable & {
  __typename?: 'Organizations_main_page';
  body?: Maybe<Array<Organizations_Main_PageBody>>;
  repeatable_elements?: Maybe<Array<Organizations_Main_PageRepeatable_Elements>>;
  button?: Maybe<Scalars['Json']>;
  button_link?: Maybe<_Linkable>;
  shout_text?: Maybe<Scalars['Json']>;
  shout_text_link?: Maybe<_Linkable>;
  _meta: Meta;
  _linkType?: Maybe<Scalars['String']>;
};

export type Organizations_Main_PageBody =
  Organizations_Main_PageBodyAdditional_Info
  | Organizations_Main_PageBodyAdnvatanges_Block
  | Organizations_Main_PageBodyContact_Block;

export type Organizations_Main_PageBodyAdditional_Info = {
  __typename?: 'Organizations_main_pageBodyAdditional_info';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<Organizations_Main_PageBodyAdditional_InfoPrimary>;
};

export type Organizations_Main_PageBodyAdditional_InfoPrimary = {
  __typename?: 'Organizations_main_pageBodyAdditional_infoPrimary';
  title?: Maybe<Scalars['Json']>;
  video_link?: Maybe<_Linkable>;
  video_id?: Maybe<Scalars['Json']>;
  video_description?: Maybe<Scalars['Json']>;
  button_content?: Maybe<Scalars['Json']>;
  button_link1?: Maybe<_Linkable>;
};

export type Organizations_Main_PageBodyAdnvatanges_Block = {
  __typename?: 'Organizations_main_pageBodyAdnvatanges_block';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<Organizations_Main_PageBodyAdnvatanges_BlockPrimary>;
  fields?: Maybe<Array<Organizations_Main_PageBodyAdnvatanges_BlockFields>>;
};

export type Organizations_Main_PageBodyAdnvatanges_BlockFields = {
  __typename?: 'Organizations_main_pageBodyAdnvatanges_blockFields';
  advantage_image?: Maybe<Scalars['Json']>;
  advantage_description?: Maybe<Scalars['Json']>;
};

export type Organizations_Main_PageBodyAdnvatanges_BlockPrimary = {
  __typename?: 'Organizations_main_pageBodyAdnvatanges_blockPrimary';
  title?: Maybe<Scalars['Json']>;
  certificate_image?: Maybe<Scalars['Json']>;
  certificate_title?: Maybe<Scalars['Json']>;
  certificate_descriptions?: Maybe<Scalars['Json']>;
};

export type Organizations_Main_PageBodyContact_Block = {
  __typename?: 'Organizations_main_pageBodyContact_block';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<Organizations_Main_PageBodyContact_BlockPrimary>;
};

export type Organizations_Main_PageBodyContact_BlockPrimary = {
  __typename?: 'Organizations_main_pageBodyContact_blockPrimary';
  title?: Maybe<Scalars['Json']>;
  description?: Maybe<Scalars['Json']>;
  contact_us_button_text?: Maybe<Scalars['String']>;
  contact_us_link?: Maybe<_Linkable>;
  unlock_button_text?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['Json']>;
};

/** A connection to a list of items. */
export type Organizations_Main_PageConnectionConnection = {
  __typename?: 'Organizations_main_pageConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<Organizations_Main_PageConnectionEdge>>>;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type Organizations_Main_PageConnectionEdge = {
  __typename?: 'Organizations_main_pageConnectionEdge';
  /** The item at the end of the edge. */
  node: Organizations_Main_Page;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type Organizations_Main_PageRepeatable_Elements = {
  __typename?: 'Organizations_main_pageRepeatable_elements';
  background_image?: Maybe<Scalars['Json']>;
  description?: Maybe<Scalars['Json']>;
};

export type Organizationstructure = _Document & _Linkable & {
  __typename?: 'Organizationstructure';
  parent_page?: Maybe<_Linkable>;
  need_help?: Maybe<Scalars['Json']>;
  training_label?: Maybe<Scalars['Json']>;
  training_link?: Maybe<_Linkable>;
  add_board_label?: Maybe<Scalars['Json']>;
  add_management_team?: Maybe<Scalars['Json']>;
  add_successful_unit?: Maybe<Scalars['Json']>;
  link_to_unit_creating?: Maybe<_Linkable>;
  body?: Maybe<Array<OrganizationstructureBody>>;
  _meta: Meta;
  _linkType?: Maybe<Scalars['String']>;
};

export type OrganizationstructureBody = OrganizationstructureBodyOrganization_Footer;

export type OrganizationstructureBodyOrganization_Footer = {
  __typename?: 'OrganizationstructureBodyOrganization_footer';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<OrganizationstructureBodyOrganization_FooterPrimary>;
};

export type OrganizationstructureBodyOrganization_FooterPrimary = {
  __typename?: 'OrganizationstructureBodyOrganization_footerPrimary';
  previous_step_button?: Maybe<Scalars['Json']>;
  save_button?: Maybe<Scalars['Json']>;
  next_step_button?: Maybe<Scalars['Json']>;
};

/** A connection to a list of items. */
export type OrganizationstructureConnectionConnection = {
  __typename?: 'OrganizationstructureConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<OrganizationstructureConnectionEdge>>>;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type OrganizationstructureConnectionEdge = {
  __typename?: 'OrganizationstructureConnectionEdge';
  /** The item at the end of the edge. */
  node: Organizationstructure;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  _allDocuments: _DocumentConnection;
  allStart_pages: Start_PageConnectionConnection;
  allTests: TestConnectionConnection;
  allOrganization_detailss: Organization_DetailsConnectionConnection;
  allUnit_editings: Unit_EditingConnectionConnection;
  allWork_group_editings: Work_Group_EditingConnectionConnection;
  allSite_settingss: Site_SettingsConnectionConnection;
  allOrganizationstructures: OrganizationstructureConnectionConnection;
  allEmployee_editings: Employee_EditingConnectionConnection;
  allOrganizations_main_pages: Organizations_Main_PageConnectionConnection;
  allOrganizations_create_step_1s: Organizations_Create_Step_1ConnectionConnection;
};


export type Query_AllDocumentsArgs = {
  sortBy?: Maybe<SortDocumentsBy>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  uid?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Scalars['String']>>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  similar?: Maybe<Similar>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryAllStart_PagesArgs = {
  sortBy?: Maybe<SortStart_Pagey>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  uid?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Scalars['String']>>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  similar?: Maybe<Similar>;
  where?: Maybe<WhereStart_Page>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryAllTestsArgs = {
  sortBy?: Maybe<SortTesty>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  uid?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Scalars['String']>>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  similar?: Maybe<Similar>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryAllOrganization_DetailssArgs = {
  sortBy?: Maybe<SortOrganization_Detailsy>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  uid?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Scalars['String']>>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  similar?: Maybe<Similar>;
  where?: Maybe<WhereOrganization_Details>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryAllUnit_EditingsArgs = {
  sortBy?: Maybe<SortUnit_Editingy>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  uid?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Scalars['String']>>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  similar?: Maybe<Similar>;
  where?: Maybe<WhereUnit_Editing>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryAllWork_Group_EditingsArgs = {
  sortBy?: Maybe<SortWork_Group_Editingy>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  uid?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Scalars['String']>>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  similar?: Maybe<Similar>;
  where?: Maybe<WhereWork_Group_Editing>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryAllSite_SettingssArgs = {
  sortBy?: Maybe<SortSite_Settingsy>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  uid?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Scalars['String']>>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  similar?: Maybe<Similar>;
  where?: Maybe<WhereSite_Settings>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryAllOrganizationstructuresArgs = {
  sortBy?: Maybe<SortOrganizationstructurey>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  uid?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Scalars['String']>>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  similar?: Maybe<Similar>;
  where?: Maybe<WhereOrganizationstructure>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryAllEmployee_EditingsArgs = {
  sortBy?: Maybe<SortEmployee_Editingy>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  uid?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Scalars['String']>>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  similar?: Maybe<Similar>;
  where?: Maybe<WhereEmployee_Editing>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryAllOrganizations_Main_PagesArgs = {
  sortBy?: Maybe<SortOrganizations_Main_Pagey>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  uid?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Scalars['String']>>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  similar?: Maybe<Similar>;
  where?: Maybe<WhereOrganizations_Main_Page>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryAllOrganizations_Create_Step_1sArgs = {
  sortBy?: Maybe<SortOrganizations_Create_Step_1y>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  uid?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Scalars['String']>>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  similar?: Maybe<Similar>;
  where?: Maybe<WhereOrganizations_Create_Step_1>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type RelatedDocument = {
  __typename?: 'RelatedDocument';
  /** The id of the document. */
  id: Scalars['String'];
  /** The uid of the document. */
  uid?: Maybe<Scalars['String']>;
  /** The type of the document. */
  type: Scalars['String'];
  /** The language of the document. */
  lang: Scalars['String'];
};

export type Site_Settings = _Document & _Linkable & {
  __typename?: 'Site_settings';
  body?: Maybe<Array<Site_SettingsBody>>;
  main_logo?: Maybe<Scalars['Json']>;
  link_for_title?: Maybe<_Linkable>;
  sign_in_button?: Maybe<Scalars['Json']>;
  body1?: Maybe<Array<Site_SettingsBody1>>;
  auth_modal_title?: Maybe<Scalars['Json']>;
  auth_modal_social_title?: Maybe<Scalars['Json']>;
  auth_modal_linkedin_btn_name?: Maybe<Scalars['Json']>;
  auth_modal_google_btn_name?: Maybe<Scalars['Json']>;
  auth_modal_facebook_btn_name?: Maybe<Scalars['Json']>;
  auth_modal_apple_btn_name?: Maybe<Scalars['Json']>;
  auth_modal_email_title?: Maybe<Scalars['Json']>;
  auth_modal_placeholder?: Maybe<Scalars['Json']>;
  auth_modal_next_action_button_name?: Maybe<Scalars['Json']>;
  auth_modal_success_title?: Maybe<Scalars['Json']>;
  auth_modal_success_btn_name?: Maybe<Scalars['Json']>;
  _meta: Meta;
  _linkType?: Maybe<Scalars['String']>;
};

export type Site_SettingsBody =
  Site_SettingsBodyValues
  | Site_SettingsBodyInformationblock
  | Site_SettingsBodyCopywriting
  | Site_SettingsBodySocial_Network_Link
  | Site_SettingsBodySublinks;

export type Site_SettingsBody1 = Site_SettingsBody1Header_Menu_Button;

export type Site_SettingsBody1Header_Menu_Button = {
  __typename?: 'Site_settingsBody1Header_menu_button';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<Site_SettingsBody1Header_Menu_ButtonPrimary>;
};

export type Site_SettingsBody1Header_Menu_ButtonPrimary = {
  __typename?: 'Site_settingsBody1Header_menu_buttonPrimary';
  button_name?: Maybe<Scalars['Json']>;
  link_for_home_button?: Maybe<_Linkable>;
};

export type Site_SettingsBodyCopywriting = {
  __typename?: 'Site_settingsBodyCopywriting';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<Site_SettingsBodyCopywritingPrimary>;
};

export type Site_SettingsBodyCopywritingPrimary = {
  __typename?: 'Site_settingsBodyCopywritingPrimary';
  copy_write_info?: Maybe<Scalars['Json']>;
};

export type Site_SettingsBodyInformationblock = {
  __typename?: 'Site_settingsBodyInformationblock';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<Site_SettingsBodyInformationblockPrimary>;
};

export type Site_SettingsBodyInformationblockPrimary = {
  __typename?: 'Site_settingsBodyInformationblockPrimary';
  logo?: Maybe<Scalars['Json']>;
  title?: Maybe<Scalars['Json']>;
  link_to_top?: Maybe<_Linkable>;
  company_description?: Maybe<Scalars['Json']>;
};

export type Site_SettingsBodySocial_Network_Link = {
  __typename?: 'Site_settingsBodySocial_network_link';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<Site_SettingsBodySocial_Network_LinkPrimary>;
  fields?: Maybe<Array<Site_SettingsBodySocial_Network_LinkFields>>;
};

export type Site_SettingsBodySocial_Network_LinkFields = {
  __typename?: 'Site_settingsBodySocial_network_linkFields';
  social_profile_picture?: Maybe<_Linkable>;
  link_to_social_profile?: Maybe<_Linkable>;
};

export type Site_SettingsBodySocial_Network_LinkPrimary = {
  __typename?: 'Site_settingsBodySocial_network_linkPrimary';
  social_links_header?: Maybe<Scalars['Json']>;
};

export type Site_SettingsBodySublinks = {
  __typename?: 'Site_settingsBodySublinks';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<Site_SettingsBodySublinksPrimary>;
  fields?: Maybe<Array<Site_SettingsBodySublinksFields>>;
};

export type Site_SettingsBodySublinksFields = {
  __typename?: 'Site_settingsBodySublinksFields';
  sublink_name?: Maybe<Scalars['Json']>;
  link?: Maybe<_Linkable>;
};

export type Site_SettingsBodySublinksPrimary = {
  __typename?: 'Site_settingsBodySublinksPrimary';
  sublinks_title?: Maybe<Scalars['Json']>;
};

export type Site_SettingsBodyValues = {
  __typename?: 'Site_settingsBodyValues';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Site_SettingsBodyValuesFields>>;
};

export type Site_SettingsBodyValuesFields = {
  __typename?: 'Site_settingsBodyValuesFields';
  value?: Maybe<Scalars['Json']>;
};

/** A connection to a list of items. */
export type Site_SettingsConnectionConnection = {
  __typename?: 'Site_settingsConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<Site_SettingsConnectionEdge>>>;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type Site_SettingsConnectionEdge = {
  __typename?: 'Site_settingsConnectionEdge';
  /** The item at the end of the edge. */
  node: Site_Settings;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export enum SortDocumentsBy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortEmployee_Editingy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  AddEmployeeAsc = 'add_employee_ASC',
  AddEmployeeDesc = 'add_employee_DESC',
  SaveEmployeeAsc = 'save_employee_ASC',
  SaveEmployeeDesc = 'save_employee_DESC'
}

export enum SortOrganization_Detailsy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  GoalStatusLabelAsc = 'goal_status_label_ASC',
  GoalStatusLabelDesc = 'goal_status_label_DESC',
  PeopleLabelAsc = 'people_label_ASC',
  PeopleLabelDesc = 'people_label_DESC',
  AddPeopleLabelAsc = 'add_people_label_ASC',
  AddPeopleLabelDesc = 'add_people_label_DESC',
  PeopleStartedTrainingLabelAsc = 'people_started_training_label_ASC',
  PeopleStartedTrainingLabelDesc = 'people_started_training_label_DESC',
  PeopleNotStartedTrainingLabelAsc = 'people_not_started_training_label_ASC',
  PeopleNotStartedTrainingLabelDesc = 'people_not_started_training_label_DESC',
  SuccessStructureTitleAsc = 'success_structure_title_ASC',
  SuccessStructureTitleDesc = 'success_structure_title_DESC'
}

export enum SortOrganizations_Create_Step_1y {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  OrganizationTitleAsc = 'organization_title_ASC',
  OrganizationTitleDesc = 'organization_title_DESC',
  NameDropdownAsc = 'name_dropdown_ASC',
  NameDropdownDesc = 'name_dropdown_DESC',
  MoreinfobuttonAsc = 'moreinfobutton_ASC',
  MoreinfobuttonDesc = 'moreinfobutton_DESC',
  IndustryTitleAsc = 'industry_title_ASC',
  IndustryTitleDesc = 'industry_title_DESC',
  IndustryDropdownAsc = 'industry_dropdown_ASC',
  IndustryDropdownDesc = 'industry_dropdown_DESC',
  RoleTitleAsc = 'role_title_ASC',
  RoleTitleDesc = 'role_title_DESC',
  RoleDropdownAsc = 'role_dropdown_ASC',
  RoleDropdownDesc = 'role_dropdown_DESC'
}

export enum SortOrganizations_Main_Pagey {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  ButtonAsc = 'button_ASC',
  ButtonDesc = 'button_DESC',
  ShoutTextAsc = 'shout_text_ASC',
  ShoutTextDesc = 'shout_text_DESC'
}

export enum SortOrganizationstructurey {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  NeedHelpAsc = 'need_help_ASC',
  NeedHelpDesc = 'need_help_DESC',
  TrainingLabelAsc = 'training_label_ASC',
  TrainingLabelDesc = 'training_label_DESC',
  AddBoardLabelAsc = 'add_board_label_ASC',
  AddBoardLabelDesc = 'add_board_label_DESC',
  AddManagementTeamAsc = 'add_management_team_ASC',
  AddManagementTeamDesc = 'add_management_team_DESC',
  AddSuccessfulUnitAsc = 'add_successful_unit_ASC',
  AddSuccessfulUnitDesc = 'add_successful_unit_DESC'
}

export enum SortSite_Settingsy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  SignInButtonAsc = 'sign_in_button_ASC',
  SignInButtonDesc = 'sign_in_button_DESC',
  AuthModalTitleAsc = 'auth_modal_title_ASC',
  AuthModalTitleDesc = 'auth_modal_title_DESC',
  AuthModalSocialTitleAsc = 'auth_modal_social_title_ASC',
  AuthModalSocialTitleDesc = 'auth_modal_social_title_DESC',
  AuthModalLinkedinBtnNameAsc = 'auth_modal_linkedin_btn_name_ASC',
  AuthModalLinkedinBtnNameDesc = 'auth_modal_linkedin_btn_name_DESC',
  AuthModalGoogleBtnNameAsc = 'auth_modal_google_btn_name_ASC',
  AuthModalGoogleBtnNameDesc = 'auth_modal_google_btn_name_DESC',
  AuthModalFacebookBtnNameAsc = 'auth_modal_facebook_btn_name_ASC',
  AuthModalFacebookBtnNameDesc = 'auth_modal_facebook_btn_name_DESC',
  AuthModalAppleBtnNameAsc = 'auth_modal_apple_btn_name_ASC',
  AuthModalAppleBtnNameDesc = 'auth_modal_apple_btn_name_DESC',
  AuthModalEmailTitleAsc = 'auth_modal_email_title_ASC',
  AuthModalEmailTitleDesc = 'auth_modal_email_title_DESC',
  AuthModalPlaceholderAsc = 'auth_modal_placeholder_ASC',
  AuthModalPlaceholderDesc = 'auth_modal_placeholder_DESC',
  AuthModalNextActionButtonNameAsc = 'auth_modal_next_action_button_name_ASC',
  AuthModalNextActionButtonNameDesc = 'auth_modal_next_action_button_name_DESC',
  AuthModalSuccessTitleAsc = 'auth_modal_success_title_ASC',
  AuthModalSuccessTitleDesc = 'auth_modal_success_title_DESC',
  AuthModalSuccessBtnNameAsc = 'auth_modal_success_btn_name_ASC',
  AuthModalSuccessBtnNameDesc = 'auth_modal_success_btn_name_DESC'
}

export enum SortStart_Pagey {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  ButtonAsc = 'button_ASC',
  ButtonDesc = 'button_DESC',
  ShoutTextAsc = 'shout_text_ASC',
  ShoutTextDesc = 'shout_text_DESC'
}

export enum SortTesty {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortUnit_Editingy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  HeaderTitleAsc = 'header_title_ASC',
  HeaderTitleDesc = 'header_title_DESC',
  UnitdetailtitleAsc = 'unitdetailtitle_ASC',
  UnitdetailtitleDesc = 'unitdetailtitle_DESC',
  ManagerandemployeeslabelAsc = 'managerandemployeeslabel_ASC',
  ManagerandemployeeslabelDesc = 'managerandemployeeslabel_DESC',
  AddPeopleButtonAsc = 'add_people_button_ASC',
  AddPeopleButtonDesc = 'add_people_button_DESC',
  HeadofunitlabelAsc = 'headofunitlabel_ASC',
  HeadofunitlabelDesc = 'headofunitlabel_DESC',
  HeadOfUnitAsc = 'head_of_unit_ASC',
  HeadOfUnitDesc = 'head_of_unit_DESC',
  WorkgrouplabelAsc = 'workgrouplabel_ASC',
  WorkgrouplabelDesc = 'workgrouplabel_DESC',
  AddWorkGroupButtonAsc = 'add_work_group_button_ASC',
  AddWorkGroupButtonDesc = 'add_work_group_button_DESC'
}

export enum SortWork_Group_Editingy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  HeaderAsc = 'header_ASC',
  HeaderDesc = 'header_DESC',
  AddPeopleTitleAsc = 'add_people_title_ASC',
  AddPeopleTitleDesc = 'add_people_title_DESC',
  SaveButtonAsc = 'save_button_ASC',
  SaveButtonDesc = 'save_button_DESC'
}

export type Start_Page = _Document & _Linkable & {
  __typename?: 'Start_page';
  body2?: Maybe<Array<Start_PageBody2>>;
  repeatable_elements?: Maybe<Array<Start_PageRepeatable_Elements>>;
  button?: Maybe<Scalars['Json']>;
  button_link?: Maybe<_Linkable>;
  shout_text?: Maybe<Scalars['Json']>;
  shout_text_link?: Maybe<_Linkable>;
  body?: Maybe<Array<Start_PageBody>>;
  _meta: Meta;
  _linkType?: Maybe<Scalars['String']>;
};

export type Start_PageBody = Start_PageBodySeo | Start_PageBodyScripts;

export type Start_PageBody2 =
  Start_PageBody2Goals
  | Start_PageBody2Interview_Block
  | Start_PageBody2Contact_Block
  | Start_PageBody2Goals1
  | Start_PageBody2Seo;

export type Start_PageBody2Contact_Block = {
  __typename?: 'Start_pageBody2Contact_block';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<Start_PageBody2Contact_BlockPrimary>;
};

export type Start_PageBody2Contact_BlockPrimary = {
  __typename?: 'Start_pageBody2Contact_blockPrimary';
  title?: Maybe<Scalars['Json']>;
  description?: Maybe<Scalars['Json']>;
  contact_us_button_text?: Maybe<Scalars['String']>;
  contact_us_link?: Maybe<_Linkable>;
  unlock_button_text?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['Json']>;
};

export type Start_PageBody2Goals = {
  __typename?: 'Start_pageBody2Goals';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<Start_PageBody2GoalsPrimary>;
  fields?: Maybe<Array<Start_PageBody2GoalsFields>>;
};

export type Start_PageBody2Goals1 = {
  __typename?: 'Start_pageBody2Goals1';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Start_PageBody2Goals1Fields>>;
};

export type Start_PageBody2Goals1Fields = {
  __typename?: 'Start_pageBody2Goals1Fields';
  image?: Maybe<Scalars['Json']>;
  header?: Maybe<Scalars['Json']>;
  description?: Maybe<Scalars['Json']>;
  button_text?: Maybe<Scalars['Json']>;
  link?: Maybe<_Linkable>;
};

export type Start_PageBody2GoalsFields = {
  __typename?: 'Start_pageBody2GoalsFields';
  image?: Maybe<Scalars['Json']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['Json']>;
};

export type Start_PageBody2GoalsPrimary = {
  __typename?: 'Start_pageBody2GoalsPrimary';
  heading?: Maybe<Scalars['Json']>;
  contact_us_button_text?: Maybe<Scalars['String']>;
  contact_us_link?: Maybe<_Linkable>;
};

export type Start_PageBody2Interview_Block = {
  __typename?: 'Start_pageBody2Interview_block';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<Start_PageBody2Interview_BlockPrimary>;
};

export type Start_PageBody2Interview_BlockPrimary = {
  __typename?: 'Start_pageBody2Interview_blockPrimary';
  heading?: Maybe<Scalars['Json']>;
  video_id?: Maybe<Scalars['Json']>;
  video?: Maybe<Scalars['Json']>;
  title?: Maybe<Scalars['Json']>;
  description?: Maybe<Scalars['Json']>;
};

export type Start_PageBody2Seo = {
  __typename?: 'Start_pageBody2Seo';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<Start_PageBody2SeoPrimary>;
};

export type Start_PageBody2SeoPrimary = {
  __typename?: 'Start_pageBody2SeoPrimary';
  meta_title1?: Maybe<Scalars['String']>;
  meta_description1?: Maybe<Scalars['String']>;
  canonical_url?: Maybe<_Linkable>;
  open_graph_description1?: Maybe<Scalars['Json']>;
  open_graph_image1?: Maybe<Scalars['Json']>;
  hide_in_sitemap1?: Maybe<Scalars['Json']>;
};

export type Start_PageBodyScripts = {
  __typename?: 'Start_pageBodyScripts';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<Start_PageBodyScriptsPrimary>;
};

export type Start_PageBodyScriptsPrimary = {
  __typename?: 'Start_pageBodyScriptsPrimary';
  script?: Maybe<Scalars['Json']>;
  render_in_head?: Maybe<Scalars['Json']>;
  render_in_body?: Maybe<Scalars['Json']>;
  render_in_bottom?: Maybe<Scalars['Json']>;
};

export type Start_PageBodySeo = {
  __typename?: 'Start_pageBodySeo';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<Start_PageBodySeoPrimary>;
};

export type Start_PageBodySeoPrimary = {
  __typename?: 'Start_pageBodySeoPrimary';
  meta_title1?: Maybe<Scalars['String']>;
  meta_description1?: Maybe<Scalars['String']>;
  canonical_url?: Maybe<_Linkable>;
  open_graph_description1?: Maybe<Scalars['Json']>;
  open_graph_image1?: Maybe<Scalars['Json']>;
  hide_in_sitemap1?: Maybe<Scalars['Json']>;
};

/** A connection to a list of items. */
export type Start_PageConnectionConnection = {
  __typename?: 'Start_pageConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<Start_PageConnectionEdge>>>;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type Start_PageConnectionEdge = {
  __typename?: 'Start_pageConnectionEdge';
  /** The item at the end of the edge. */
  node: Start_Page;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type Start_PageRepeatable_Elements = {
  __typename?: 'Start_pageRepeatable_elements';
  background_image?: Maybe<Scalars['Json']>;
  description?: Maybe<Scalars['Json']>;
};

export type Test = _Document & _Linkable & {
  __typename?: 'Test';
  _meta: Meta;
  _linkType?: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type TestConnectionConnection = {
  __typename?: 'TestConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TestConnectionEdge>>>;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type TestConnectionEdge = {
  __typename?: 'TestConnectionEdge';
  /** The item at the end of the edge. */
  node: Test;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type Unit_Editing = _Document & _Linkable & {
  __typename?: 'Unit_editing';
  header_title?: Maybe<Scalars['Json']>;
  unitdetailtitle?: Maybe<Scalars['Json']>;
  managerandemployeeslabel?: Maybe<Scalars['Json']>;
  add_people_button?: Maybe<Scalars['Json']>;
  headofunitlabel?: Maybe<Scalars['Json']>;
  head_of_unit?: Maybe<Scalars['Json']>;
  workgrouplabel?: Maybe<Scalars['Json']>;
  add_work_group_button?: Maybe<Scalars['Json']>;
  body1?: Maybe<Array<Unit_EditingBody1>>;
  _meta: Meta;
  _linkType?: Maybe<Scalars['String']>;
};

export type Unit_EditingBody1 = Unit_EditingBody1Footer_New_Item;

export type Unit_EditingBody1Footer_New_Item = {
  __typename?: 'Unit_editingBody1Footer_new_item';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<Unit_EditingBody1Footer_New_ItemPrimary>;
};

export type Unit_EditingBody1Footer_New_ItemPrimary = {
  __typename?: 'Unit_editingBody1Footer_new_itemPrimary';
  cancel_button?: Maybe<Scalars['Json']>;
  success_button?: Maybe<Scalars['Json']>;
};

/** A connection to a list of items. */
export type Unit_EditingConnectionConnection = {
  __typename?: 'Unit_editingConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<Unit_EditingConnectionEdge>>>;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type Unit_EditingConnectionEdge = {
  __typename?: 'Unit_editingConnectionEdge';
  /** The item at the end of the edge. */
  node: Unit_Editing;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type WhereEmployee_Editing = {
  /** add_employee */
  add_employee_fulltext?: Maybe<Scalars['String']>;
  /** save_employee */
  save_employee_fulltext?: Maybe<Scalars['String']>;
};

export type WhereOrganization_Details = {
  /** parent_page */
  parent_page?: Maybe<Scalars['String']>;
  /** goal_status_label */
  goal_status_label_fulltext?: Maybe<Scalars['String']>;
  /** people_label */
  people_label_fulltext?: Maybe<Scalars['String']>;
  /** add_people_label */
  add_people_label_fulltext?: Maybe<Scalars['String']>;
  /** people_started_training_label */
  people_started_training_label_fulltext?: Maybe<Scalars['String']>;
  /** people_not_started_training_label */
  people_not_started_training_label_fulltext?: Maybe<Scalars['String']>;
  /** success_structure_title */
  success_structure_title_fulltext?: Maybe<Scalars['String']>;
};

export type WhereOrganizations_Create_Step_1 = {
  /** organization_title */
  organization_title_fulltext?: Maybe<Scalars['String']>;
  /** name_dropdown */
  name_dropdown_fulltext?: Maybe<Scalars['String']>;
  /** moreinfobutton */
  moreinfobutton_fulltext?: Maybe<Scalars['String']>;
  /** industry_title */
  industry_title_fulltext?: Maybe<Scalars['String']>;
  /** industry_dropdown */
  industry_dropdown_fulltext?: Maybe<Scalars['String']>;
  /** role_title */
  role_title_fulltext?: Maybe<Scalars['String']>;
  /** role_dropdown */
  role_dropdown_fulltext?: Maybe<Scalars['String']>;
};

export type WhereOrganizations_Main_Page = {
  /** button */
  button_fulltext?: Maybe<Scalars['String']>;
  /** button_link */
  button_link?: Maybe<Scalars['String']>;
  /** shout_text */
  shout_text_fulltext?: Maybe<Scalars['String']>;
  /** shout_text_link */
  shout_text_link?: Maybe<Scalars['String']>;
};

export type WhereOrganizationstructure = {
  /** parent_page */
  parent_page?: Maybe<Scalars['String']>;
  /** need_help */
  need_help_fulltext?: Maybe<Scalars['String']>;
  /** training_label */
  training_label_fulltext?: Maybe<Scalars['String']>;
  /** training_link */
  training_link?: Maybe<Scalars['String']>;
  /** add_board_label */
  add_board_label_fulltext?: Maybe<Scalars['String']>;
  /** add_management_team */
  add_management_team_fulltext?: Maybe<Scalars['String']>;
  /** add_successful_unit */
  add_successful_unit_fulltext?: Maybe<Scalars['String']>;
  /** link_to_unit_creating */
  link_to_unit_creating?: Maybe<Scalars['String']>;
};

export type WhereSite_Settings = {
  /** link_for_title */
  link_for_title?: Maybe<Scalars['String']>;
  /** sign_in_button */
  sign_in_button_fulltext?: Maybe<Scalars['String']>;
  /** auth_modal_title */
  auth_modal_title_fulltext?: Maybe<Scalars['String']>;
  /** auth_modal_social_title */
  auth_modal_social_title_fulltext?: Maybe<Scalars['String']>;
  /** auth_modal_linkedin_btn_name */
  auth_modal_linkedin_btn_name_fulltext?: Maybe<Scalars['String']>;
  /** auth_modal_google_btn_name */
  auth_modal_google_btn_name_fulltext?: Maybe<Scalars['String']>;
  /** auth_modal_facebook_btn_name */
  auth_modal_facebook_btn_name_fulltext?: Maybe<Scalars['String']>;
  /** auth_modal_apple_btn_name */
  auth_modal_apple_btn_name_fulltext?: Maybe<Scalars['String']>;
  /** auth_modal_email_title */
  auth_modal_email_title_fulltext?: Maybe<Scalars['String']>;
  /** auth_modal_placeholder */
  auth_modal_placeholder_fulltext?: Maybe<Scalars['String']>;
  /** auth_modal_next_action_button_name */
  auth_modal_next_action_button_name_fulltext?: Maybe<Scalars['String']>;
  /** auth_modal_success_title */
  auth_modal_success_title_fulltext?: Maybe<Scalars['String']>;
  /** auth_modal_success_btn_name */
  auth_modal_success_btn_name_fulltext?: Maybe<Scalars['String']>;
};

export type WhereStart_Page = {
  /** button */
  button_fulltext?: Maybe<Scalars['String']>;
  /** button_link */
  button_link?: Maybe<Scalars['String']>;
  /** shout_text */
  shout_text_fulltext?: Maybe<Scalars['String']>;
  /** shout_text_link */
  shout_text_link?: Maybe<Scalars['String']>;
};

export type WhereUnit_Editing = {
  /** header_title */
  header_title_fulltext?: Maybe<Scalars['String']>;
  /** unitdetailtitle */
  unitdetailtitle_fulltext?: Maybe<Scalars['String']>;
  /** managerandemployeeslabel */
  managerandemployeeslabel_fulltext?: Maybe<Scalars['String']>;
  /** add_people_button */
  add_people_button_fulltext?: Maybe<Scalars['String']>;
  /** headofunitlabel */
  headofunitlabel_fulltext?: Maybe<Scalars['String']>;
  /** head_of_unit */
  head_of_unit_fulltext?: Maybe<Scalars['String']>;
  /** workgrouplabel */
  workgrouplabel_fulltext?: Maybe<Scalars['String']>;
  /** add_work_group_button */
  add_work_group_button_fulltext?: Maybe<Scalars['String']>;
};

export type WhereWork_Group_Editing = {
  /** header */
  header_fulltext?: Maybe<Scalars['String']>;
  /** add_people_title */
  add_people_title_fulltext?: Maybe<Scalars['String']>;
  /** save_button */
  save_button_fulltext?: Maybe<Scalars['String']>;
};

export type Work_Group_Editing = _Document & _Linkable & {
  __typename?: 'Work_group_editing';
  header?: Maybe<Scalars['Json']>;
  add_people_title?: Maybe<Scalars['Json']>;
  save_button?: Maybe<Scalars['Json']>;
  _meta: Meta;
  _linkType?: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type Work_Group_EditingConnectionConnection = {
  __typename?: 'Work_group_editingConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<Work_Group_EditingConnectionEdge>>>;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type Work_Group_EditingConnectionEdge = {
  __typename?: 'Work_group_editingConnectionEdge';
  /** The item at the end of the edge. */
  node: Work_Group_Editing;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** A prismic document */
export type _Document = {
  _meta: Meta;
};

/** A connection to a list of items. */
export type _DocumentConnection = {
  __typename?: '_DocumentConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<_DocumentEdge>>>;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type _DocumentEdge = {
  __typename?: '_DocumentEdge';
  /** The item at the end of the edge. */
  node: _Document;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** An external link */
export type _ExternalLink = _Linkable & {
  __typename?: '_ExternalLink';
  url: Scalars['String'];
  target?: Maybe<Scalars['String']>;
  _linkType?: Maybe<Scalars['String']>;
};

/** A linked file */
export type _FileLink = _Linkable & {
  __typename?: '_FileLink';
  name: Scalars['String'];
  url: Scalars['String'];
  size: Scalars['Long'];
  _linkType?: Maybe<Scalars['String']>;
};

/** A linked image */
export type _ImageLink = _Linkable & {
  __typename?: '_ImageLink';
  name: Scalars['String'];
  url: Scalars['String'];
  size: Scalars['Long'];
  height: Scalars['Int'];
  width: Scalars['Int'];
  _linkType?: Maybe<Scalars['String']>;
};

/** A prismic link */
export type _Linkable = {
  _linkType?: Maybe<Scalars['String']>;
};

export type Similar = {
  documentId: Scalars['String'];
  max: Scalars['Int'];
};


export type AllStartPagesQueryVariables = Exact<{
  lang?: Maybe<Scalars['String']>;
}>;

export type CreatePageSelect_Texts = {
  __typename?: 'CreatePageSelect_Texts';
  /** select label */
  label?: Maybe<Scalars['String']>;
  /** select placeholder */
  placeholder?: Maybe<Scalars['String']>;
  /** select default value */
  default_value: Maybe<Scalars['String']>;
  /** select option groups array, if any */
  option_groups?: Maybe<Array<Maybe<CreatePageSelectOptionGroup_Texts>>>;
  /** select options array, if any */
  options?: Maybe<Array<Maybe<CreatePageSelectOption_Texts>>>;
  /** error message, if input is required and empty */
  error?: Maybe<Scalars['String']>;
  /** error message, if input value length is not valid */
  error_length?: Maybe<Scalars['String']>;
  /** error message, if entry with such a value already exists */
  error_exists?: Maybe<Scalars['String']>;
};

export type CreatePageSelectOptionGroup_Texts = {
  __typename?: 'CreatePageSelectOptionGroup_Texts';
  label?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<CreatePageSelectOption_Texts>>>;
};

export type CreatePageSelectOption_Texts = {
  __typename?: 'CreatePageSelectOption_Texts';
  text?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type CreatePageInput_Texts = {
  __typename?: 'CreatePagesInput_Texts';
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

export type CreateOrgDetailsInputs_Texts = {
  __typename?: 'CreateOrgDetailsInputs_Texts';
  input_OrganizationName?: Maybe<CreatePageInput_Texts>;
  input_IndustryId?: Maybe<CreatePageSelect_Texts>;
  input_EmployeeCreatorRoleId?: Maybe<CreatePageSelect_Texts>;
};

export type CreateOrgDetailsPage_Texts = {
  __typename?: 'CreateOrgDetailsPage_Texts';
  form?: Maybe<CreateOrgDetailsInputs_Texts>;
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

export type CreateBuildSuccessPage_Texts = {
  __typename?: 'CreateBuildSuccessPage_Texts';
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

export type CreateOrgDetailsPageExitModal_Texts = {
  __typename?: 'CreateOrgDetailsPageExitModal_Texts';
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

export type CreateSuccessUnitsPageAddHeadModal_Texts = {
  __typename?: 'CreateSuccessUnitsPageAddHeadModal_Texts';
  modal_title?: Maybe<Scalars['String']>;
  button_save?: Maybe<Scalars['String']>;
  button_add_new_head?: Maybe<Scalars['String']>;
  text_more: Maybe<Scalars['String']>;
  input_name?: Maybe<CreatePageInput_Texts>;
  input_title: Maybe<CreatePageInput_Texts>;
  input_email: Maybe<CreatePageInput_Texts>;
  input_employerId: Maybe<CreatePageSelect_Texts>;
};

export type CreateSuccessUnitsPageAddGroupModal_Texts = {
  __typename?: 'CreateSuccessUnitsPageAddGroupModal_Texts';
  modal_title?: Maybe<Scalars['String']>;
  text_more?: Maybe<Scalars['String']>;
  button_save?: Maybe<Scalars['String']>;
  button_add_people?: Maybe<Scalars['String']>;
  button_add_new_employee?: Maybe<Scalars['String']>;
  input_name?: Maybe<CreatePageInput_Texts>;
  input_department: Maybe<CreatePageInput_Texts>;
};

export type CreateSuccessUnitsPageAddPeopleModal_Texts = {
  __typename?: 'CreateSuccessUnitsPageAddPeopleModal_Texts';
  modal_title?: Maybe<Scalars['String']>;
  text_more?: Maybe<Scalars['String']>;
  button_save?: Maybe<Scalars['String']>;
  button_add_group?: Maybe<Scalars['String']>;
  button_add_new_employee?: Maybe<Scalars['String']>;
  input_name?: Maybe<CreatePageInput_Texts>;
  input_title: Maybe<CreatePageInput_Texts>;
  input_email: Maybe<CreatePageInput_Texts>;
  input_employerId: Maybe<CreatePageSelect_Texts>;
};

export type CreateSuccessUnitsPageModals_Texts = {
  __typename?: 'CreateSuccessUnitsPageModals_Texts';
  add_head_modal?: Maybe<CreateSuccessUnitsPageAddHeadModal_Texts>;
  add_people_modal?: Maybe<CreateSuccessUnitsPageAddPeopleModal_Texts>;
  add_group_modal?: Maybe<CreateSuccessUnitsPageAddGroupModal_Texts>;
};

export type CreateSuccessUnitsPageUnitDetails_Texts = {
  __typename?: 'CreateSuccessUnitsPageUnitDetails_Texts';
  label?: Maybe<Scalars['String']>;
  input_name?: Maybe<CreatePageInput_Texts>;
  input_type?: Maybe<CreatePageSelect_Texts>;
};

export type CreateSuccessUnitsPageHeadOfUnit_Texts = {
  __typename?: 'CreateSuccessUnitsPageHeadOfUnit_Texts';
  label?: Maybe<Scalars['String']>;
  button_add?: Maybe<Scalars['String']>;
};

export type CreateSuccessUnitsPageWorkGroups_Texts = {
  __typename?: 'CreateSuccessUnitsPageWorkGroups_Texts';
  label?: Maybe<Scalars['String']>;
  button_add?: Maybe<Scalars['String']>;
};

export type CreateSuccessUnitsPageManager_Texts = {
  __typename?: 'CreateSuccessUnitsPageManager_Texts';
  label?: Maybe<Scalars['String']>;
  button_add?: Maybe<Scalars['String']>;
};

export type GoalStatusOverviewCard = {
  __typename?: 'GoalStatusOverviewCard';
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  button?: Maybe<Scalars['String']>;
};

export type CreateSuccessUnitsPage_Texts = {
  __typename?: 'CreateSuccessUnitsPage_Texts';
  modals?: Maybe<CreateSuccessUnitsPageModals_Texts>;
  text_learn_more?: Maybe<Scalars['String']>;
  text_optional?: Maybe<Scalars['String']>;
  button_cancel?: Maybe<Scalars['String']>;
  button_save?: Maybe<Scalars['String']>;
  button_edit?: Maybe<Scalars['String']>;
  error_employee_add_default?: Maybe<Scalars['String']>;
  unit_details?: Maybe<CreateSuccessUnitsPageUnitDetails_Texts>;
  head_of_unit?: Maybe<CreateSuccessUnitsPageHeadOfUnit_Texts>;
  work_groups?: Maybe<CreateSuccessUnitsPageWorkGroups_Texts>;
  manager?: Maybe<CreateSuccessUnitsPageManager_Texts>;
};

export type CreateSuccessUnitsElement = {
  __typename?: 'CreateSuccessUnitsElement'
  id?: number
  name?: string
  unitType?: number | { id: number, name: string }
  headEmployeeId?: number
};

export type CreateSuccessOrganization = {
  __typename?: 'CreateSuccessOrganization';
  id?: number
  OrganizationName: string
  IndustryId?: number
  EmployeeCreatorRoleId?: number
};

export type CreateSuccessUnitsDepartment = CreateSuccessUnitsElement & {
  __typename?: 'CreateSuccessUnitsDepartment';
  name?: Scalars['String'];
};

export type CreateSuccessUnitsGroup = CreateSuccessUnitsElement & {
  __typename?: 'CreateSuccessUnitsGroup'
  id?: number
  name?: Scalars['String']
  department?: Scalars['String']
  people?: Array<CreateSuccessUnitsHuman>
};

export type CreateSuccessUnitsHead = CreateSuccessUnitsElement & {
  __typename?: 'CreateSuccessUnitsHead'
  id?: number
  name?: Scalars['String']
  title?: Scalars['String']
  email?: Scalars['String']
};

export type CreateSuccessUnitsHuman = CreateSuccessUnitsElement & {
  __typename?: 'CreateSuccessUnitsHuman'
  id?: number
  name?: Scalars['String']
  title?: Scalars['String']
  email?: Scalars['String']
  employerId?: number
  groups?: Array<CreateSuccessUnitsGroup>
};


export type AllStartPagesQuery = (
  { __typename?: 'Query' }
  & {
  allStart_pages: (
    { __typename?: 'Start_pageConnectionConnection' }
    & {
    edges?: Maybe<Array<Maybe<(
      { __typename?: 'Start_pageConnectionEdge' }
      & {
      node: (
        { __typename?: 'Start_page' }
        & Pick<Start_Page, 'button' | 'shout_text'>
        & {
        _meta: (
          { __typename?: 'Meta' }
          & Pick<Meta, 'id' | 'uid' | 'type' | 'tags' | 'lang'>
          ), repeatable_elements?: Maybe<Array<(
          { __typename?: 'Start_pageRepeatable_elements' }
          & Pick<Start_PageRepeatable_Elements, 'background_image' | 'description'>
        )>>, button_link?: Maybe<(
          { __typename?: 'Employee_editing' }
          & Pick<Employee_Editing, '_linkType'>
        ) | (
          { __typename?: 'Organization_details' }
          & Pick<Organization_Details, '_linkType'>
        ) | (
          { __typename?: 'Organizations_create_step_1' }
          & Pick<Organizations_Create_Step_1, '_linkType'>
          ) | (
          { __typename?: 'Organizations_main_page' }
          & Pick<Organizations_Main_Page, '_linkType'>
        ) | (
          { __typename?: 'Organizationstructure' }
          & Pick<Organizationstructure, '_linkType'>
        ) | (
          { __typename?: 'Site_settings' }
          & Pick<Site_Settings, '_linkType'>
          ) | (
          { __typename?: 'Start_page' }
          & Pick<Start_Page, '_linkType'>
          ) | (
          { __typename?: 'Test' }
          & Pick<Test, '_linkType'>
        ) | (
          { __typename?: 'Unit_editing' }
          & Pick<Unit_Editing, '_linkType'>
        ) | (
          { __typename?: 'Work_group_editing' }
          & Pick<Work_Group_Editing, '_linkType'>
        ) | (
          { __typename?: '_ExternalLink' }
          & Pick<_ExternalLink, '_linkType'>
          ) | (
          { __typename?: '_FileLink' }
          & Pick<_FileLink, '_linkType'>
          ) | (
          { __typename?: '_ImageLink' }
          & Pick<_ImageLink, '_linkType'>
        )>, shout_text_link?: Maybe<(
          { __typename?: 'Employee_editing' }
          & Pick<Employee_Editing, '_linkType'>
        ) | (
          { __typename?: 'Organization_details' }
          & Pick<Organization_Details, '_linkType'>
        ) | (
          { __typename?: 'Organizations_create_step_1' }
          & Pick<Organizations_Create_Step_1, '_linkType'>
          ) | (
          { __typename?: 'Organizations_main_page' }
          & Pick<Organizations_Main_Page, '_linkType'>
        ) | (
          { __typename?: 'Organizationstructure' }
          & Pick<Organizationstructure, '_linkType'>
        ) | (
          { __typename?: 'Site_settings' }
          & Pick<Site_Settings, '_linkType'>
          ) | (
          { __typename?: 'Start_page' }
          & Pick<Start_Page, '_linkType'>
          ) | (
          { __typename?: 'Test' }
          & Pick<Test, '_linkType'>
        ) | (
          { __typename?: 'Unit_editing' }
          & Pick<Unit_Editing, '_linkType'>
        ) | (
          { __typename?: 'Work_group_editing' }
          & Pick<Work_Group_Editing, '_linkType'>
        ) | (
          { __typename?: '_ExternalLink' }
          & Pick<_ExternalLink, '_linkType'>
          ) | (
          { __typename?: '_FileLink' }
          & Pick<_FileLink, '_linkType'>
          ) | (
          { __typename?: '_ImageLink' }
          & Pick<_ImageLink, '_linkType'>
          )>, body?: Maybe<Array<(
          { __typename?: 'Start_pageBodySeo' }
          & {
          primary?: Maybe<(
            { __typename?: 'Start_pageBodySeoPrimary' }
            & Pick<Start_PageBodySeoPrimary, 'meta_title1' | 'meta_description1' | 'open_graph_description1' | 'open_graph_image1' | 'hide_in_sitemap1'>
            )>
        }
          ) | { __typename?: 'Start_pageBodyScripts' }>>, body2?: Maybe<Array<(
          { __typename?: 'Start_pageBody2Goals' }
          & {
          primary?: Maybe<(
            { __typename?: 'Start_pageBody2GoalsPrimary' }
            & Pick<Start_PageBody2GoalsPrimary, 'heading' | 'contact_us_button_text'>
            & { contact_us_link?: Maybe<(
              { __typename?: 'Employee_editing' }
              & Pick<Employee_Editing, '_linkType'>
            ) | (
              { __typename?: 'Organization_details' }
              & Pick<Organization_Details, '_linkType'>
            ) | (
              { __typename?: 'Organizations_create_step_1' }
              & Pick<Organizations_Create_Step_1, '_linkType'>
              ) | (
              { __typename?: 'Organizations_main_page' }
              & Pick<Organizations_Main_Page, '_linkType'>
            ) | (
              { __typename?: 'Organizationstructure' }
              & Pick<Organizationstructure, '_linkType'>
            ) | (
              { __typename?: 'Site_settings' }
              & Pick<Site_Settings, '_linkType'>
              ) | (
              { __typename?: 'Start_page' }
              & Pick<Start_Page, '_linkType'>
              ) | (
              { __typename?: 'Test' }
              & Pick<Test, '_linkType'>
            ) | (
              { __typename?: 'Unit_editing' }
              & Pick<Unit_Editing, '_linkType'>
            ) | (
              { __typename?: 'Work_group_editing' }
              & Pick<Work_Group_Editing, '_linkType'>
            ) | (
              { __typename?: '_ExternalLink' }
              & Pick<_ExternalLink, '_linkType'>
              ) | (
              { __typename?: '_FileLink' }
              & Pick<_FileLink, '_linkType'>
              ) | (
              { __typename?: '_ImageLink' }
              & Pick<_ImageLink, '_linkType'>
              )>
          }
            )>, fields?: Maybe<Array<(
            { __typename?: 'Start_pageBody2GoalsFields' }
            & Pick<Start_PageBody2GoalsFields, 'image' | 'title' | 'description'>
            )>>
        }
          ) | (
          { __typename?: 'Start_pageBody2Interview_block' }
          & {
          primary?: Maybe<(
            { __typename?: 'Start_pageBody2Interview_blockPrimary' }
            & Pick<Start_PageBody2Interview_BlockPrimary, 'video_id' | 'title' | 'heading' | 'video' | 'description'>
            )>
        }
          ) | (
          { __typename?: 'Start_pageBody2Contact_block' }
          & Pick<Start_PageBody2Contact_Block, 'type' | 'label'>
          & {
          primary?: Maybe<(
            { __typename?: 'Start_pageBody2Contact_blockPrimary' }
            & Pick<Start_PageBody2Contact_BlockPrimary, 'title' | 'description' | 'contact_us_button_text' | 'unlock_button_text' | 'image'>
            )>
        }
          ) | (
          { __typename?: 'Start_pageBody2Goals1' }
          & Pick<Start_PageBody2Goals1, 'type' | 'label'>
          & {
          fields?: Maybe<Array<(
            { __typename?: 'Start_pageBody2Goals1Fields' }
            & Pick<Start_PageBody2Goals1Fields, 'image' | 'header' | 'description' | 'button_text'>
            & { link?: Maybe<(
              { __typename?: 'Employee_editing' }
              & Pick<Employee_Editing, '_linkType'>
            ) | (
              { __typename?: 'Organization_details' }
              & Pick<Organization_Details, '_linkType'>
            ) | (
              { __typename?: 'Organizations_create_step_1' }
              & Pick<Organizations_Create_Step_1, '_linkType'>
              ) | (
              { __typename?: 'Organizations_main_page' }
              & Pick<Organizations_Main_Page, '_linkType'>
            ) | (
              { __typename?: 'Organizationstructure' }
              & Pick<Organizationstructure, '_linkType'>
            ) | (
              { __typename?: 'Site_settings' }
              & Pick<Site_Settings, '_linkType'>
              ) | (
              { __typename?: 'Start_page' }
              & Pick<Start_Page, '_linkType'>
              ) | (
              { __typename?: 'Test' }
              & Pick<Test, '_linkType'>
            ) | (
              { __typename?: 'Unit_editing' }
              & Pick<Unit_Editing, '_linkType'>
            ) | (
              { __typename?: 'Work_group_editing' }
              & Pick<Work_Group_Editing, '_linkType'>
            ) | (
              { __typename?: '_ExternalLink' }
              & Pick<_ExternalLink, '_linkType'>
              ) | (
              { __typename?: '_FileLink' }
              & Pick<_FileLink, '_linkType'>
              ) | (
              { __typename?: '_ImageLink' }
              & Pick<_ImageLink, '_linkType'>
              )>
          }
            )>>
        }
          ) | { __typename?: 'Start_pageBody2Seo' }>>
      }
        )
    }
      )>>>
  }
    )
}
  );

export type AllSettingsQueryVariables = Exact<{
  lang?: Maybe<Scalars['String']>;
}>;


export type AllSettingsQuery = (
  { __typename?: 'Query' }
  & {
  allSite_settingss: (
    { __typename?: 'Site_settingsConnectionConnection' }
    & {
    edges?: Maybe<Array<Maybe<(
      { __typename?: 'Site_settingsConnectionEdge' }
      & {
      node: (
        { __typename?: 'Site_settings' }
        & Pick<Site_Settings, 'main_logo' | 'sign_in_button' | 'auth_modal_title' | 'auth_modal_social_title' | 'auth_modal_linkedin_btn_name' | 'auth_modal_google_btn_name' | 'auth_modal_facebook_btn_name' | 'auth_modal_apple_btn_name' | 'auth_modal_email_title' | 'auth_modal_placeholder' | 'auth_modal_next_action_button_name' | 'auth_modal_success_title' | 'auth_modal_success_btn_name' | '_linkType'>
        & {
        body?: Maybe<Array<(
          { __typename?: 'Site_settingsBodyValues' }
          & Pick<Site_SettingsBodyValues, 'type' | 'label'>
          & {
          fields?: Maybe<Array<(
            { __typename?: 'Site_settingsBodyValuesFields' }
            & Pick<Site_SettingsBodyValuesFields, 'value'>
            )>>
        }
          ) | (
          { __typename?: 'Site_settingsBodyInformationblock' }
          & Pick<Site_SettingsBodyInformationblock, 'type' | 'label'>
          & {
          primary?: Maybe<(
            { __typename?: 'Site_settingsBodyInformationblockPrimary' }
            & Pick<Site_SettingsBodyInformationblockPrimary, 'title' | 'logo' | 'company_description'>
            & { link_to_top?: Maybe<(
              { __typename?: 'Employee_editing' }
              & Pick<Employee_Editing, '_linkType'>
            ) | (
              { __typename?: 'Organization_details' }
              & Pick<Organization_Details, '_linkType'>
            ) | (
              { __typename?: 'Organizations_create_step_1' }
              & Pick<Organizations_Create_Step_1, '_linkType'>
              ) | (
              { __typename?: 'Organizations_main_page' }
              & Pick<Organizations_Main_Page, '_linkType'>
            ) | (
              { __typename?: 'Organizationstructure' }
              & Pick<Organizationstructure, '_linkType'>
            ) | (
              { __typename?: 'Site_settings' }
              & Pick<Site_Settings, '_linkType'>
              ) | (
              { __typename?: 'Start_page' }
              & Pick<Start_Page, '_linkType'>
              ) | (
              { __typename?: 'Test' }
              & Pick<Test, '_linkType'>
            ) | (
              { __typename?: 'Unit_editing' }
              & Pick<Unit_Editing, '_linkType'>
            ) | (
              { __typename?: 'Work_group_editing' }
              & Pick<Work_Group_Editing, '_linkType'>
            ) | (
              { __typename?: '_ExternalLink' }
              & Pick<_ExternalLink, '_linkType'>
              ) | (
              { __typename?: '_FileLink' }
              & Pick<_FileLink, '_linkType'>
              ) | (
              { __typename?: '_ImageLink' }
              & Pick<_ImageLink, '_linkType'>
              )>
          }
            )>
        }
          ) | (
          { __typename?: 'Site_settingsBodyCopywriting' }
          & Pick<Site_SettingsBodyCopywriting, 'type' | 'label'>
          & {
          primary?: Maybe<(
            { __typename?: 'Site_settingsBodyCopywritingPrimary' }
            & Pick<Site_SettingsBodyCopywritingPrimary, 'copy_write_info'>
            )>
        }
          ) | (
          { __typename?: 'Site_settingsBodySocial_network_link' }
          & Pick<Site_SettingsBodySocial_Network_Link, 'type' | 'label'>
          & {
          primary?: Maybe<(
            { __typename?: 'Site_settingsBodySocial_network_linkPrimary' }
            & Pick<Site_SettingsBodySocial_Network_LinkPrimary, 'social_links_header'>
            )>, fields?: Maybe<Array<(
            { __typename?: 'Site_settingsBodySocial_network_linkFields' }
            & { social_profile_picture?: Maybe<(
              { __typename?: 'Employee_editing' }
              & Pick<Employee_Editing, '_linkType'>
            ) | (
              { __typename?: 'Organization_details' }
              & Pick<Organization_Details, '_linkType'>
            ) | (
              { __typename?: 'Organizations_create_step_1' }
              & Pick<Organizations_Create_Step_1, '_linkType'>
              ) | (
              { __typename?: 'Organizations_main_page' }
              & Pick<Organizations_Main_Page, '_linkType'>
            ) | (
              { __typename?: 'Organizationstructure' }
              & Pick<Organizationstructure, '_linkType'>
            ) | (
              { __typename?: 'Site_settings' }
              & Pick<Site_Settings, '_linkType'>
              ) | (
              { __typename?: 'Start_page' }
              & Pick<Start_Page, '_linkType'>
              ) | (
              { __typename?: 'Test' }
              & Pick<Test, '_linkType'>
            ) | (
              { __typename?: 'Unit_editing' }
              & Pick<Unit_Editing, '_linkType'>
            ) | (
              { __typename?: 'Work_group_editing' }
              & Pick<Work_Group_Editing, '_linkType'>
            ) | (
              { __typename?: '_ExternalLink' }
              & Pick<_ExternalLink, '_linkType'>
              ) | (
              { __typename?: '_FileLink' }
              & Pick<_FileLink, '_linkType'>
              ) | (
              { __typename?: '_ImageLink' }
              & Pick<_ImageLink, '_linkType'>
            )>, link_to_social_profile?: Maybe<(
              { __typename?: 'Employee_editing' }
              & Pick<Employee_Editing, '_linkType'>
            ) | (
              { __typename?: 'Organization_details' }
              & Pick<Organization_Details, '_linkType'>
            ) | (
              { __typename?: 'Organizations_create_step_1' }
              & Pick<Organizations_Create_Step_1, '_linkType'>
              ) | (
              { __typename?: 'Organizations_main_page' }
              & Pick<Organizations_Main_Page, '_linkType'>
            ) | (
              { __typename?: 'Organizationstructure' }
              & Pick<Organizationstructure, '_linkType'>
            ) | (
              { __typename?: 'Site_settings' }
              & Pick<Site_Settings, '_linkType'>
              ) | (
              { __typename?: 'Start_page' }
              & Pick<Start_Page, '_linkType'>
              ) | (
              { __typename?: 'Test' }
              & Pick<Test, '_linkType'>
            ) | (
              { __typename?: 'Unit_editing' }
              & Pick<Unit_Editing, '_linkType'>
            ) | (
              { __typename?: 'Work_group_editing' }
              & Pick<Work_Group_Editing, '_linkType'>
            ) | (
              { __typename?: '_ExternalLink' }
              & Pick<_ExternalLink, '_linkType'>
              ) | (
              { __typename?: '_FileLink' }
              & Pick<_FileLink, '_linkType'>
              ) | (
              { __typename?: '_ImageLink' }
              & Pick<_ImageLink, '_linkType'>
              )>
          }
            )>>
        }
          ) | (
          { __typename?: 'Site_settingsBodySublinks' }
          & Pick<Site_SettingsBodySublinks, 'type' | 'label'>
          & {
          primary?: Maybe<(
            { __typename?: 'Site_settingsBodySublinksPrimary' }
            & Pick<Site_SettingsBodySublinksPrimary, 'sublinks_title'>
            )>, fields?: Maybe<Array<(
            { __typename?: 'Site_settingsBodySublinksFields' }
            & Pick<Site_SettingsBodySublinksFields, 'sublink_name'>
            & { link?: Maybe<(
              { __typename?: 'Employee_editing' }
              & Pick<Employee_Editing, '_linkType'>
            ) | (
              { __typename?: 'Organization_details' }
              & Pick<Organization_Details, '_linkType'>
            ) | (
              { __typename?: 'Organizations_create_step_1' }
              & Pick<Organizations_Create_Step_1, '_linkType'>
              ) | (
              { __typename?: 'Organizations_main_page' }
              & Pick<Organizations_Main_Page, '_linkType'>
            ) | (
              { __typename?: 'Organizationstructure' }
              & Pick<Organizationstructure, '_linkType'>
            ) | (
              { __typename?: 'Site_settings' }
              & Pick<Site_Settings, '_linkType'>
              ) | (
              { __typename?: 'Start_page' }
              & Pick<Start_Page, '_linkType'>
              ) | (
              { __typename?: 'Test' }
              & Pick<Test, '_linkType'>
            ) | (
              { __typename?: 'Unit_editing' }
              & Pick<Unit_Editing, '_linkType'>
            ) | (
              { __typename?: 'Work_group_editing' }
              & Pick<Work_Group_Editing, '_linkType'>
            ) | (
              { __typename?: '_ExternalLink' }
              & Pick<_ExternalLink, '_linkType'>
              ) | (
              { __typename?: '_FileLink' }
              & Pick<_FileLink, '_linkType'>
              ) | (
              { __typename?: '_ImageLink' }
              & Pick<_ImageLink, '_linkType'>
              )>
          }
            )>>
        }
          )>>, body1?: Maybe<Array<(
          { __typename?: 'Site_settingsBody1Header_menu_button' }
          & {
          primary?: Maybe<(
            { __typename?: 'Site_settingsBody1Header_menu_buttonPrimary' }
            & Pick<Site_SettingsBody1Header_Menu_ButtonPrimary, 'button_name'>
            )>
        }
          )>>
      }
        )
    }
      )>>>
  }
    )
}
  );


export const AllStartPagesDocument = gql`
    query AllStartPages($lang: String) {
  allStart_pages(lang: $lang) {
    edges {
      node {
        _meta {
          id
          uid
          type
          tags
          lang
        }
        repeatable_elements {
          background_image
          description
        }
        button
        button_link {
          _linkType
        }
        shout_text
        shout_text_link {
          _linkType
        }
        body {
          ... on Start_pageBodySeo {
            primary {
              meta_title1
              meta_description1
              open_graph_description1
              open_graph_image1
              hide_in_sitemap1
            }
          }
        }
        body2 {
          ... on Start_pageBody2Goals {
            primary {
              heading
              contact_us_button_text
              contact_us_link {
                _linkType
              }
            }
            fields {
              image
              title
              description
            }
          }
          ... on Start_pageBody2Goals1 {
            type
            fields {
              image
              header
              description
              button_text
              link {
                _linkType
              }
            }
            label
          }
          ... on Start_pageBody2Contact_block {
            type
            label
            primary {
              title
              description
              contact_us_button_text
              unlock_button_text
              image
            }
          }
          ... on Start_pageBody2Interview_block {
            primary {
              video_id
              title
              heading
              video
              description
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useAllStartPagesQuery__
 *
 * To run a query within a React component, call `useAllStartPagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllStartPagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllStartPagesQuery({
 *   variables: {
 *      lang: // value for 'lang'
 *   },
 * });
 */

export function useAllStartPagesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllStartPagesQuery, AllStartPagesQueryVariables>) {
        return ApolloReactHooks.useQuery<AllStartPagesQuery, AllStartPagesQueryVariables>(AllStartPagesDocument, baseOptions);
      }
export function useAllStartPagesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllStartPagesQuery, AllStartPagesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllStartPagesQuery, AllStartPagesQueryVariables>(AllStartPagesDocument, baseOptions);
        }

export type AllStartPagesQueryHookResult = ReturnType<typeof useAllStartPagesQuery>;
export type AllStartPagesLazyQueryHookResult = ReturnType<typeof useAllStartPagesLazyQuery>;
export type AllStartPagesQueryResult = ApolloReactCommon.QueryResult<AllStartPagesQuery, AllStartPagesQueryVariables>;
export const AllSettingsDocument = gql`
    query AllSettings($lang: String) {
  allSite_settingss(lang: $lang) {
    edges {
      node {
        body {
          ... on Site_settingsBodyValues {
            type
            label
            fields {
              value
            }
          }
          ... on Site_settingsBodySublinks {
            type
            label
            primary {
              sublinks_title
            }
            fields {
              sublink_name
              link {
                _linkType
              }
            }
          }
          ... on Site_settingsBodyCopywriting {
            type
            label
            primary {
              copy_write_info
            }
          }
          ... on Site_settingsBodyInformationblock {
            type
            label
            primary {
              title
              logo
              link_to_top {
                _linkType
              }
              company_description
            }
          }
          ... on Site_settingsBodySocial_network_link {
            type
            label
            primary {
              social_links_header
            }
            fields {
              social_profile_picture {
                _linkType
              }
              link_to_social_profile {
                _linkType
              }
            }
          }
        }
        body1 {
          ... on Site_settingsBody1Header_menu_button {
            primary {
              button_name
            }
          }
        }
        main_logo
        sign_in_button
        auth_modal_title
        auth_modal_social_title
        auth_modal_linkedin_btn_name
        auth_modal_google_btn_name
        auth_modal_facebook_btn_name
        auth_modal_apple_btn_name
        auth_modal_email_title
        auth_modal_placeholder
        auth_modal_next_action_button_name
        auth_modal_success_title
        auth_modal_success_btn_name
        _linkType
      }
    }
  }
}
    `;

/**
 * __useAllSettingsQuery__
 *
 * To run a query within a React component, call `useAllSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllSettingsQuery({
 *   variables: {
 *      lang: // value for 'lang'
 *   },
 * });
 */
export function useAllSettingsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllSettingsQuery, AllSettingsQueryVariables>) {
        return ApolloReactHooks.useQuery<AllSettingsQuery, AllSettingsQueryVariables>(AllSettingsDocument, baseOptions);
      }
export function useAllSettingsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllSettingsQuery, AllSettingsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllSettingsQuery, AllSettingsQueryVariables>(AllSettingsDocument, baseOptions);
        }
		
export type AllSettingsQueryHookResult = ReturnType<typeof useAllSettingsQuery>;
export type AllSettingsLazyQueryHookResult = ReturnType<typeof useAllSettingsLazyQuery>;
export type AllSettingsQueryResult = ApolloReactCommon.QueryResult<AllSettingsQuery, AllSettingsQueryVariables>;

export interface IntrospectionResultData {
  __schema: {
    types: {
      kind: string;
      name: string;
      possibleTypes: {
        name: string;
      }[];
    }[];
  };
}

const result: IntrospectionResultData = {
  "__schema": {
    "types": [
      {
        "kind": "UNION",
        "name": "Organization_detailsBody",
        "possibleTypes": [
          {
            "name": "Organization_detailsBodyCompany_unit_context_menu"
          },
          {
            "name": "Organization_detailsBodyContact_block"
          },
          {
            "name": "Organization_detailsBodyAdnvatanges_block"
          },
          {
            "name": "Organization_detailsBodyAdditional_info"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "Organizations_create_step_1Body",
        "possibleTypes": [
          {
            "name": "Organizations_create_step_1BodyOrganization_detail_footer"
          },
          {
            "name": "Organizations_create_step_1BodyOrganization_header"
          },
          {
            "name": "Organizations_create_step_1BodyAdditional_info_block"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "Organizations_main_pageBody",
        "possibleTypes": [
          {
            "name": "Organizations_main_pageBodyAdditional_info"
          },
          {
            "name": "Organizations_main_pageBodyAdnvatanges_block"
          },
          {
            "name": "Organizations_main_pageBodyContact_block"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "OrganizationstructureBody",
        "possibleTypes": [
          {
            "name": "OrganizationstructureBodyOrganization_footer"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "Site_settingsBody",
        "possibleTypes": [
          {
            "name": "Site_settingsBodyValues"
          },
          {
            "name": "Site_settingsBodyInformationblock"
          },
          {
            "name": "Site_settingsBodyCopywriting"
          },
          {
            "name": "Site_settingsBodySocial_network_link"
          },
          {
            "name": "Site_settingsBodySublinks"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "Site_settingsBody1",
        "possibleTypes": [
          {
            "name": "Site_settingsBody1Header_menu_button"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "Start_pageBody",
        "possibleTypes": [
          {
            "name": "Start_pageBodySeo"
          },
          {
            "name": "Start_pageBodyScripts"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "Start_pageBody2",
        "possibleTypes": [
          {
            "name": "Start_pageBody2Goals"
          },
          {
            "name": "Start_pageBody2Interview_block"
          },
          {
            "name": "Start_pageBody2Contact_block"
          },
          {
            "name": "Start_pageBody2Goals1"
          },
          {
            "name": "Start_pageBody2Seo"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "Unit_editingBody1",
        "possibleTypes": [
          {
            "name": "Unit_editingBody1Footer_new_item"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "_Document",
        "possibleTypes": [
          {
            "name": "Employee_editing"
          },
          {
            "name": "Organization_details"
          },
          {
            "name": "Organizations_create_step_1"
          },
          {
            "name": "Organizations_main_page"
          },
          {
            "name": "Organizationstructure"
          },
          {
            "name": "Site_settings"
          },
          {
            "name": "Start_page"
          },
          {
            "name": "Test"
          },
          {
            "name": "Unit_editing"
          },
          {
            "name": "Work_group_editing"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "_Linkable",
        "possibleTypes": [
          {
            "name": "Employee_editing"
          },
          {
            "name": "Organization_details"
          },
          {
            "name": "Organizations_create_step_1"
          },
          {
            "name": "Organizations_main_page"
          },
          {
            "name": "Organizationstructure"
          },
          {
            "name": "Site_settings"
          },
          {
            "name": "Start_page"
          },
          {
            "name": "Test"
          },
          {
            "name": "Unit_editing"
          },
          {
            "name": "Work_group_editing"
          },
          {
            "name": "_ExternalLink"
          },
          {
            "name": "_FileLink"
          },
          {
            "name": "_ImageLink"
          }
        ]
      }
    ]
  }
};
export default result;
    