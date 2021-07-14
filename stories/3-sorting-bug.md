# 3) BUG: Sorting

## Existing Behavior

- Member records are pulled from an API (https://randomuser.me). They are returned unsorted.
- `helpers/sortMembers` sorts by last name ascending (within the api method).

## Feature Requirements

1. When displaying the list of members, they should be sorted alphabetically A-Z by last name then first name. 
   * eg "Victor Melo" then "Abigail Miller" then "Brandon Miller". _Victor_ sorts first because _Melo_ sorts before _Miller_, and then _Abigail_ sorts before _Brandon_ since they have the same last name _Miller_.
2. Update [`sortMembers.ts`](../src/helpers/sortMembers.ts) to implement this.
