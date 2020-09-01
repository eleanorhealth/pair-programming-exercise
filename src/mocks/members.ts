import { v4 as uuidv4 } from "uuid";

import { IMember } from "store/reducers/clinical/types";

const MOCK_MEMBERS: IMember[] = [
  {
    name: { first: "Isaiah", last: "Williams" },
    phone: "(115) 234-2625",
    messages: [
      {
        id: uuidv4(),
        read: false,
      },
    ],
  },
  {
    name: { first: "Beth", last: "Zell" },
    phone: "(555) 626-1651",
    messages: [],
  },
  {
    name: { first: "Alana", last: "Zell" },
    phone: "(555) 626-1651",
    messages: [],
  },
  {
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
  },
];

export default MOCK_MEMBERS;
