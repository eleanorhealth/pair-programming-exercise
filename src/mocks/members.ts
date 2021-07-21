import { v4 as uuidv4 } from "uuid";

import { Member } from "types/member";

export const isaiahWilliams = {
  id: "aafc08f8-7ecd-48c2-99af-6c45698ac80f",
  name: { first: "Isaiah", last: "Williams" },
  phone: "(115) 234-2625",
  messages: [
    {
      id: uuidv4(),
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
      id: uuidv4(),
      read: false,
    },
    {
      id: uuidv4(),
      read: true,
    },
    {
      id: uuidv4(),
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
