# 2) Unread Messages Tag

## User Story

> As an Eleanor Health clinical staff person,

> When I am viewing my Member List,

> I want to be able to see if there are messages I haven't read,

> So that I can keep in consistent contact.

## Existing Behavior

Member records are pulled from an API (https://randomuser.me).

Story #1 implemented a `countUnreadMessages` function.

## Feature Requirements

1. An `<UnreadMessageTag />` should display to the right of each member name. This component is already written, but is not yet rendered anywhere.
2. The tag should indicate the number of unread messages.
3. Users with zero unread messages should not have a tag.
