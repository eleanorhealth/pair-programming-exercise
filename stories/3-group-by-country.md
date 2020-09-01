# 3) Group by Country

## User Story

> As an Eleanor Health clinical staff person,

> When I am viewing my Member List,

> I want to be able to see members grouped by country,

> So that I can connect them with local group therapy sessions.

## Existing Behavior

Member records are pulled from an API (https://randomuser.me). They are stored in redux in the `clinical` leaf.

Feature #1 rendered the member names in the list.

## Feature Requirements

1. Group the members by the country where they live. This is based on the `location.country` field on the record.
2. The groups should be displayed in alphabetical order by country.
3. Each group should show a label of the country name.
