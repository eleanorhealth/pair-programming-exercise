# 1) Display Members

## User Story

> As an Eleanor Health clinical staff person,

> When I click "Member List" in Ops Hub,

> I want to be able to see my assigned member caseload,

> So that I can find the person I'm working with today.

## Existing Behavior

- Member records are pulled from an API (https://randomuser.me). These are just mocked records, representing a staff person's caseload.
- They are fetched using `react-query`.
- The `MemberList` component receives an `Array<Member>` prop. It renders the first and last name for each member.

## Feature Requirements

1. When displaying the list of members, they should be sorted alphabetically ascending by last name then first name.
2. Update `sortMembers.ts` to implement this.

- Memoize the sorted list in `MemberDataContainer` so that sorting is not performed unnecessarily.
