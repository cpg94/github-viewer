const activityStub = {
    "id": 24234,
    "type": "SomeDaftEvent",
    "actor": {
      "id": 23138767,
      "login": "jjohnson1994",
      "display_login": "jjohnson1994",
      "gravatar_id": "",
      "url": "https://api.github.com/users/jjohnson1994",
      "avatar_url": "https://avatars.githubusercontent.com/u/23138767?"
    },
    "repo": {
      "id": 94232778,
      "name": "TablePlus/TablePlus",
      "url": "https://api.github.com/repos/TablePlus/TablePlus"
    },
    "payload": {
      "action": "opened",
      "issue": {
        "url": "https://api.github.com/repos/TablePlus/TablePlus/issues/1582",
        "repository_url": "https://api.github.com/repos/TablePlus/TablePlus",
        "labels_url": "https://api.github.com/repos/TablePlus/TablePlus/issues/1582/labels{/name}",
        "comments_url": "https://api.github.com/repos/TablePlus/TablePlus/issues/1582/comments",
        "events_url": "https://api.github.com/repos/TablePlus/TablePlus/issues/1582/events",
        "html_url": "https://github.com/TablePlus/TablePlus/issues/1582",
        "id": 529977555,
        "node_id": "MDU6SXNzdWU1Mjk5Nzc1NTU=",
        "number": 1582,
        "title": "Cannot Split SQL Pane Horizontally",
        "user": {
          "login": "jjohnson1994",
          "id": 23138767,
          "node_id": "MDQ6VXNlcjIzMTM4NzY3",
          "avatar_url": "https://avatars3.githubusercontent.com/u/23138767?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/jjohnson1994",
          "html_url": "https://github.com/jjohnson1994",
          "followers_url": "https://api.github.com/users/jjohnson1994/followers",
          "following_url": "https://api.github.com/users/jjohnson1994/following{/other_user}",
          "gists_url": "https://api.github.com/users/jjohnson1994/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/jjohnson1994/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/jjohnson1994/subscriptions",
          "organizations_url": "https://api.github.com/users/jjohnson1994/orgs",
          "repos_url": "https://api.github.com/users/jjohnson1994/repos",
          "events_url": "https://api.github.com/users/jjohnson1994/events{/privacy}",
          "received_events_url": "https://api.github.com/users/jjohnson1994/received_events",
          "type": "User",
          "site_admin": false
        },
        "labels": [],
        "state": "open",
        "locked": false,
        "assignee": null,
        "assignees": [],
        "milestone": null,
        "comments": 0,
        "created_at": "2019-11-28T15:34:52Z",
        "updated_at": "2019-11-28T15:34:52Z",
        "closed_at": null,
        "author_association": "NONE",
        "body": "1. PostgreSQL 12\r\n\r\n2. 2.11.2\r\n\r\n3.1 Connect to DB\r\n3.2 Click 'Open SQL Query'\r\n3.3 Right-click and select 'Split pane horizontally'\r\n\r\nThe pane doesn't split, instead any formatting is removed and the query is put onto one line. Using the keyboard short cut does still split the pane.\r\n"
      }
    },
    "public": true,
    "created_at": "2019-11-28T15:34:52Z",
    "org": {
      "id": 29408238,
      "login": "TablePlus",
      "gravatar_id": "",
      "url": "https://api.github.com/orgs/TablePlus",
      "avatar_url": "https://avatars.githubusercontent.com/u/29408238?"
    }
  }

module.exports=activityStub