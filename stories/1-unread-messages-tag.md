# 1) Unread Messages Tag

> As an Eleanor Health clinical staff person,

> When I am viewing my Member List,

> I want to be able to see if there are messages I haven't read,

> So that I can keep in consistent contact.

## Existing Behavior

Member records are pulled from an API (https://randomuser.me), and displayed in rows in the app.

Field `messages` on `Member` contains a list of messages, each with a boolean `read` flag.

`countUnreadMessages()` is implemented in the UnreadMessageTag component but isn't used yet.

## Feature Requirements

1. An `<UnreadMessageTag />` should display near each member name. This component already exists, but is not yet rendered anywhere.
2. Don't worry about styling for this story.
3. The tag should indicate the number of unread messages, example: "2 Unread Messages"
4. Users with zero unread messages should not have a tag.
5. Users with one unread message should have the word "Message" instead of "Messages."
