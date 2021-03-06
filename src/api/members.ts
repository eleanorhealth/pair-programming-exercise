/* eslint-disable import/prefer-default-export */
import { COUNTRIES } from "app-constants";
import sortMembers from "helpers/sortMembers";
import { Member } from "types/member";
import mockMessages from "../mocks/mockMessages";

export async function getMembers(): Promise<Member[]> {
  const natParam = Object.keys(COUNTRIES).join(",");
  const response = await fetch(
    `https://randomuser.me/api/?results=100&exc=login&nat=${natParam}`
  );
  const body = await response.json();
  if (body) {
    const { results: members } = body;
    const membersWithMockMessages = members.map(
      (member: any) =>
        ({
          ...member,
          // This field is mocked as random data.
          messages: mockMessages(),
        } as Member)
    );
    return sortMembers(membersWithMockMessages);
  }
  return [];
}
