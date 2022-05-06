/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Member } from "types/member";

const sortMembersByName = (members: Member[]): Member[] =>
  members.sort(
    (a, b) =>
      a.name.last.localeCompare(b.name.last, "en", {
        ignorePunctuation: true,
      }) ||
      a.name.first.localeCompare(b.name.first, "en", {
        ignorePunctuation: true,
      })
  );

export default sortMembersByName;
