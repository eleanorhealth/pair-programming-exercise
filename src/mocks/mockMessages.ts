import { range } from "ramda";
import { v4 as uuidv4 } from "uuid";

import { IMessage } from "store/reducers/clinical/types";

export default function mockMessages(): IMessage[] {
  const count = Math.floor(Math.random() * 6);
  return range(0, count).map(() => ({
    id: uuidv4(),
    read: Math.random() > 0.75,
  }));
}
