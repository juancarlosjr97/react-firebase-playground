# React Firebase Playground

This project is a guide on how to create a React Web App using Firebase as the backend and Codespaces as a fully configured dev environment in the cloud ready for development using the blank canvas provided by GitHub using Codespaces.

## Prerequisites

- [GitHub][1]
- [Visual Studio Code][2]
- [Firebase][3] and this requires a Google account to link to a Firebase project.

## Overview

The key objectives are outlined below:

- **Web App Development using React 18**: Leverage the capabilities of React 18 to construct a dynamic and sophisticated web application.
- **Firebase Deployment**: Employ Firebase Hosting and Cloud Firestore to facilitate the smooth deployment and management of the web application.
- **Automated Deployment with GitHub Actions**: Configure GitHub Actions to automate the deployment process, ensuring precision in updates for both the live environment and ephemeral environments dedicated to Pull Requests.
- **User Interaction Enhancement**: Integrate a real-time, on-click counter utilizing Firebase and Cloud Firestore, complemented by an optimal loading state for an enhanced user experience.

## Demo

This project demo is available on this [URL][4].

## Guide

### GitHub Project Setup

1. Create a new repository on GitHub with a `.gitignore` for `node`. See the guide on GitHub for instructions [here][5]
2. Open the repository using Codespaces. See the guide on GitHub for instructions [here][6]

After opening the codespaces environment on Visual Studio Code, it is ready for development.

### React Web App

