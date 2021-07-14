# 3) BUG: Sorting

## Existing Behavior

- Member records are pulled from an API (https://randomuser.me). They are returned unsorted.
- `helpers/sortMembers` sorts by last name ascending (within the api method).

## Feature Requirements

1. When displaying the list of members, they should be sorted alphabetically ascending by last name then first name. (eg "Victor Melo" then "Abigail Miller" then "Brandon Miller")
2. Update [`sortMembers.ts`](../src/helpers/sortMembers.ts) to implement this.
