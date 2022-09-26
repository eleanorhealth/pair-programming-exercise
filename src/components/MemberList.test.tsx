import React from "react";
import { render, screen } from "@testing-library/react";

import MOCK_MEMBERS from "mocks/members";
import MemberList from "./MemberList";

describe("MemberList component", () => {
  describe("empty list", () => {
    beforeEach(() => {
      render(<MemberList members={[]} />);
    });
    it("renders empty message for empty list", () => {
      screen.getByText("No member records loaded.");
    });
  });

  describe("populated list", () => {
    beforeEach(() => {
      render(<MemberList members={MOCK_MEMBERS} />);
    });
    it("renders the names of members", () => {
      MOCK_MEMBERS.forEach(({ name: { first, last } }) => {
        screen.getByText(`${first} ${last}`);
      });
    });
    it.todo("displays an unread message count");
  });
});
