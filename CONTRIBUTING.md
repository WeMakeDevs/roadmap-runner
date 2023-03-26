# Contributing

Thank you for considering and taking the time to contribute! Product focuses on 100% quality education free for all.

The following are guidelines for contributing to this project.

## Prerequisites:
Before starting, you need to install the following on your computer.
- Node.js
- Git
- npm
- MongoDB


## Installation

1. Fork the repo
2. Clone the repository

### Firebase setup:
**Client:**
- Create a new Firebase project by logging in to the [Firebase console](https://console.firebase.google.com/) and clicking the "Add project" button.
- Enter a name for your project and continue with the setup process.
- Add a web app to your project by clicking the "Add app" button and selecting "Web".
- Give your web app a name and register it.
- Copy the Firebase configuration object from the Firebase console (under "Project settings" > "General" > "Your apps" > "Firebase SDK snippet").
- Save the `firebaseConfig` object's properties as given in the `/client/.env.example` file

**Server:**
- In the Firebase console, open Settings > Service Accounts.
- Click **Generate New Private Key**, then confirm by clicking **Generate Key**.
- Securely store the JSON file containing the key.
- Rename the JSON file as `serviceAccountKey.json` and paste it in `/server/config/` folder

### MongoDB setup:
- Install MongoDB on your machine by following the instructions provided in the official [MongoDB documentation](https://docs.mongodb.com/manual/installation/).
- In `/server/.env` store `DB_URL` as `mongodb://localhost:27017/any-db-name`

### Server:
First install the dependencies, and start the server in dev mode:
Note: cd into the server folder first
```
npm ci
npm run dev

```

### Client:
First install the dependencies and then start the client:
Note: first start the server & cd into the client folder
```
npm ci
npm run start
```


## How to Report Bugs

Please open [a new issue in the appropriate GitHub repository][new-issue] with steps to reproduce the problem you're experiencing.

Be sure to include as much information including screenshots, text output, and both your expected and actual results.

## How to Request Enhancements

First, please refer to the applicable [GitHub repository][github-repo] and search [the repository's GitHub issues][issues-list] to make sure your idea has not been (or is not still) considered.

Then, please [create a new issue in the GitHub repository][new-issue] describing your enhancement.

Be sure to include as much detail as possible including step-by-step descriptions, specific examples, screenshots or mockups, and reasoning for why the enhancement might be worthwhile.

[new-issue]: https://github.com/wemakedevs/roadmap-runner/issues/new/choose
[github-repo]: https://github.com/wemakedevs/roadmap-runner/
[issues-list]: https://github.com/wemakedevs/roadmap-runner/issues
