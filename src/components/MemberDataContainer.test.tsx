import React from "react";
import { render, RenderResult } from "@testing-library/react";

import MOCK_MEMBERS from "mocks/members";
import { BaseWrapper } from "test-utils";
import MemberDataContainer from "./MemberDataContainer";

jest.mock("react-query", () => ({
  __esModule: true,
  useQuery: () => ({
    data: MOCK_MEMBERS,
    isLoading: false,
    isError: false,
    isFetched: true,
  }),
}));

describe("MemberDataContainer", () => {
  let subject: RenderResult;
  beforeEach(() => {
    subject = render(<MemberDataContainer />, { wrapper: BaseWrapper });
  });

  it("renders the names of members", () => {
    const subjectText = subject.baseElement.textContent;
    expect(subjectText).toContain("Calvin Hobbes");
    expect(subjectText).toContain("Isaiah Williams");
    expect(subjectText).toContain("Alana Zell");
    expect(subjectText).toContain("Beth Zell");
  });
  it.skip("renders unread message count tags", () => {
    // TODO
  });
  it.skip("renders member avatar images", () => {
    // TODO
  });
});
