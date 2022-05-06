import {
  alanaZell,
  bethZell,
  calvinHobbes,
  isaiahWilliams,
} from "mocks/members";
import sortMembersByName from "./sortMembersByName";

describe("sort members", () => {
  it("sorts by last name ascending", () => {
    const sorted = sortMembersByName([isaiahWilliams, alanaZell, calvinHobbes]);
    expect(sorted).toEqual([calvinHobbes, isaiahWilliams, alanaZell]);
  });
  it("sorts by last name then first name, ascending", () => {
    const sorted = sortMembersByName([
      bethZell,
      alanaZell,
      calvinHobbes,
      isaiahWilliams,
    ]);
    expect(sorted).toEqual([calvinHobbes, isaiahWilliams, alanaZell, bethZell]);
  });
});
