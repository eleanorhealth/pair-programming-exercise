# Eleanor Health Pair Programming Exercise

This project is written in React and TypeScript.

- The component library used is [Chakra UI](https://chakra-ui.com/docs/getting-started). `styled-components` package is also installed if preferred.
- It manages data fetching with [react-query](https://react-query.tanstack.com/docs/overview). [Devtools](https://react-query.tanstack.com/docs/devtools) are enabled.
- [ramda](https://ramdajs.com/docs/#) is installed for functional programming utilities.

## Background

This app is a simplified version of Ops Hub, our internal facing platform for clinical management. Ops Hub is used by staff to view member charts, record screening results, and send and receive messages.

## User Stories

See the [stories](./stories) directory.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

Tests are written with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro). Test files are placed alongside the modules they are testing, in `/src`.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
