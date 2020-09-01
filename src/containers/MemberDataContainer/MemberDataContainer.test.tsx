import React from "react";
import { Provider } from "react-redux";
import { render, RenderResult } from "@testing-library/react";

import MOCK_MEMBERS from "mocks/members";
import getMembers from "store/reducers/clinical/thunks/getMembers";
import { BaseWrapper, makeStore } from "test-utils";
import MemberDataContainer from ".";

describe("MemberDataContainer", () => {
  const store = makeStore();
  store.dispatch({
    type: getMembers.fulfilled.toString(),
    payload: MOCK_MEMBERS,
  });

  let subject: RenderResult;
  beforeEach(() => {
    subject = render(
      <Provider store={store}>
        <MemberDataContainer />
      </Provider>,
      { wrapper: BaseWrapper }
    );
  });

  it.skip("renders the sorted names of members", () => {
    const subjectText = subject.baseElement.textContent;
    expect(subjectText).toContain(
      "Calvin HobbesIsaiah WilliamsAlana ZellBeth Zell"
    );
  });
  it.skip("renders member country groups", () => {
    // TODO
  });
});
