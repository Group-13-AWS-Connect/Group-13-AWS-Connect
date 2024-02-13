/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRecording = /* GraphQL */ `
  query GetRecording($id: ID!) {
    getRecording(id: $id) {
      date
      agentname
      agentid
      transcript
      video
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRecordings = /* GraphQL */ `
  query ListRecordings(
    $filter: ModelRecordingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecordings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        date
        agentname
        agentid
        transcript
        video
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
