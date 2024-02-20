# React Firebase Playground

This project is a guide on how to create a React Web App using Firebase as the backend and Codespaces as a fully configured dev environment in the cloud ready for development using the blank canvas provided by GitHub using Codespaces.

## Prerequisites

- [GitHub](https://docs.github.com/en/get-started/quickstart/creating-an-account-on-github)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Firebase](https://firebase.google.com/) and this requires a Google account to link to a Firebase project.

## Overview

The key objectives are outlined below:

- **Web App Development using React 18**: Leverage the capabilities of React 18 to construct a dynamic and sophisticated web application.
- **Firebase Deployment**: Employ Firebase Hosting and Cloud Firestore to facilitate the smooth deployment and management of the web application.
- **Automated Deployment with GitHub Actions**: Configure GitHub Actions to automate the deployment process, ensuring precision in updates for both the live environment and ephemeral environments dedicated to Pull Requests.
- **User Interaction Enhancement**: Integrate a real-time, on-click counter utilizing Firebase and Cloud Firestore, complemented by an optimal loading state for an enhanced user experience.

## Development

This sections shows high-level commands when doing development on this project.

### Node Dependencies

1. Install node and use the version of the project

   ```bash
   nvm use
   ```

2. Install project dependencies

   ```bash
   npm ci
   ```

### Start the React app

To start the React app run the following command:

```bash
npm run start
```

The app will be running on the port `3000` and accessible in `http://localhost:3000`

### Production Build

To create an optimized production build run

```bash
npm run build
```

And to run it locally the production build execute the command `npx serve -s build`

### Automated Tests

To run the automated tests execute the following command:

```bash
npm run test
```

## Support Documentation

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
- [React](https://react.dev/)
