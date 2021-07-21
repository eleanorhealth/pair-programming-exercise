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
  it("sorts by last name then first name, ascending", () => {
    const sorted = sortMembers([
      bethZell,
      alanaZell,
      calvinHobbes,
      isaiahWilliams,
    ]);
    expect(sorted).toEqual([calvinHobbes, isaiahWilliams, alanaZell, bethZell]);
  });
});
