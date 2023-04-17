/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInfoInput = {
  id?: string | null,
  name: string,
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  address?: string | null,
  nokFname: string,
  nokLname: string,
  nkphone: string,
  nkemail: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  _version?: number | null,
};

export type ModelUserInfoConditionInput = {
  name?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  address?: ModelStringInput | null,
  nokFname?: ModelStringInput | null,
  nokLname?: ModelStringInput | null,
  nkphone?: ModelStringInput | null,
  nkemail?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserInfoConditionInput | null > | null,
  or?: Array< ModelUserInfoConditionInput | null > | null,
  not?: ModelUserInfoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type userInfo = {
  __typename: "userInfo",
  id: string,
  name: string,
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  address?: string | null,
  nokFname: string,
  nokLname: string,
  nkphone: string,
  nkemail: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateUserInfoInput = {
  id: string,
  name?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  phone?: string | null,
  address?: string | null,
  nokFname?: string | null,
  nokLname?: string | null,
  nkphone?: string | null,
  nkemail?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  _version?: number | null,
};

export type DeleteUserInfoInput = {
  id: string,
  _version?: number | null,
};

export type ModelUserInfoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  address?: ModelStringInput | null,
  nokFname?: ModelStringInput | null,
  nokLname?: ModelStringInput | null,
  nkphone?: ModelStringInput | null,
  nkemail?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserInfoFilterInput | null > | null,
  or?: Array< ModelUserInfoFilterInput | null > | null,
  not?: ModelUserInfoFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelUserInfoConnection = {
  __typename: "ModelUserInfoConnection",
  items:  Array<userInfo | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionUserInfoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  nokFname?: ModelSubscriptionStringInput | null,
  nokLname?: ModelSubscriptionStringInput | null,
  nkphone?: ModelSubscriptionStringInput | null,
  nkemail?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserInfoFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserInfoFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateUserInfoMutationVariables = {
  input: CreateUserInfoInput,
  condition?: ModelUserInfoConditionInput | null,
};

export type CreateUserInfoMutation = {
  createUserInfo?:  {
    __typename: "userInfo",
    id: string,
    name: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address?: string | null,
    nokFname: string,
    nokLname: string,
    nkphone: string,
    nkemail: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserInfoMutationVariables = {
  input: UpdateUserInfoInput,
  condition?: ModelUserInfoConditionInput | null,
};

export type UpdateUserInfoMutation = {
  updateUserInfo?:  {
    __typename: "userInfo",
    id: string,
    name: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address?: string | null,
    nokFname: string,
    nokLname: string,
    nkphone: string,
    nkemail: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserInfoMutationVariables = {
  input: DeleteUserInfoInput,
  condition?: ModelUserInfoConditionInput | null,
};

export type DeleteUserInfoMutation = {
  deleteUserInfo?:  {
    __typename: "userInfo",
    id: string,
    name: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address?: string | null,
    nokFname: string,
    nokLname: string,
    nkphone: string,
    nkemail: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetUserInfoQueryVariables = {
  id: string,
};

export type GetUserInfoQuery = {
  getUserInfo?:  {
    __typename: "userInfo",
    id: string,
    name: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address?: string | null,
    nokFname: string,
    nokLname: string,
    nkphone: string,
    nkemail: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUserInfosQueryVariables = {
  filter?: ModelUserInfoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserInfosQuery = {
  listUserInfos?:  {
    __typename: "ModelUserInfoConnection",
    items:  Array< {
      __typename: "userInfo",
      id: string,
      name: string,
      firstName: string,
      lastName: string,
      email: string,
      phone: string,
      address?: string | null,
      nokFname: string,
      nokLname: string,
      nkphone: string,
      nkemail: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUserInfosQueryVariables = {
  filter?: ModelUserInfoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserInfosQuery = {
  syncUserInfos?:  {
    __typename: "ModelUserInfoConnection",
    items:  Array< {
      __typename: "userInfo",
      id: string,
      name: string,
      firstName: string,
      lastName: string,
      email: string,
      phone: string,
      address?: string | null,
      nokFname: string,
      nokLname: string,
      nkphone: string,
      nkemail: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateUserInfoSubscriptionVariables = {
  filter?: ModelSubscriptionUserInfoFilterInput | null,
};

export type OnCreateUserInfoSubscription = {
  onCreateUserInfo?:  {
    __typename: "userInfo",
    id: string,
    name: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address?: string | null,
    nokFname: string,
    nokLname: string,
    nkphone: string,
    nkemail: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserInfoSubscriptionVariables = {
  filter?: ModelSubscriptionUserInfoFilterInput | null,
};

export type OnUpdateUserInfoSubscription = {
  onUpdateUserInfo?:  {
    __typename: "userInfo",
    id: string,
    name: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address?: string | null,
    nokFname: string,
    nokLname: string,
    nkphone: string,
    nkemail: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserInfoSubscriptionVariables = {
  filter?: ModelSubscriptionUserInfoFilterInput | null,
};

export type OnDeleteUserInfoSubscription = {
  onDeleteUserInfo?:  {
    __typename: "userInfo",
    id: string,
    name: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address?: string | null,
    nokFname: string,
    nokLname: string,
    nkphone: string,
    nkemail: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
