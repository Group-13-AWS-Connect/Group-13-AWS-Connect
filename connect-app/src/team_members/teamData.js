import React from "react";
import { ConnectClient, ListUsersCommand, ListAgentStatusesCommand, GetCurrentUserDataCommand, DescribeUserCommand} from "@aws-sdk/client-connect";


const connect_client = new ConnectClient({
  region: 'us-east-1',
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY
  }
});
const connect_input = { 
  InstanceId: "4d9f7918-6f2c-45a1-a403-27493400fc91"
};

var employees = [];
const connect_command = new ListUsersCommand(connect_input);
const connect_response = await connect_client.send(connect_command);
var ids = []
for (let i = 0; i < connect_response.UserSummaryList.length; i++) {
  var current_user = connect_response.UserSummaryList[i];
  ids.push(current_user.Id);
}
// console.log(usernames);

var active_ids = [];
const connect_input_2 = { 
  InstanceId: "4d9f7918-6f2c-45a1-a403-27493400fc91",
  Filters: { // UserDataFilters
    Agents: ids
  },
};

const connect_command_2 = new GetCurrentUserDataCommand(connect_input_2);
const connect_response_2 = await connect_client.send(connect_command_2);

for (let i = 0; i < connect_response_2.UserDataList.length; i++) {
  active_ids.push(connect_response_2.UserDataList[i].User.Id);
}

var curr_employee = {};

for (let i = 0; i < ids.length; i++) {
  var status = "offline";
  var role = "Agent";
  const connect_input_3 = { 
    InstanceId: "4d9f7918-6f2c-45a1-a403-27493400fc91",
    UserId: ids[i]
  };
  
  
  const connect_command_3 = new DescribeUserCommand(connect_input_3);
  const connect_response_3 = await connect_client.send(connect_command_3);

  if (active_ids.includes(ids[i])) {
    status = "active";
  }

  if (connect_response_3.User.SecurityProfileIds == "82340050-cac7-4b0e-a0c4-a61716f8540c"){
    role = "Supervisor";
  }
  else if (connect_response_3.User.SecurityProfileIds == "'3a2542b7-b1f0-4829-bdd8-61cc8dec7441'"){
    role = "Admin";
  }

  curr_employee = {
                    id: connect_response_3.User.Id,
                    name: `${connect_response_3.User.IdentityInfo.FirstName} ${connect_response_3.User.IdentityInfo.LastName}`,
                    role: role,
                    team: connect_response_3.User.Username,
                    status: status,
                    email: connect_response_3.User.IdentityInfo.Email

                  }
  
  employees.push(curr_employee);
}
console.log(employees);

const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "NAME", uid: "name", sortable: true},
  {name: "AGE", uid: "age", sortable: true},
  {name: "ROLE", uid: "role", sortable: true},
  {name: "TEAM", uid: "team"},
  {name: "EMAIL", uid: "email"},
  {name: "STATUS", uid: "status", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];

// const statusOptions = [
//   {name: "Active", uid: "active"},
//   {name: "Paused", uid: "paused"},
//   {name: "Vacation", uid: "vacation"},
// ];
const statusOptions = [
  {name: "Active", uid: "active"},
  {name: "Offline", uid: "offline"},
];


const users = employees;
[
  {
    id: 1,
    name: "Tony Reichert",
    role: "Supervisor",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Agent",
    team: "Customer Service",
    status: "offline",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "Agent",
    team: "Customer Service",
    status: "active",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "William Howard",
    role: "Agent",
    team: "Customer Service",
    status: "offline",
    age: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "Kristen Copper",
    role: "Supervisor",
    team: "Management",
    status: "active",
    age: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
  },
  {
    id: 6,
    name: "Brian Kim",
    role: "Supervisor",
    team: "Management",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "brian.kim@example.com",
    status: "active",
  },
  {
    id: 7,
    name: "Michael Hunt",
    role: "Agent",
    team: "Customer Service",
    status: "offline",
    age: "27",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29027007d",
    email: "michael.hunt@example.com",
  },
  {
    id: 8,
    name: "Samantha Brooks",
    role: "Agent",
    team: "Customer Service",
    status: "active",
    age: "31",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e27027008d",
    email: "samantha.brooks@example.com",
  },
  {
    id: 9,
    name: "Frank Harrison",
    role: "Supervisor",
    team: "Management",
    status: "offline",
    age: "33",
    avatar: "https://i.pravatar.cc/150?img=4",
    email: "frank.harrison@example.com",
  },
  {
    id: 10,
    name: "Emma Adams",
    role: "Agent",
    team: "Customer Service",
    status: "active",
    age: "35",
    avatar: "https://i.pravatar.cc/150?img=5",
    email: "emma.adams@example.com",
  },
  {
    id: 11,
    name: "Brandon Stevens",
    role: "Agent",
    team: "Customer Service",
    status: "active",
    age: "22",
    avatar: "https://i.pravatar.cc/150?img=8",
    email: "brandon.stevens@example.com",
  },
  {
    id: 12,
    name: "Megan Richards",
    role: "Agent",
    team: "Customer Service",
    status: "offline",
    age: "28",
    avatar: "https://i.pravatar.cc/150?img=10",
    email: "megan.richards@example.com",
  },
  {
    id: 13,
    name: "Oliver Scott",
    role: "Agent",
    team: "Customer Service",
    status: "active",
    age: "37",
    avatar: "https://i.pravatar.cc/150?img=12",
    email: "oliver.scott@example.com",
  },
  {
    id: 14,
    name: "Grace Allen",
    role: "Agent",
    team: "Customer Service",
    status: "active",
    age: "30",
    avatar: "https://i.pravatar.cc/150?img=16",
    email: "grace.allen@example.com",
  },
  {
    id: 15,
    name: "Noah Carter",
    role: "Agent",
    team: "Customer Service",
    status: "offline",
    age: "31",
    avatar: "https://i.pravatar.cc/150?img=15",
    email: "noah.carter@example.com",
  },
  {
    id: 16,
    name: "Ava Perez",
    role: "Agent",
    team: "Customer Service",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?img=20",
    email: "ava.perez@example.com",
  },
  {
    id: 17,
    name: "Liam Johnson",
    role: "Agent",
    team: "Customer Service",
    status: "active",
    age: "28",
    avatar: "https://i.pravatar.cc/150?img=33",
    email: "liam.johnson@example.com",
  },
  {
    id: 18,
    name: "Sophia Taylor",
    role: "Agent",
    team: "Customer Service",
    status: "active",
    age: "27",
    avatar: "https://i.pravatar.cc/150?img=29",
    email: "sophia.taylor@example.com",
  },
  {
    id: 19,
    name: "Lucas Harris",
    role: "Agent",
    team: "Customer Service",
    status: "offline",
    age: "32",
    avatar: "https://i.pravatar.cc/150?img=50",
    email: "lucas.harris@example.com",
  },
  {
    id: 20,
    name: "Mia Robinson",
    role: "Agent",
    team: "Customer Service",
    status: "active",
    age: "26",
    avatar: "https://i.pravatar.cc/150?img=45",
    email: "mia.robinson@example.com",
  },
];

export {columns, users, statusOptions};
