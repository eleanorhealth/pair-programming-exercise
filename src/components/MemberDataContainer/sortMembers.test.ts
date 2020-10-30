import MOCK_MEMBERS from "mocks/members";
import sortMembers from "./sortMembers";

describe("sort members", () => {
  it.skip("sorts by last name then first name, ascending", () => {
    const sorted = sortMembers(MOCK_MEMBERS);
    const firstNames = sorted.map(({ name: { first } }) => first);
    expect(firstNames).toEqual(["Calvin", "Isaiah", "Alana", "Beth"]);
  });
});
