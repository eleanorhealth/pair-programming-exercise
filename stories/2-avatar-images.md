# 2) Avatar Images

## User Story

> As an Eleanor Health clinical staff person,

> When I am viewing my Member List,

> I want to be able to see each member's photo,

> So that I can recognize them during in-clinic visits.

## Existing Behavior

The member records pulled from the API already include picture data. Check the network response to determine the shape of the response body.

## Feature Requirements

1. In `MemberList`, render a Chakra [Avatar](https://chakra-ui.com/docs/media-and-icons/avatar) to the left of each member's name.
2. Update the styling so that the three elements line up into columns. The member name column should expand to fill space in the row, see design below.

![Member List](./memberList.png)
