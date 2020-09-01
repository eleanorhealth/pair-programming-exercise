# 2) Unread Message Tag

## User Story

> As an Eleanor Health clinical staff person,

> When I click "Member List" in Ops Hub,

> I want to be able to see if there are messages I haven't read,

> So that I can keep in consistent contact.

## Existing Behavior

Member records are pulled from an API (https://randomuser.me). They are stored in redux in the `clinical` leaf.

Feature #1 rendered the member names in the list.

## Feature Requirements

1. An `<UnreadMessageTag />` should display next to member name.
2. The tag should indicate the number of unread messages.
   - Field `messages` on `IMember` contains a list of messages, each with a boolean `read` flag.
3. Users with zero unread messages should not have a tag.
