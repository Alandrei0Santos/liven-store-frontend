
# Liven Store Frontend

This is the frontend of Liven Store, a modern e-commerce web application built using React, TypeScript, and Ant Design. The project is bundled with Vite for fast builds and includes TailwindCSS for styling, Axios for HTTP requests, and Testing Library/Vitest for testing.

## Table of Contents

- [Fake Store API](#fake-store-api)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Running the Application](#running-the-application)
- [Building the Application](#building-the-application)
- [Linting and Formatting](#linting-and-formatting)
- [Running Tests](#running-tests)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)


## Fake Store API

- This project uses [FakeStore API](https://fakestoreapi.com/) to populate the pages in this project
- **IMPORTANT**: You may find out the API server is down for a while, but don't worry, you can use the mock files available in the project instead.



## Prerequisites

- **Node.js**: Ensure you have Node.js installed. This project is using Node.js version `v20.16.0`.
- **npm**: The project uses `npm` as the package manager, which is included when you install Node.js.

You can download Node.js [here](https://nodejs.org/en).

Verify Node.js and npm are installed:

```bash
node -v
# v20.16.0

npm -v
# 6.x or later
```

## Installation

1. **Clone the repository**
2. **Install dependencies:**

   Run the following command to install all the necessary dependencies:

   ```bash
   npm install
   ```

## Available Scripts

In the project directory, you can run the following commands:

### `npm run dev`

Starts the application in development mode using Vite. The app will be available at `http://localhost:5173` by default.

```bash
npm run dev
```

### `npm run build`

Builds the application for production. This command first compiles TypeScript code and then uses Vite to bundle the application.

```bash
npm run build
```

The production-ready files will be available in the `dist` directory.

### `npm run lint`

Runs ESLint to check for code style issues and potential errors. Ensure your code is linted before committing any changes.

```bash
npm run lint
```

### `npm run test`

Runs the test suite using Vitest. This will execute all the test files located within the `tests` directory.

```bash
npm run test
```

## Running the Application

1. **Start the development server:**

   Run the following command to start the application in development mode:

   ```bash
   npm run dev
   ```

2. **Open your browser and navigate to:**

   ```
   http://localhost:5173
   ```

   The application will automatically reload if you make edits to the code.

## Linting and Formatting

The project uses ESLint for code linting and Prettier for code formatting. You can run the linter with the following command:

```bash
npm run lint
```

Make sure your code adheres to the configured linting and formatting rules before committing changes.

## Running Tests

Vitest is used for unit testing, and Testing Library is used for testing React components.

To run the test suite:

```bash
npm run test
```

The test files are located in the `src/tests` directory, and you can write additional test cases following the same structure.

## Folder Structure

```
liven-store-frontend/
├── public/               # Static assets like images, icons, etc.
├── src/
│   ├── assets/           # Project assets like images, fonts, etc.
│   ├── components/       # Reusable React components
│   ├── context/          # React contexts like ShoppingCartContext
│   ├── pages/            # Page components (e.g., HomePage, CartPage)
│   ├── resources/        # API requests, interfaces, and static data
│   ├── styles/           # TailwindCSS configuration and custom styles
│   ├── tests/            # Unit and integration tests
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point of the application
├── .eslintrc.js          # ESLint configuration
├── tailwind.config.js    # TailwindCSS configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **TypeScript**: JavaScript with static types.
- **Vite**: A fast build tool that serves the application during development.
- **Ant Design**: UI component library for React.
- **Axios**: Promise-based HTTP client for making API requests.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **ESLint**: Linting tool for identifying and fixing code issues.
- **Vitest**: A blazing-fast unit testing framework for JavaScript.
- **React Testing Library**: For testing React components.

## License

This project is licensed under the [MIT License](LICENSE).

