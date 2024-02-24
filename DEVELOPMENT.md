# Development

This section shows high-level commands when doing development on this project.

## Node Dependencies

1. Install `node` and use the version of the project

   ```bash
   nvm use
   ```

2. Install project dependencies

   ```bash
   npm ci
   ```

## Start the React app

To start the React app run the following command:

```bash
npm run start
```

The app will be running on the port `3000` and accessible in `http://localhost:3000`

## Production Build

To create an optimized production build run:

```bash
npm run build
```

To run it locally the production build executes the command `npx serve -s build`

## Automated Tests

To run the automated tests execute the following command:

```bash
npm run test
```
