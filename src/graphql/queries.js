/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEnvsensor = /* GraphQL */ `
  query GetEnvsensor($id: ID!) {
    getEnvsensor(id: $id) {
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
export const listEnvsensors = /* GraphQL */ `
  query ListEnvsensors(
    $filter: ModelEnvsensorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEnvsensors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const envsensorsByTimestamp = /* GraphQL */ `
  query EnvsensorsByTimestamp(
    $type: String!
    $timestamp: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEnvsensorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    envsensorsByTimestamp(
      type: $type
      timestamp: $timestamp
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
