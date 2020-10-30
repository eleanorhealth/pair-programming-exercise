import { range } from "ramda";
import { v4 as uuidv4 } from "uuid";

import { Message } from "types/member";

export default function mockMessages(): Message[] {
  const count = Math.floor(Math.random() * 6);
  return range(0, count).map(() => ({
    id: uuidv4(),
    read: Math.random() > 0.75,
  }));
}
