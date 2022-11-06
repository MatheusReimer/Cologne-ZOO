# Cologne-ZO


### Getting Started with the Cologne Zoo Website

This project was created with Vue.js and Typescript and Tailwind

## Most Used Scripts

In the project directory, you can run:

- `npm run start`

Runs the app in the development mode.
Open [http://localhost:XXXX](http://localhost:XXXX) to view it in your browser. Port defined by NUXT

The page will reload when you make changes.

- `npm run test`

Launches the test runner in the interactive watch mode.

- `npm run build`

Builds the app - Normally used before any deployment

- ctrl + c

To stop a running app, just click on the terminal and press ctrl+c


## A few important informations of the project structure

The vue.js project structure is based on components. When developing a new feature, don't be afraid to create a new one or use the ones that were already created.

In this project we organize also the functions in a way that they can be reuse throughout the whole project in the folder of [composables](./composables).

In this project we also have an [assets](./assets) folder that are mainly static files like Images, video, other things that aren't code, markup, or configuration.

In this project we have a [server](./server) folder. This folder is used to organize the files that are related to having requests and responses to the application.

In this project we also have tests. Make sure to run or create a new test before completing your task.

In this project we use [storybook](./.storybook). According to the docs: Storybook is a tool for UI development. It makes development faster and easier by isolating components. This allows you to work on one component at a time. You can develop entire UIs without needing to start up a complex dev stack, force certain data into your database, or navigate around your application.

In this project we have also a main file that will run after the build is complete.That is: app.vue.


## Before creating/changing any features or if you have any questions:

- Read this file again 😅
- See the vue.js docs <a href="https://vuejs.org/guide/introduction.html" target="_blank">here</a>
- See typescript docs  <a href="https://www.typescriptlang.org/docs/" target="_blank">here</a> 
- See tailwind docs <a href="https://v2.tailwindcss.com/docs" target="_blank">here</a> 

If you still have doubts, contact me.

<i>Note: This is an assignment passed by SIDESTREAM and the rest of the relevant information about it are described in [this](./TASKS.md) file</i>
