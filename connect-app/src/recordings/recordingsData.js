import React from "react";
import { S3Client, ListObjectsCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { ConnectClient, DescribeUserCommand} from "@aws-sdk/client-connect";


const client = new S3Client({
  region: 'us-east-1',
  credentials: {
    accessKeyId: `${import.meta.env.VITE_AWS_ACCESS_KEY_ID}N`,
    secretAccessKey: `${import.meta.env.VITE_AWS_SECRET_ACCESS_KEY}x`
  }
});
const input = { // ListObjectsRequest
  Bucket: "bison-wireless-storage",
  Delimiter: "/",
  Prefix: "ContactRecords2024/04/05/06/",
};

const command = new ListObjectsCommand(input);
const response = await client.send(command);

// const input_other_bucket = { // ListObjectsRequest
//   Bucket: "bison-wireless-storage",
//   Delimiter: "/",
//   Prefix: "ContactRecords2024/04/05/12/",
// };

// const command_other_bucket = new ListObjectsCommand(input_other_bucket);
// const response_other_bucket = await client.send(command_other_bucket);

// var response_new = {...response.Contents,...response_other_bucket.Contents};
// console.log(response_new)

var recordings_list = [];
var call_review_json = {};

for (let i = 0; i < response.Contents[i].length; i++){
  var file_location = 'https://bison-wireless-storage.s3.amazonaws.com/' + response.Contents[i].Key;
  var contact_record = await fetch(file_location)
  .then ((response) => response.json())
  .then (data => {
    return data;
  });

  var conversation_duration = await fetch('https://bison-wireless-storage.s3.amazonaws.com/Analysis/Voice/2024/04/05/' + contact_record.ContactId + "_analysis_" + contact_record.Queue.DequeueTimestamp + ".json")
  .then ((response) => response.json())
  .then (data => {
    return data.ConversationCharacteristics.TotalConversationDurationMillis;
  });

  let conversation_mins = conversation_duration/1000/60;
  conversation_mins = Math.floor(conversation_mins);
  let conversation_secs = (conversation_duration/1000)%60;
  conversation_secs = Math.floor(conversation_secs);
  var convo_length = `${conversation_mins}:${conversation_secs}`;

  var user_id = contact_record.Agent.ARN;
  user_id = user_id.split("/");
  user_id = user_id[(user_id.length - 1)];

  const connect_client = new ConnectClient({
    region: 'us-east-1',
    credentials: {
      accessKeyId: `${import.meta.env.VITE_AWS_ACCESS_KEY_ID}N`,
      secretAccessKey: `${import.meta.env.VITE_AWS_SECRET_ACCESS_KEY}x`
    }
  });
  const connect_input = { 
    InstanceId: "4d9f7918-6f2c-45a1-a403-27493400fc91",
    UserId: user_id
  };
  
  
  const connect_command = new DescribeUserCommand(connect_input);
  const connect_response = await connect_client.send(connect_command);
  
  // console.log(connect_response);
  var date = Date.parse(contact_record.InitiationTimestamp)
  var date_fixed = new Date(date)

  var curr_recording = {
    name: `${connect_response.User.IdentityInfo.FirstName} ${connect_response.User.IdentityInfo.LastName}`,
    id: contact_record.Agent.Username,
    date: String(date_fixed).slice(0, 15),
    full_date: date_fixed.toString(),
    time: convo_length,
    screen_recording: 'https://bison-wireless-storage.s3.amazonaws.com' + contact_record.Recordings[1].Location.slice(22),
    contact_id: contact_record.ContactId,
    audio_file: 'https://bison-wireless-storage.s3.amazonaws.com/Analysis/Voice/Redacted' + contact_record.Recordings[0].Location.slice(60,72) + contact_record.ContactId + "_call_recording_redacted_" + contact_record.Queue.DequeueTimestamp + ".wav",
    transcript: 'https://bison-wireless-storage.s3.amazonaws.com/Analysis/Voice/Redacted' + contact_record.Recordings[0].Location.slice(60,72) + contact_record.ContactId + "_analysis_redacted_" + contact_record.Queue.DequeueTimestamp + ".json",
  }

  // console.log(contact_record.Recordings[0].Location.slice(60,72))
  recordings_list.push(curr_recording);
  call_review_json[contact_record.ContactId] = curr_recording;


}

const input_other_bucket = { // ListObjectsRequest
  Bucket: "bison-wireless-storage",
  Delimiter: "/",
  Prefix: "ContactRecords2024/04/05/12/",
};

const command_other_bucket = new ListObjectsCommand(input_other_bucket);
const response_other_bucket = await client.send(command_other_bucket);

for (let i = 0; i < response_other_bucket.Contents[i].length; i++){
  var file_location = 'https://bison-wireless-storage.s3.amazonaws.com/' + response_other_bucket.Contents[i].Key;
  var contact_record = await fetch(file_location)
  .then ((response) => response.json())
  .then (data => {
    return data;
  });

  var conversation_duration = await fetch('https://bison-wireless-storage.s3.amazonaws.com/Analysis/Voice/2024/04/05/' + contact_record.ContactId + "_analysis_" + contact_record.Queue.DequeueTimestamp + ".json")
  .then ((response) => response.json())
  .then (data => {
    return data.ConversationCharacteristics.TotalConversationDurationMillis;
  });

  let conversation_mins = conversation_duration/1000/60;
  conversation_mins = Math.floor(conversation_mins);
  let conversation_secs = (conversation_duration/1000)%60;
  conversation_secs = Math.floor(conversation_secs);
  var convo_length = `${conversation_mins}:${conversation_secs}`;

  var user_id = contact_record.Agent.ARN;
  user_id = user_id.split("/");
  user_id = user_id[(user_id.length - 1)];

  const connect_client = new ConnectClient({
    region: 'us-east-1',
    credentials: {
      accessKeyId: `${import.meta.env.VITE_AWS_ACCESS_KEY_ID}N`,
      secretAccessKey: `${import.meta.env.VITE_AWS_SECRET_ACCESS_KEY}x`
    }
  });
  const connect_input = { 
    InstanceId: "4d9f7918-6f2c-45a1-a403-27493400fc91",
    UserId: user_id
  };
  
  
  const connect_command = new DescribeUserCommand(connect_input);
  const connect_response = await connect_client.send(connect_command);
  
  // console.log(connect_response);
  var date = Date.parse(contact_record.InitiationTimestamp)
  var date_fixed = new Date(date)

  var curr_recording = {
    name: `${connect_response.User.IdentityInfo.FirstName} ${connect_response.User.IdentityInfo.LastName}`,
    id: contact_record.Agent.Username,
    date: String(date_fixed).slice(0, 15),
    full_date: date_fixed.toString(),
    time: convo_length,
    screen_recording: 'https://bison-wireless-storage.s3.amazonaws.com' + contact_record.Recordings[1].Location.slice(22),
    contact_id: contact_record.ContactId,
    audio_file: 'https://bison-wireless-storage.s3.amazonaws.com/Analysis/Voice/Redacted' + contact_record.Recordings[0].Location.slice(60,72) + contact_record.ContactId + "_call_recording_redacted_" + contact_record.Queue.DequeueTimestamp + ".wav",
    transcript: 'https://bison-wireless-storage.s3.amazonaws.com/Analysis/Voice/Redacted' + contact_record.Recordings[0].Location.slice(60,72) + contact_record.ContactId + "_analysis_redacted_" + contact_record.Queue.DequeueTimestamp + ".json",
  }

  // console.log(contact_record.Recordings[0].Location.slice(60,72))
  recordings_list.push(curr_recording);
  call_review_json[contact_record.ContactId] = curr_recording;


}

// console.log(recordings_list);

const columns = [
    {name: "NAME", uid: "name", sortable: true},
    {name: "DATE", uid: "date", sortable: true},
    {name: "TIME", uid: "time"},
    {name: "ID", uid: "id"},
    {name: "ACTIONS", uid: "actions"},
  ];

const statusOptions = [
  {name: "Active", uid: "active"},
  {name: "Offline", uid: "offline"},
];

// console.log(recordings_list);
const users = recordings_list;
const call_review = [call_review_json];
// [
//   {
//     name: "Tony Reichert",
//     id: "BW167930",
//     date: "November 23, 2023",
//     time: "17 Minutes",
//     avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
//   },
//   {
//     name: "Zoey Lang",
//     id: "BW197910",
//     date: "November 19, 2023",
//     time: "14 Minutes",
//     avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
//   },
//   {
//     name: "Jane Fisher",
//     id: "BW147840",
//     date: "November 17, 2023",
//     time: "15 Minutes",
//     avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
//   },
//   {
//     name: "William Howard",
//     id: "BW128830",
//     date: "November 17, 2023",
//     time: "19 Minutes",
//     avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
//   },
//   {
//     name: "Kristen Copper",
//     id: "BW160231",
//     date: "November 23, 2023",
//     time: "12 Minutes",
//     avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
//   },
//   {
//     name: "Brian Kim",
//     avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
//     id: "BW177241",
//     date: "November 23, 2023",
//     time: "18 Minutes",
//   },
//   {
//     name: "Michael Hunt",
//     id: "BW163220",
//     date: "November 23, 2023",
//     time: "17 Minutes",
//     avatar: "https://i.pravatar.cc/150?u=a042581f4e29027007d",
//   },
//   {
//     name: "Samantha Brooks",
//     id: "BW182440",
//     date: "November 23, 2023",
//     time: "17 Minutes",
//     avatar: "https://i.pravatar.cc/150?u=a042581f4e27027008d",
//   },
//   {
//     name: "Frank Harrison",
//     id: "BW197250",
//     date: "November 23, 2023",
//     time: "17 Minutes",
//     avatar: "https://i.pravatar.cc/150?img=4",
//   },
//   {
//     name: "Emma Adams",
//     id: "BW194920",
//     date: "November 23, 2023",
//     time: "17 Minutes",
//     avatar: "https://i.pravatar.cc/150?img=5",
//   },
//   {
//     name: "Brandon Stevens",
//     id: "BW155120",
//     date: "November 23, 2023",
//     time: "17 Minutes",
//     avatar: "https://i.pravatar.cc/150?img=8",
//   },
//   {
//     name: "Megan Richards",
//     id: "BW193420",
//     date: "November 23, 2023",
//     time: "17 Minutes",
//     avatar: "https://i.pravatar.cc/150?img=10",
//   },
//   {
//     name: "Oliver Scott",
//     id: "BW193350",
//     date: "November 23, 2023",
//     time: "17 Minutes",
//     avatar: "https://i.pravatar.cc/150?img=12",
//   },
//   {
//     name: "Grace Allen",
//     id: "BW172320",
//     date: "November 23, 2023",
//     time: "17 Minutes",
//     avatar: "https://i.pravatar.cc/150?img=16",
//   },
//   {
//     name: "Noah Carter",
//     id: "BW197990",
//     date: "November 23, 2023",
//     time: "17 Minutes",
//     avatar: "https://i.pravatar.cc/150?img=15",
//   },
//   {
//     name: "Ava Perez",
//     id: "BW136220",
//     date: "November 23, 2023",
//     time: "17 Minutes",
//     avatar: "https://i.pravatar.cc/150?img=20",
//   },
//   {
//     name: "Liam Johnson",
//     id: "BW156220",
//     date: "November 23, 2023",
//     time: "17 Minutes",
//     avatar: "https://i.pravatar.cc/150?img=33",
//   },
//   {
//     name: "Sophia Taylor",
//     id: "BW163260",
//     date: "November 23, 2023",
//     time: "17 Minutes",
//     avatar: "https://i.pravatar.cc/150?img=29",
//   },
//   {
//     name: "Lucas Harris",
//     id: "BW144260",
//     date: "November 23, 2023",
//     time: "17 Minutes",
//     avatar: "https://i.pravatar.cc/150?img=50",
//   },
//   {
//     name: "Mia Robinson",
//     id: "BW188320",
//     date: "November 23, 2023",
//     time: "17 Minutes",
//     avatar: "https://i.pravatar.cc/150?img=45",
//   },
// ];

export {columns, users, statusOptions, call_review};
