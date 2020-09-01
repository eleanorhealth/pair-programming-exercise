import React from "react";
import { render, RenderResult } from "@testing-library/react";

import MOCK_MEMBERS from "mocks/members";
import MemberList from "./MemberList";

describe("MemberList component", () => {
  let subject: RenderResult;

  describe("empty list", () => {
    beforeEach(() => {
      subject = render(<MemberList members={[]} />);
    });
    it("renders empty message for empty list", () => {
      expect(
        subject.getByText("No member records loaded.")
      ).toBeInTheDocument();
    });
  });

  describe("populated list", () => {
    beforeEach(() => {
      subject = render(<MemberList members={MOCK_MEMBERS} />);
    });
    it("renders the names of members", () => {
      MOCK_MEMBERS.forEach(({ name: { first, last } }) => {
        expect(subject.getByText(`${first} ${last}`)).toBeInTheDocument();
      });
    });
    it.skip("displays an unread message count", () => {
      // TODO
    });
  });
});
