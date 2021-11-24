import { bethZell, calvinHobbes, isaiahWilliams } from "mocks/members";
import { countUnreadMessages } from "./countUnreadMessages";

describe("countUnreadMessages", () => {
  it("counts read: false", () => {
    expect(countUnreadMessages(isaiahWilliams.messages)).toEqual(1);
  });
  it("does not count read: true", () => {
    expect(countUnreadMessages(calvinHobbes.messages)).toEqual(2);
  });
  it("returns zero when no messages", () => {
    expect(countUnreadMessages(bethZell.messages)).toEqual(0);
  });
});
