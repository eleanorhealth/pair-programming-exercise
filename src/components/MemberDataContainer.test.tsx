import React from "react";
import { render, screen } from "@testing-library/react";

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
  beforeEach(() => {
    render(<MemberDataContainer />, { wrapper: BaseWrapper });
  });

  it("renders the names of members", () => {
    screen.getByText("Calvin Hobbes");
    screen.getByText("Isaiah Williams");
    screen.getByText("Alana Zell");
    screen.getByText("Beth Zell");
  });
  it.todo("renders unread message count tags");
  it.todo("renders member avatar images");
});
