# 1) Count Unread Messages

## User Story

> As an Eleanor Health clinical staff person,

> When I am viewing my Member List,

> I want to be able to see if there are messages I haven't read,

> So that I can keep in consistent contact.

## Existing Behavior

Member records are pulled from an API (https://randomuser.me).

Field `messages` on `Member` contains a list of messages, each with a boolean `read` flag.

## Feature Requirements

1. Implement logic in `countUnreadMessages` so that it returns a number indicating how many messages are unread.
2. Ensure the corresponding `countUnreadMessages` tests pass.   
No UI change is necessary for this story.
