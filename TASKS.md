# Challenge

Welcome to the challenge!

Some packages are already being installed for you below - you can just start reading the below text while that finishes.

## The Introduction

The following script takes you through tasks you should complete as part of your challenge. Some tasks may be tricky, some may be easy. In every case you are encouraged to pose written questions to the task itself, write down questions/observations or reasoning about why you did not find a solution. In most cases though, a working solution will be achievable. In all cases it will be helpful if add notes about your methodology (e.g.: "I did X using Y because of Z, then A happened which I fixed doing B. I should have seen A coming but didn't because of C").

There will be no loop with the reviewer, so nobody is going to answer your notes, questions, musings, ... - their main aim is to showcase your thought process for a fellow developer who will inspect this challenge. For the texts you can write everything from a bullet list to a book, but be aware that in development we usually try to optimize for a combination of dense information + understandability by every team member. We firmly believe that good communication and conceptualization is as important to being a developer as the coding itself.

The challenge tries to be similar to the real-world with the kinds of problems and solutions that would occur in every-day-project-work. There will be no questions asking you to optimize runtime-complexity in O-notation to the max for algorithm Y - these sort of questions do not make any sense in our opinion. Being close to the real-world also means that you may bring in CSS/JS Libraries to help you develop, just make sure that everything still runs in stackblitz.

The tool we use here is called `stackblitz`. It functions as a fully integrated development environment (IDE). You can go through the full challenge here. If you want to use your local environment you can also download the project using the small "cloud icon" at the top left corner of the screen, just right of "Project". _In the end, the challenge code must run in here inside `stackblitz`, so `npm run dev` has to work. If this is not the case, we will not be able to review your challenge!_

## Tech-Stack

You can skip this section and revisit it later, as the right information will be shared with you at the right places and everything should "just work" as we inteded it to work. If you still want to learn more right now, read on!

This is a "fullstack" TypeScript project using nuxt3 + vue3. Fullstack TypeScript means that we use one typescript code base for both the backend API + the frontend webapp. We have defined helper commands for development, testing, running the app in production, linting, ... that are runnable via `npm run X` where X is the command, checkout the `package.json` for more.

For styling we use TailwindCSS, so far the zoo has not added a CSS component framework to use pre-made components, maybe you will? For testing we use `vitest`, for linting `eslint`. For building components that are testable, maintainable and embeddable we use `storybook`.

Storybook is a wonderful tool that sadly does not work in stackblitz (as the vue3 dependencies cannot run for some reason). So, we've disabled it but left the stories for you to study.

This information will also be shared with you where needed as part of the challenge, so there is no need to dive into anything at all for now.

## The Challenge

So, without further ado: Welcome, new IT Director of the Cologne Zoo! As you can see, the zoo dashboard was badly damaged by the recent malware attacks from the Duisburg Zoo. The old IT Director quit after that attack as he just could not take it anymore. The staff is looking to you to fix this mess and bring the zoo dashboard back to its former glory! 🐻 🐵 Sadly the IT-Department has been underfunded for years before the attack - so the application is quite dated.

### Task 1: Take stock of the repository

In a first step you should inspect the health of the project and report on everything you notice while doing so. This will help you determine what repairs are necessary in the coming steps.

Please take stock fo the page using developer tools, your instincts, ... and write down below what you find.

// Your solution

### 1

Scrolling throw the files, it seems that the project structure was not that much affected. It seems at the first glance, that the hacking did not comprimised the layout of the folders structure.
By opening a lot of the files, I could see a red warning from the IDE in the file animals. The problem was a typing issue on the variable that was about to be exported. I already fixed by changing "ANlMALS" to "ANIMALS". There are more warnings but I usually let the compiler tell me what to fix first.
(next task)

### Task 2: Get the basics running again

Now that we know that is broken, let's try to get things running again, step by step. First we should aim to just get the project to start. Please fix the problem that stops `npm run dev` from working out. Then:

