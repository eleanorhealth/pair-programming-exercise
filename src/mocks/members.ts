import { v4 as uuidv4 } from "uuid";

import { Member } from "types/member";

export const isaiahWilliams = {
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
  name: { first: "Beth", last: "Zell" },
  phone: "(555) 626-1651",
  messages: [],
};
export const alanaZell = {
  name: { first: "Alana", last: "Zell" },
  phone: "(555) 626-1651",
  messages: [],
};
export const calvinHobbes = {
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
