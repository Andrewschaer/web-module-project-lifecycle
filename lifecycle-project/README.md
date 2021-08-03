# Module Project: Component Lifecycle Methods - React Github User Card

This project allows you to practice the concepts and techniques learned in this module and apply them in a concrete project. This module explored lifecycle methods in class components. In your project you will demonstrate proficiency of these concepts by recreating the Github User Card project, but as a React application this time.

## Introduction

**Read these instructions carefully. Understand exactly what is expected _before_ starting this project.**

### Commits

Commit your code regularly and meaningfully. This helps you and any collaborators in case you ever need to return to old code for any number of reasons.

## Instructions

### Task 1: Project Set Up

- [X] Create a forked copy of this project.
- [X] Clone your OWN version of the repository in your terminal
- [X] Use CRA to create a new React app in this repository
- [X] Create a new branch: git checkout -b `<firstName-lastName>`.
- [X] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [X] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project.

- [X] Submit a Pull-Request to merge <firstName-lastName> Branch into main (student's Repository). **Please don't merge your own pull request**
- [X] From the home page of your repo, make sure you have your branch selected
- [X] Copy the URL and paste it into Canvas

### Task 2: Minimum Viable Product

- [ ] Fetch data from the Github API for a Github user
- [ ] Display the user data on the DOM
- [ ] Use class components when you need to hold any state or use any lifecycle methods

#### Planning your App

This is an important step for any project you will be working on. You will want to plan out what data you will need, which component will manage that data via state, what functions you may need to update that state, and where you need to pass the data to render it to the DOM. I love to use pen and paper or a whiteboard for this. The visuals can help a lot when you're deep into your code. After I finish that, I will write out a list of steps that I think it will take to build the app. This gives me a starting point, and direction as I proceed. This list always changes a bit as you are building, but it should give you a good flow and some good anchor points.

Also, since you have used the Github API before, you know some of the gotchas. Make sure to plan and watch for those.

When you have those completed, you're ready to start coding!

#### Fetch the User Data

- When your component mounts, send a GET request to the following URL (replacing the placeholder with your Github name):
  - https://api.github.com/users/<your name>
- After you fetch your data, set it to state

#### Display the User Data

- Pass the data to the component that will be displaying it
- Build out a user card using the data that the Github API returns to you
  - You may reference your old project for this, or you may wish to build this from scratch yourself

#### Fetch the User's Followers

- When your component mounts, you will also fetch the user's followers using this endpoint:
  https://api.github.com/users/< Your github name >/followers
- Set that data to state as well, and display the data in your app

#### Style the User Card

- Now it's time to style up your app
- You are free to choose how you style your app, but make it look as presentable as you can
- Try something new here. Maybe that's a new CSS technique you haven't really practiced yet. Maybe it's using a styling library you haven't tried. Push yourself to get better in this area.

#### Project Retrospective

Now that you have completed the MVP, I want you to think about the process it took you to get here. Is there anything you wish you had planned better? Anything you would do differently? Now take a minute think about how you would accomplish these same objectives with function components and hooks. You have experience with both formats now, so you can form opinions, but more importantly, you can back up those opinions. That's a really exciting level to be at! If you have time now, go ahead and move onto the stretch problems.

### Task 3: Stretch Problems

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

- Build a form that allows you to search for different Github users. When the form is submitted, use `componentDidUpdate` to fetch the data for the user you typed in. Set that new user's data to state to trigger the component to rerender and display your new user. Don't forget to fetch their followers as well.

- Look into adding your GitHub contribution graph. There are a number of different ways of doing this, this Stack Overflow discussion will get you started: https://stackoverflow.com/questions/34516592/embed-github-contributions-graph-in-website

## Submission Format

- [X] Submit a Pull-Request to merge <firstName-lastName> Branch into `main` (student's Repository). **Please don't merge your own pull request**
- [X] From the home page of your repo, make sure you have your branch selected
- [X] Copy the URL and paste it into Canvas to submit your project

********************
<!-- OLD INSTRUCTIONS FOR GITHUB USER CARD PROJECT BELOW -->
# Github User Cards

In this project we are going to be accessing the GitHub API and building a social card based on the data we get back. The goal is to create a component based on the data we get when we send a GET request to the GitHub API (requesting your own data at first). The CSS and the base HTML is already done for you, you simply need to create the component function and connect the pieces.

## Need to know

* Adding dependencies to a project:
  * Via script element
  * Using npm
* JavaScript:
  * Creating DOM components with Javascript Functions
  * Utilizing 3rd party libraries (Axios)
  * Promises, .then & .catch
  * HTTP GET requests
  * Array Methods
* DOM
  * Element selection
  * Basic DOM manipulation
  * Events and event listeners

### Axios Setup

#### Option 1 (adding Axios via script element)

* [ ] Include the script element linking the `axios` library in your HTML.
* [ ] If you do not remember the code you can find it [here](https://github.com/axios/axios).

#### Option 2 (installing Axios with npm)

* [X] Navigate to the root of the project with your command line.
* [X] Run `npm install axios` to download the dependency (it will be added to the `package.json` file).
* [X] At the top of the `GitHubCard/index.js` file, type `import axios from 'axios';`

### Part 1: Requesting Data from the GitHub API

* [X] Follow the instructions found in the `GitHubCard/index.js` file to request data from the GitHub API.

### Part 2: Create the component function

* Once you are receiving data from the GitHub API, take some time to study the data and the information it is giving you. You will create the HTML template you see in the GitHubCard/index.js file and plugging in the dynamic data you are getting from the GitHub API.
* Once you complete the component, create a component based on your profile and add it to the DOM.

### Part 3: Your Friends

* After you have successfully added your own card to the DOM, we will get a list of your followers and programmatically add cards for them as well. Follow the instructions in GitHubCard/index.js.

<!-- GITHUB USER CARD INDEX.JS REFERENCE BELOW -->
import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

//   const sample = {
//     "login": "Andrewschaer",
//     "id": 24277559,
//     "node_id": "MDQ6VXNlcjI0Mjc3NTU5",
//     "avatar_url": "https://avatars.githubusercontent.com/u/24277559?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/Andrewschaer",
//     "html_url": "https://github.com/Andrewschaer",
//     "followers_url": "https://api.github.com/users/Andrewschaer/followers",
//     "following_url": "https://api.github.com/users/Andrewschaer/following{/other_user}",
//     "gists_url": "https://api.github.com/users/Andrewschaer/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/Andrewschaer/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/Andrewschaer/subscriptions",
//     "organizations_url": "https://api.github.com/users/Andrewschaer/orgs",
//     "repos_url": "https://api.github.com/users/Andrewschaer/repos",
//     "events_url": "https://api.github.com/users/Andrewschaer/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/Andrewschaer/received_events",
//     "type": "User",
//     "site_admin": false,
//     "name": null,
//     "company": null,
//     "blog": "",
//     "location": null,
//     "email": null,
//     "hireable": null,
//     "bio": null,
//     "twitter_username": null,
//     "public_repos": 24,
//     "public_gists": 0,
//     "followers": 0,
//     "following": 0,
//     "created_at": "2016-11-30T18:10:01Z",
//     "updated_at": "2021-06-17T19:09:56Z"
// }

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
const cards = document.querySelector('.cards')

axios.get(`https://api.github.com/users/andrewschaer`)
  .then(response => {
    const gitHubCard = gitHubCardMaker(response.data)
    cards.appendChild(gitHubCard)
  })
  .catch(err => console.group(err.message))
  .finally(() => console.group('done'))

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach( item => {
  axios.get(`https://api.github.com/users/${item}`)
  .then(response => {
    const gitHubCard = gitHubCardMaker(response.data)
    cards.appendChild(gitHubCard)
  })
  .catch(err => console.group(err.message))
  .finally(() => console.group('done'))
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function gitHubCardMaker (singleObject) {
  // instantiating the elements
  const gitHubCard = document.createElement('div')
  const cardImage = document.createElement('img')
  const cardInfo = document.createElement('div')
  const cardName = document.createElement('h3')
  const cardUserName = document.createElement('p')
  const cardLocation = document.createElement('p')
  const cardProfile = document.createElement('p')
  const cardLinkProfile = document.createElement('a')
  const cardFollowers = document.createElement('p')
  const cardFollowing = document.createElement('p')
  const cardBio = document.createElement('p')
  // setting class names, attributes and text
  gitHubCard.classList.add('card')
  cardImage.src = singleObject.avatar_url
  cardInfo.classList.add('card-info')
  cardName.classList.add('name')
  cardName.textContent = `${singleObject.name}`
  cardUserName.classList.add('username')
  cardUserName.textContent = `${singleObject.login}`
  cardLocation.textContent = `Location: ${singleObject.location}`
  cardProfile.textContent = `Profile: `
  cardLinkProfile.href = singleObject.avatar_url
  cardFollowers.textContent = `Followers: ${singleObject.followers}`
  cardFollowing.textContent = `Following: ${singleObject.following}`
  cardBio.textContent = `Bio: ${singleObject.bio}`
  // creating the hierarchy
  gitHubCard.appendChild(cardImage)
  gitHubCard.appendChild(cardInfo)
  cardInfo.appendChild(cardName)
  cardInfo.appendChild(cardUserName)
  cardInfo.appendChild(cardLocation)
  cardInfo.appendChild(cardProfile)
  cardProfile.appendChild(cardLinkProfile)
  cardInfo.appendChild(cardFollowers)
  cardInfo.appendChild(cardFollowing)
  cardInfo.appendChild(cardBio)
  // never forget to return!
  return gitHubCard
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/