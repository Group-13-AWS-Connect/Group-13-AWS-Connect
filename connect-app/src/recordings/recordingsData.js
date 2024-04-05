import React from "react";
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

const users = [
  {
    name: "Tony Reichert",
    id: "BW167930",
    date: "November 23, 2023",
    time: "17 Minutes",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    name: "Zoey Lang",
    id: "BW197910",
    date: "November 19, 2023",
    time: "14 Minutes",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    name: "Jane Fisher",
    id: "BW147840",
    date: "November 17, 2023",
    time: "15 Minutes",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  },
  {
    name: "William Howard",
    id: "BW128830",
    date: "November 17, 2023",
    time: "19 Minutes",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
  },
  {
    name: "Kristen Copper",
    id: "BW160231",
    date: "November 23, 2023",
    time: "12 Minutes",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
  },
  {
    name: "Brian Kim",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    id: "BW177241",
    date: "November 23, 2023",
    time: "18 Minutes",
  },
  {
    name: "Michael Hunt",
    id: "BW163220",
    date: "November 23, 2023",
    time: "17 Minutes",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29027007d",
  },
  {
    name: "Samantha Brooks",
    id: "BW182440",
    date: "November 23, 2023",
    time: "17 Minutes",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e27027008d",
  },
  {
    name: "Frank Harrison",
    id: "BW197250",
    date: "November 23, 2023",
    time: "17 Minutes",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    name: "Emma Adams",
    id: "BW194920",
    date: "November 23, 2023",
    time: "17 Minutes",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Brandon Stevens",
    id: "BW155120",
    date: "November 23, 2023",
    time: "17 Minutes",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    name: "Megan Richards",
    id: "BW193420",
    date: "November 23, 2023",
    time: "17 Minutes",
    avatar: "https://i.pravatar.cc/150?img=10",
  },
  {
    name: "Oliver Scott",
    id: "BW193350",
    date: "November 23, 2023",
    time: "17 Minutes",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Grace Allen",
    id: "BW172320",
    date: "November 23, 2023",
    time: "17 Minutes",
    avatar: "https://i.pravatar.cc/150?img=16",
  },
  {
    name: "Noah Carter",
    id: "BW197990",
    date: "November 23, 2023",
    time: "17 Minutes",
    avatar: "https://i.pravatar.cc/150?img=15",
  },
  {
    name: "Ava Perez",
    id: "BW136220",
    date: "November 23, 2023",
    time: "17 Minutes",
    avatar: "https://i.pravatar.cc/150?img=20",
  },
  {
    name: "Liam Johnson",
    id: "BW156220",
    date: "November 23, 2023",
    time: "17 Minutes",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
  {
    name: "Sophia Taylor",
    id: "BW163260",
    date: "November 23, 2023",
    time: "17 Minutes",
    avatar: "https://i.pravatar.cc/150?img=29",
  },
  {
    name: "Lucas Harris",
    id: "BW144260",
    date: "November 23, 2023",
    time: "17 Minutes",
    avatar: "https://i.pravatar.cc/150?img=50",
  },
  {
    name: "Mia Robinson",
    id: "BW188320",
    date: "November 23, 2023",
    time: "17 Minutes",
    avatar: "https://i.pravatar.cc/150?img=45",
  },
];

export {columns, users, statusOptions};