This section will create a React app using [Create React App](https://create-react-app.dev/).

Create a new React app by typing the below command in the terminal of your Visual Studio code:

```bash
npx create-react-app . -y
```

The command above will create a new app ready to run and create a README with instructions on how to run the app.

> [!NOTE]
> Do not run `npm audit fix` or `npm audit fix --force` as this will change the default versions of the project to run the React app.
> If you are prompted to "Need to install the following packages: create-react-app@5.0.1", press "y" to proceed.  

After the `create-react-app` has finished, from the terminal, run:

```bash
npm run start
```

This will start the app on port 3000 and available for development.

> [!NOTE]
> On a network that permits port forwarding, it will launch a live version of the page using a development environment provided by GitHub. If restricted by the network, open the Codespace session using VS Code on the Desktop, then execute the same command. It should be running on the local environment, accessible via <http://localhost:3000> on port 3000.

### Firebase Project Setup

Create a new project on [Firebase][3] with the default configuration. See this guide for instructions [here][7].

Firebase offers multiple plans, and the free tier (Spark Plan) is sufficient to develop this project. For more information, read [here][8].

> [!NOTE]
> This project has been set up without analytics.

#### Firestore Database

Cloud Firestore is a flexible, scalable mobile, web, and server development database from Firebase and Google Cloud. Read more about it [here][9]

From the project overview page.

1. Click on Build and select `Firestore Database`, and then click on `Create database`
2. Select the location closer to the target users. As a best practice, you can choose a location close to the target users. For instance, for European target users, select a location in Europe.
3. In the secure rules leave the default selection `Start in production mode`. This database will allow `read` only to the database, and click on create.

After the database has been created, click on `Rules` and update the rule with the following rules:

```firebase
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read and write only to the "counter/global" document
    match /counter/global {
      allow read, write: if resource == null || resource.data.keys().hasAll(['data']);
    }
  }
}

```

Click on "Publish" to save the change. The above security rules allows reading and writing to the `counter/global` document in Cloud Firestore only if that document contains a field named `data`.

#### Hosting

Firebase Hosting provides fast and secure hosting for your web app, static and dynamic content, and microservices.

Click on Build and select `Hosting`, and then click on `Get started`

Follow the instructions to set up Firebase hosting

##### Install Firebase CLI

Select the checkbox for "Also show me the steps to add the Firebase JavaScript SDK to my web app".
Go to your Visual Studio terminal. If your app is still running, click on the three dots and select "Clear terminal" to stop it. 
Then run the command: `npm install -g firebase-tools`

##### Initialize your project

- Firebase Login
  - Run Firebase login and click on the URL to authorize the environment to communicate to Firebase using `firebase login --no-localhost` and after logging in it should show a message `Success! Logged in as ****`
- Firebase Init
  - Run `firebase init`
  - Select `Firestore: Configure security rules and indexes files for Firestore` and `Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys`
  - Firestore Setup click on accept what file should be used for Firestore Rules? `Press enter`
  - What file should be used for Firestore indexes? `Press enter`
  - What do you want to use as your public directory? `build`
  - Configure as a single-page app (rewrite all urls to /index.html)? `y`
  - Set up automatic builds and deploys with GitHub? (y/N) `y`
  - File build/index.html already exists. Overwrite? (y/N) `N`
  - Enters your project URL for the GitHub action `Enter your project URL in the format of user/repository-name`. For example, `juancarlosjr97/react-firebase-playground`
  - What script should be run before every deploy? (npm ci && npm run build) `Press enter`
  - Set up automatic deployment to your site's live channel when a PR is merged? `Y`
  - What is the name of the GitHub branch associated with your site's live channel? `main` unless your default branch is different.

Due to an [open issue][10] on GitHub with Firebase GitHub Actions, the file created by the Firebase setup on the `./.github/workflows` must be updated manually.

The `firebase-hosting-pull-request.yml` needs to be added the following permissions, after the workflow configuration. Check it has the below permissions, and if not update them and save the file:

```yaml
permissions:
  checks: write
  contents: read
  pull-requests: write
```

The GitHub Actions create two workflows:

1. **Firebase Hosting Merge**: It will deploy the changes automatically to the live environment when changes are merged into the default branch.
2. **Firebase Hosting Pull Request**: It will deploy the changes to a preview site using the changes on the Pull Request. It is an ephemeral environmental that will last a week.

To learn more about GitHub Actions, read [here][17].

##### Register your app

Back within the Firebase setup, enter a name for your app, for example, `React Firebase Playground`

##### Add Firebase SDK

Follow the instructions on this step, by running:

```bash
npm install firebase
```

Copy the SDK configuration and paste it on a new file at `src/utils/firebase.js` using this template. Then save the changes in Visual Studio.

```javascritp
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

/**
 * This configuration is based on this particular Firebase project.
 * When forking the project, this configuration will need to be updated to match the configuration.
 */
const firebaseConfig = {
  // Paste here the SDK configuration
};

const firebaseApp = initializeApp(firebaseConfig);

const firebaseDatabase = getFirestore(firebaseApp);

export { firebaseApp, firebaseDatabase };
```

##### Deploying the App

After all the changes, now the app can be deployed.

1. Build the React app

   ```bash
   npm run build
   ```

2. Deploy to Firebase

   ```bash
   firebase deploy
   ```

After it is executed, it should return a similar message as below

```bash
✔  Deploy complete!

Project Console: ***
Hosting URL: https://react-firebase-playground-neo.web.app
```

This makes the React app available on a live environment accessible from the internet.

After this has been completed, we can commit all the changes to save the current work state to the repository.

### Adding Real Time Counter using Firebase

Utilizing Firestore, a counter is employed to dynamically track changes in real time.

#### Create React Hook useCounter

React custom hooks are reusable functions in React applications that encapsulate and share logic across components. They follow the "use" naming convention and provide a clean way to manage state, side effects, and other functionalities. Read more [here][11].

1. Create a file at `./src/hooks/useCounter.js`
2. Copy the content of the [`useCounter.js`][12] and paste it on the `useCounter.js` on your project

#### Use useCounter

Copy the content of the [`App.js`][13] and paste it on the `App.js` on your project.

### Going Live

After updating the project with all the above changes, commit and push the changes to the default branch and let the GitHub Action to deploy the changes to the live environment, or run `nmp run build` and `firebase deploy` to update the changes from the development environment to production.

This is the end of the set up. Congratulations on getting your React app with Firebase working!!!


## The following instructions are for when you are planning to further Develop this project

For contribution and development using this project, please read the [DEVELOPMENT][18].

## Support Documentation

- [Create React App documentation][14].
- [Firebase Community][15]
- [React][16]

[1]: https://docs.github.com/en/get-started/quickstart/creating-an-account-on-github
[2]: https://code.visualstudio.com/
[3]: https://firebase.google.com/
[4]: https://react-firebase-playground-neo.web.app
[5]: https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories
[6]: https://docs.github.com/en/codespaces/developing-in-a-codespace/using-github-codespaces-in-visual-studio-code#using-the-insiders-desktop-application-for-codespaces
[7]: https://support.google.com/firebase/answer/9326094
[8]: https://firebase.google.com/pricing
[9]: https://firebase.google.com/docs/firestore
[10]: https://github.com/FirebaseExtended/action-hosting-deploy/issues/108#issuecomment-1406627354
[11]: https://react.dev/learn/reusing-logic-with-custom-hooks
[12]: ./src/hooks/useCounter.js
[13]: ./src/App.js
[14]: https://facebook.github.io/create-react-app/docs/getting-started
[15]: https://firebase.google.com/community
[16]: https://react.dev/
[17]: https://github.com/features/actions
[18]: ./DEVELOPMENT.md
