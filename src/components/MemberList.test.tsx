import React from "react";
import { render, RenderResult } from "@testing-library/react";

import { IMember } from "store/reducers/clinical/types";
import MemberNamesList from "./MemberList";

describe("MemberNamesList component", () => {
  let subject: RenderResult;

  describe("empty list", () => {
    beforeEach(() => {
      subject = render(<MemberNamesList members={[]} />);
    });
    it("renders empty message for empty list", () => {
      expect(
        subject.getByText("No member records loaded.")
      ).toBeInTheDocument();
    });
  });

  describe("populated list", () => {
    const MOCK_MEMBERS: IMember[] = [
      {
        name: { first: "Isaiah", last: "Williams" },
        phone: "(115) 234-2625",
        unreadMessageCount: 1,
      },
      {
        name: { first: "Alana", last: "Zell" },
        phone: "(555) 626-1651",
        unreadMessageCount: 0,
      },
      {
        name: { first: "Calvin", last: "Hobbes" },
        phone: "(800) 537-2625",
        unreadMessageCount: 3,
      },
    ];

    beforeEach(() => {
      subject = render(<MemberNamesList members={MOCK_MEMBERS} />);
    });
    it.skip("renders the names of members", () => {
      // TODO
    });
    it.skip("sorts names alphabetically by lastName, firstName", () => {
      // TODO
    });
    it.skip("displays an unread message count", () => {
      // TODO
    });
    it.skip("filter option to show only members with unread msgs", () => {
      // TODO
    });
  });
});
