/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRecording = /* GraphQL */ `
  subscription OnCreateRecording(
    $filter: ModelSubscriptionRecordingFilterInput
  ) {
    onCreateRecording(filter: $filter) {
      agent_id
      name
      transcript
      video
      tags
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateRecording = /* GraphQL */ `
  subscription OnUpdateRecording(
    $filter: ModelSubscriptionRecordingFilterInput
  ) {
    onUpdateRecording(filter: $filter) {
      agent_id
      name
      transcript
      video
      tags
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteRecording = /* GraphQL */ `
  subscription OnDeleteRecording(
    $filter: ModelSubscriptionRecordingFilterInput
  ) {
    onDeleteRecording(filter: $filter) {
      agent_id
      name
      transcript
      video
      tags
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateAgent = /* GraphQL */ `
  subscription OnCreateAgent($filter: ModelSubscriptionAgentFilterInput) {
    onCreateAgent(filter: $filter) {
      agent_id
      name
      status
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateAgent = /* GraphQL */ `
  subscription OnUpdateAgent($filter: ModelSubscriptionAgentFilterInput) {
    onUpdateAgent(filter: $filter) {
      agent_id
      name
      status
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteAgent = /* GraphQL */ `
  subscription OnDeleteAgent($filter: ModelSubscriptionAgentFilterInput) {
    onDeleteAgent(filter: $filter) {
      agent_id
      name
      status
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
