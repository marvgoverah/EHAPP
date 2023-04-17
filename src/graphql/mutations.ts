/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserInfo = /* GraphQL */ `
  mutation CreateUserInfo(
    $input: CreateUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    createUserInfo(input: $input, condition: $condition) {
      id
      name
      firstName
      lastName
      email
      phone
      address
      nokFname
      nokLname
      nkphone
      nkemail
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUserInfo = /* GraphQL */ `
  mutation UpdateUserInfo(
    $input: UpdateUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    updateUserInfo(input: $input, condition: $condition) {
      id
      name
      firstName
      lastName
      email
      phone
      address
      nokFname
      nokLname
      nkphone
      nkemail
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUserInfo = /* GraphQL */ `
  mutation DeleteUserInfo(
    $input: DeleteUserInfoInput!
    $condition: ModelUserInfoConditionInput
  ) {
    deleteUserInfo(input: $input, condition: $condition) {
      id
      name
      firstName
      lastName
      email
      phone
      address
      nokFname
      nokLname
      nkphone
      nkemail
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
