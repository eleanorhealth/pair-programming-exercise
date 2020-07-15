/* eslint-disable import/prefer-default-export */
import { IMember } from "store/reducers/clinical/types";

// This is only a mock api implementation, representing a GET request to the backend.
export async function getMembers(): Promise<IMember[]> {
  const response = await fetch(
    "https://randomuser.me/api/?results=100&exc=login&nat=us,ca,au,br,es"
  );
  const body = await response.json();
  if (body) {
    const members = body.results;
    return members.map((member: any) => ({
      ...member,
      unreadMessageCount: Math.round(Math.random() * 4),
    }));
  }
  return [];
}
