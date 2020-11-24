import {
  alanaZell,
  bethZell,
  calvinHobbes,
  isaiahWilliams,
} from "mocks/members";
import sortMembers from "./sortMembers";

describe("sort members", () => {
  it("sorts by last name ascending", () => {
    const sorted = sortMembers([isaiahWilliams, alanaZell, calvinHobbes]);
    expect(sorted).toEqual([calvinHobbes, isaiahWilliams, alanaZell]);
  });
  it.skip("sorts by last name then first name, ascending", () => {
    // TODO - Sort function is buggy, does not sort by first name
    const sorted = sortMembers([
      bethZell,
      alanaZell,
      calvinHobbes,
      isaiahWilliams,
    ]);
    expect(sorted).toEqual([calvinHobbes, isaiahWilliams, alanaZell, bethZell]);
  });
});
