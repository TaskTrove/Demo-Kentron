import React from "react";

const columns = [
    { name: "ID", uid: "id", sortable: true },
    { name: "NAME", uid: "name", sortable: true },
    { name: "SIZE", uid: "size", sortable: true },
    { name: "GUEST ACCESS", uid: "gaccess" },
    { name: "STATUS", uid: "status", sortable: true },
    { name: "CREATED DATE", uid: "cdate" },
    { name: "", uid: "actions" },
];

const statusOptions = [
    { name: "Active", uid: "active" },
    { name: "Paused", uid: "paused" },
    { name: "Vacation", uid: "vacation" },
];

const users = [
    {
        "id": 1,
        "name": "slack-001",
        "size": "12 mb",
        "gaccess": "Yes",
        "status": "active",
        "cdate": "29 Jan 2022"
    },
    {
        "id": 2,
        "name": "google-002",
        "size": "17 mb",
        "gaccess": "No",
        "status": "active",
        "cdate": "15 Sep 2021"
    },
    {
        "id": 3,
        "name": "drive-003",
        "size": "8 mb",
        "gaccess": "Yes",
        "status": "inactive",
        "cdate": "10 Mar 2023"
    },
    {
        "id": 4,
        "name": "slack-004",
        "size": "25 mb",
        "gaccess": "No",
        "status": "active",
        "cdate": "18 Jul 2022"
    },
    {
        "id": 5,
        "name": "google-005",
        "size": "10 mb",
        "gaccess": "Yes",
        "status": "active",
        "cdate": "05 Nov 2021"
    },
    {
        "id": 6,
        "name": "drive-006",
        "size": "15 mb",
        "gaccess": "No",
        "status": "inactive",
        "cdate": "23 Feb 2023"
    },
    {
        "id": 7,
        "name": "slack-007",
        "size": "9 mb",
        "gaccess": "Yes",
        "status": "active",
        "cdate": "12 Apr 2022"
    },
    {
        "id": 8,
        "name": "google-008",
        "size": "20 mb",
        "gaccess": "No",
        "status": "active",
        "cdate": "29 Aug 2021"
    },
    {
        "id": 9,
        "name": "drive-009",
        "size": "13 mb",
        "gaccess": "Yes",
        "status": "inactive",
        "cdate": "17 Jun 2023"
    },
    {
        "id": 10,
        "name": "slack-010",
        "size": "18 mb",
        "gaccess": "No",
        "status": "active",
        "cdate": "02 Dec 2022"
    }
];

export { columns, users, statusOptions };
