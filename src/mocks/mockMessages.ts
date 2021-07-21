import { v4 as uuidv4 } from "uuid";

import { Message } from "types/member";

export default function mockMessages(): Message[] {
  const count = Math.floor(Math.random() * 6);
  return new Array(count).fill(undefined).map(() => ({
    id: uuidv4(),
    read: Math.random() > 0.75,
  }));
}
