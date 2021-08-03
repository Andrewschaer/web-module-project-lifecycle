import React from 'react';
import CardsContainer from './CardsContainer.js'
import './App.css';

class App extends React.Component {
  state = {
    userData:[
      {"login": "Andrewschaer",
        "id": 24277559,
        "node_id": "MDQ6VXNlcjI0Mjc3NTU5",
        "avatar_url": "https://avatars.githubusercontent.com/u/24277559?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Andrewschaer",
        "html_url": "https://github.com/Andrewschaer",
        "followers_url": "https://api.github.com/users/Andrewschaer/followers",
        "following_url": "https://api.github.com/users/Andrewschaer/following{/other_user}",
        "gists_url": "https://api.github.com/users/Andrewschaer/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Andrewschaer/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Andrewschaer/subscriptions",
        "organizations_url": "https://api.github.com/users/Andrewschaer/orgs",
        "repos_url": "https://api.github.com/users/Andrewschaer/repos",
        "events_url": "https://api.github.com/users/Andrewschaer/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Andrewschaer/received_events",
        "type": "User",
        "site_admin": false,
        "name": null,
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 24,
        "public_gists": 0,
        "followers": 0,
        "following": 0,
        "created_at": "2016-11-30T18:10:01Z",
        "updated_at": "2021-06-17T19:09:56Z"
      },
      {"login": "tetondan",
        "id": 8883343,
        "node_id": "MDQ6VXNlcjg4ODMzNDM=",
        "avatar_url": "https://avatars.githubusercontent.com/u/8883343?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/tetondan",
        "html_url": "https://github.com/tetondan",
        "followers_url": "https://api.github.com/users/tetondan/followers",
        "following_url": "https://api.github.com/users/tetondan/following{/other_user}",
        "gists_url": "https://api.github.com/users/tetondan/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/tetondan/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/tetondan/subscriptions",
        "organizations_url": "https://api.github.com/users/tetondan/orgs",
        "repos_url": "https://api.github.com/users/tetondan/repos",
        "events_url": "https://api.github.com/users/tetondan/events{/privacy}",
        "received_events_url": "https://api.github.com/users/tetondan/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Daniel Frehner",
        "company": "@replit ",
        "blog": "http://www.danielfrehner.com",
        "location": "Jackson Hole, Wy",
        "email": null,
        "hireable": null,
        "bio": "Engineer @ Repl.it\r\n",
        "twitter_username": null,
        "public_repos": 64,
        "public_gists": 3,
        "followers": 176,
        "following": 8,
        "created_at": "2014-09-23T17:47:56Z",
        "updated_at": "2021-07-29T00:02:27Z"
      }
    ]
  }

  render() {
    return (
      <div>
        <h1>GITHUB USER INFO: POKEMON CARD EDITION</h1>
        <CardsContainer userData={this.state.userData}/>
      </div>
    );
  };
}

export default App;
