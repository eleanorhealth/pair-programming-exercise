import { Member } from "types/member";

export const isaiahWilliams = {
  id: "aafc08f8-7ecd-48c2-99af-6c45698ac80f",
  name: { first: "Isaiah", last: "Williams" },
  phone: "(115) 234-2625",
  messages: [
    {
      id: "b0fc5dc8-2ff6-4a92-b91f-88ed396a791b",
      read: false,
    },
  ],
};
export const bethZell = {
  id: "996afea5-f339-4c53-babd-a368a65a6fd2",
  name: { first: "Beth", last: "Zell" },
  phone: "(555) 626-1651",
  messages: [],
};
export const alanaZell = {
  id: "5afb6b8b-7d39-40b3-8563-061a990042c3",
  name: { first: "Alana", last: "Zell" },
  phone: "(555) 626-1651",
  messages: [],
};
export const calvinHobbes = {
  id: "8a5c2a82-252f-4b8e-b130-98f8478a92c1",
  name: { first: "Calvin", last: "Hobbes" },
  phone: "(800) 537-2625",
  messages: [
    {
      id: "37462ed6-bfa0-4b1b-9a1d-c6c3575b1656",
      read: false,
    },
    {
      id: "e1e2b8fd-4863-4b9e-b506-2ed2535d7b1b",
      read: true,
    },
    {
      id: "f1624a37-8429-4be4-be23-0b078b87fa51",
      read: false,
    },
  ],
};

const MOCK_MEMBERS: Member[] = [
  isaiahWilliams,
  bethZell,
  alanaZell,
  calvinHobbes,
];

export default MOCK_MEMBERS;
