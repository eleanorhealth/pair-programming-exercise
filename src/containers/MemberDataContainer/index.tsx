import React from "react";
import { Button, Divider, Row } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

import MemberList from "components/MemberList";

import { isRequestPending } from "helpers/request";
import { selectGETStatus } from "store/reducers/clinical/selectors";
import getMembers from "store/reducers/clinical/thunks/getMembers";
import { IMember } from "store/reducers/clinical/types";
import { StyledCard } from "./styles";

export default function MemberDataContainer() {
  const dispatch = useDispatch();
  const status = useSelector(selectGETStatus);
  const members: IMember[] = []; // FIXME

  return (
    <StyledCard>
      <Row>
        <Button
          icon={<DownloadOutlined />}
          loading={isRequestPending(status)}
          onClick={() => dispatch(getMembers())}
          type="primary"
        >
          Fetch Member Data
        </Button>
      </Row>
      <Divider />
      <MemberList members={members} />
    </StyledCard>
  );
}