- document the loaded page with a brief description,
- document the problems that needed to be resolved to make it work (so that we can avoid and quicker fix them in the future!)

Zookeepers reported that the error sometimes changes when reloading the page after the initial start.

// Your solution

### 2

We already fixed one of the issues in the previous task, but when running the app, the compiler said "alert is not defined" so by going to the actual file we could change "alert" to "console.log" or simply remove it.The problem is that, although we remove it, next time the file will be once again generated with this code.
The issue here is that the compiler is warning about a build file, so I needed to see what the file was using as a source and change in the there,
which was the file "app.vue". After that, the problem was solved.

### Task 3: Start the documentation

You got it to work! Nice, now the basic functionality is back for the zookeepers. This would be a great point to start on documenting the project. As you can see there is not even a readme file! The old IT Director seems to have left this project in bad shape. Please add documentation with basics on the project, how to start, stop, test, ... it and whatever else information you deem important.

Add your solution below, either as an inline text or link to new documentation file(s) you've created.

// Your solution

### 3 - README

### Getting Started with the Cologne Zoo Website

This project was created with Vue.js and Typescript and Tailwind

## Most Used Scripts

In the project directory, you can run:

- `npm run start`

Runs the app in the development mode.\
Open [http://localhost:XXXX](http://localhost:XXXX) to view it in your browser. Port defined by NUXT

The page will reload when you make changes.\

- `npm run test`

Launches the test runner in the interactive watch mode.\

- `npm run build`

Builds the app - Normally used before any deployment

- ctrl + c

To stop a running app, just click on the terminal and press ctrl+c

### Task 4: Test fixing

There's a failing test that for the age calculation helper. Can you figure out what is broken in the implementation or the test it is and resolve the problem? All zookeepers are really interested in what is going on here.

// Your solution

### 4 - TESTS

The test is failing because it's comparing the same date. So it's always going to be 0. And also, the math.round not necessarily round the number up. The best approach to do that would be using the "ceil" function.

### Task 5: UI Fixing and Improvement

The zookeepers report that the table is incomplete and different than usually. More specifically:

- they are missing the `Name` column that used to be in _third_ place,
- the table is sorted by weight, it used to be sorted by name,
- the age of the animals should show the age in years and not the birthdate
  - a helper for this already exists, made by the previous zookeeper

Please fix the two above problems and outline what was necessarry to do so.

// Your solution

### 5 - UI-FIX

First I added the Name to the table simply by adding a new TAG(th) to it.Then, the column was there but the values were not, so I added a new argument to it, since every Animal necessarily has a name based on the interface in the file "types.d.ts".
After that, the values were shown but the sorting was still based on the weight. I just made a new function to sort by the name and attributed the value to the same const that was already there "animalsSortedByName".
Finally, I used the function when passing the variable birthday to the table. The only thing to notice here is that it needs to be converted to a string before creating a new Date otherwise, it will not work.

##IMPORTANT NOTE

After this change to the UI, the test were failing. So, I needed to change the file
TheAnimalTable.test.ts to be updated. After that, the tests were fine.

### Task 6: UI Feature 1

The zookeepers want to be able to see all details of an animal. Please create such a view that allows them to do so, outline anything about your process while adding the view below. The zookeepers didn't have time for more information, sorry. They'll surely be glad to criticize the first version intensly though and will want to know why you went for the approach you chose.

// Your solution

## UI Feature

This assignment was in fact a little confusing but I guess that's the point of it 😅.
What I did here was just add the remaining attributes to the table the same way I did in the previous UI task.

##IMPORTANT NOTE

After this change to the UI, the test were failing. So, I needed to change the file
TheAnimalTable.test.ts to be updated. After that, the tests were fine.

### Task 7: Logic Feature

The zookeepers want a new feature: Calculate the food required for the next calendar month. Basically, the zookeepers want to ease their job and buy a month worth of food in advance. In order to do so they want you to calculate and display the food all animals need for the next month.

To calculate the food an animal needs in kilograms in 1 day, the zookeepers use the following formula:

1. Take height + weight and divide it by 250
2. If the animal is:
   - older than 20 years, half the required food,
   - younger than 2 years, double the required food
3. Cherrys have less calories, so if the favourite fruit of the animal are cherries, add 28 kg
4. If the animal is male, add 20 %
5. If the animal is a fish: The required food is 0 kg

// Your solution

## New Feature - Solution

As this is a simple feature that requires just a function I added a new function to the composable helper called "calculateFood". I also added a new test case to the file helpers.test.ts to make sure that the tests covers all the features.

### Task 8: Plan New Feature

After the disastrous specification of the new UI feature in the previous task, the zooplanners now want to sit down with you to plan the next feature better before implementation begins. Together you come up with requirements that you write down from the user-perspective (the zookeepers):

- I want to plan when to feed which animal,
- Per animal I want to be able to plan a day + a fruit that I feed them
- There should be an overview of all upcoming feeding tasks that tells me:
  - the animal name,
  - the food fruit,
  - the required amount of food
- the required amount of food is calculated using the algorithm from the previous task
- Tasks should be grouped by day, so that I have something like a "todo" list for each day
  - so for exmaple a structure like:
    - 24.03.2012
      - Anni, Bananas, 20kg
      - Belfried, Cherries, 10kg
    - 27.03.2012
      - ...
    - ...

Please create a breakdown for this feature. You can focus on aspects like: What tasks do we need to cover, what should their order be, how will the UI/UX be designed, what questions arise from the potentially inconsistent or incomplete staff requirements?

Don't spend more thatn 15-30 minutes here - planning like this can quickly become quite complex and we want to prevent this challenge taking too much of your time!

// Your solution

## Comments on - new Feature

First of all we need to map where in the zoo every animal is and the distance between them, to not make the pet feeder to keep walking unnecessarily.

We will also need the amount of times an animal eats per day/ per week. With that we would be able to use some sort of graph algorithm to get the best route.

We also need to know the amount of food in the storage and to know when does the food arrives, to manage scenarios where the storage are low on food and we don't feed only a part of the animals while the other part stays without it.

We also need to know if there are any special case scenarios where an animal can't survive without the food for more than X hours.

A good call would also be to include the name of the person in charge of the task in the ToDo List to make sure it doens't occurs a "double feed".

In concern of the UI, I think it would be good if the employee could see other days tasks. It would probably be a good ideia to present it in calendar format from a 'not detailed' view like this https://prnt.sc/tbTnREBw_qZJ to see both the days and the tasks. It could have also a feature of checkbox to mark down which tasks are complete. It would be also important for the employee to see what is the specie of the animal in case the person doesn't remember by name.

We would also need to add the hour of the task for the user.

### Task 9: Finish the documentation

Revisit docs from step 3, see if you want to add anything. Also think about bonuses. Add a general comment about anything (inside the universe of the challenge or out of it) if you want to.

// Your solution

## MY DOCS

The vue.js project structure is based on components. When developing a new feature, don't be afraid to create a new one or use the ones that were already created.

In this project we organize also the functions in a way that they can be reuse throughout the whole project in the folder of composables.

In this project we also have an assets folder that are mainly static files like Images, video, other things that aren't code, markup, or configuration.

In this project we have a server folder. This folder is used to organize the files that are related to having requests and responses to the application.

In this project we also have tests. Make sure to run or create a new test before completing your task.

In this project we use storybook. According to the docs: Storybook is a tool for UI development. It makes development faster and easier by isolating components. This allows you to work on one component at a time. You can develop entire UIs without needing to start up a complex dev stack, force certain data into your database, or navigate around your application.

In this project we have also a main file that will run after the build is complete.That is: app.vue.
