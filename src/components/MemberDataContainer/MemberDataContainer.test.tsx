import React from "react";
import { render, RenderResult } from "@testing-library/react";

import MOCK_MEMBERS from "mocks/members";
import { BaseWrapper } from "test-utils";
import MemberDataContainer from ".";

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

  it.skip("renders the sorted names of members", () => {
    const subjectText = subject.baseElement.textContent;
    expect(subjectText).toContain(
      "Calvin HobbesIsaiah WilliamsAlana ZellBeth Zell"
    );
  });
  it.skip("renders unread message count tags", () => {
    // TODO
  });
  it.skip("renders member country groups", () => {
    // TODO
  });
});
