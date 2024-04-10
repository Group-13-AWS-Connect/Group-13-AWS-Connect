import React from "react";
import { S3Client, ListObjectsCommand, GetObjectCommand } from "@aws-sdk/client-s3";

const client = new S3Client({
  region: 'us-east-1',
  credentials: {
    accessKeyId: "AKIA6ORSY25BTE7SVENQ",
    secretAccessKey: "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"
  }
});
const input = { // ListObjectsRequestlol;'?
Bucket: "bison-wireless-storage",
Delimiter: "/",
Prefix: "ContactRecords2024/04/05/06/",
};

const command = new ListObjectsCommand(input);
const response = await client.send(command);
var recordings_list = [];

for (let i = 0; i < response.Contents.length; i++){
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

var curr_recording = {
agent: contact_record.Agent.Username,
date: contact_record.InitiationTimestamp,
length: convo_length,
screen_recording: 'https://bison-wireless-storage.s3.amazonaws.com' + contact_record.Recordings[1].Location,
audio_file: 'https://bison-wireless-storage.s3.amazonaws.com' + contact_record.Recordings[0].Location,
transcript: 'https://bison-wireless-storage.s3.amazonaws.com/Analysis/Voice/2024/04/05/' + contact_record.ContactId + "_analysis_" + contact_record.Queue.DequeueTimestamp + ".json",
}

recordings_list.push(curr_recording);

}

// console.log(recordings_list);

// for (record in contact_records) {
//   file_locations.push('https://bison-wireless-storage.s3.amazonaws.com/' + record.Key)
// }

// // var file_location = 'https://bison-wireless-storage.s3.amazonaws.com/' + response.Contents[0].Key
// var file2 = await fetch(file_location)
// .then ((response) => response.json())
// .then (data => {
// return data;
// // console.log(data)
// });

// console.log(file2)


// const columns = [
//   {name: "ID", uid: "id", sortable: true},
//   {name: "NAME", uid: "name", sortable: true},
//   {name: "AGE", uid: "age", sortable: true},
//   {name: "ROLE", uid: "role", sortable: true},
//   {name: "TEAM", uid: "team"},
//   {name: "EMAIL", uid: "email"},
//   {name: "STATUS", uid: "status", sortable: true},
//   {name: "ACTIONS", uid: "actions"},
// ];


