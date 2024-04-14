/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEnvsensor = /* GraphQL */ `
  subscription OnCreateEnvsensor(
    $filter: ModelSubscriptionEnvsensorFilterInput
    $owner: String
  ) {
    onCreateEnvsensor(filter: $filter, owner: $owner) {
      id
      type
      deviceid
      timestamp
      illuminance
      power
      humidity
      temperature
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateEnvsensor = /* GraphQL */ `
  subscription OnUpdateEnvsensor(
    $filter: ModelSubscriptionEnvsensorFilterInput
    $owner: String
  ) {
    onUpdateEnvsensor(filter: $filter, owner: $owner) {
      id
      type
      deviceid
      timestamp
      illuminance
      power
      humidity
      temperature
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteEnvsensor = /* GraphQL */ `
  subscription OnDeleteEnvsensor(
    $filter: ModelSubscriptionEnvsensorFilterInput
    $owner: String
  ) {
    onDeleteEnvsensor(filter: $filter, owner: $owner) {
      id
      type
      deviceid
      timestamp
      illuminance
      power
      humidity
      temperature
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
