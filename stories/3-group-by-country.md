# 3) Group by Country

## User Story

> As an Eleanor Health clinical staff person,

> When I am viewing my Member List,

> I want to be able to see members grouped by country,

> So that I can connect them with local group therapy sessions.

## Existing Behavior

Member records are pulled from an API (https://randomuser.me).

Story #1 rendered the sorted member names in `MemberDataContainer`.

## Feature Requirements

1. Group the members by the country where they live. This is based on the `location.country` field on the record.

- _Note: The `Member` type is incomplete and needs this field added._

2. Render each group in a separate list, below a header displaying the country name.
