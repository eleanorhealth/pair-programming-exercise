# 1) Display Members

## User Story

> As an Eleanor Health clinical staff person,

> When I click "Member List" in Ops Hub,

> I want to be able to see my assigned member caseload,

> So that I can find the person I'm working with today.

## Existing Behavior

Member records are pulled from an API (https://randomuser.me). They are stored in redux in the `clinical` leaf.

The `MemberList` component can render an `IMember` record, showing first and last name.

## Feature Requirements

1. Member records should be selected from redux (in `MemberListContainer`)
2. They should be passed to `MemberList` to render in the container.
3. When displaying the list of Members, they should be sorted alphabetically ascending by last name then first name.
