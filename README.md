This Project is already compatible with using `React Hooks`, [Make sure to learn about it first, before continuing]
Don't forget to check on the <b>README</b> file for some notes and instructions.
You can change anything inside this project to adjust to your project requirements.
If there's something that needs to be removed or improved from this template, please contact the repository owner.
The feedback will help us to improve standardization in our projects in the future.

## Demo

https://dashboard-template-mocha.vercel.app/#/login

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## NOTES

### Folder Structure

#### File Naming

---

Majority if not all code will be in `src/`.
All files follows these naming rules:

- File that exports Component/Context uses `PascalCase`.
- File that exports code other than above uses `camelCase`.

#### Folder Naming

---

Folder that exports `more than one` components with the same level follows this structure:

```
  components/
    ComponentA.js
    ComponentB.js
    ...OtherComponents.js
```

Folder that exports `one` major Component follows this structure:

```
  ComponentName/
    ...OtherSupportingComponents.js
    ComponentName.js
    index.js
```

> Apply this only for components that have at least one internal component. If the component is self sufficient (no need to add any local internal file), then don't use folder, just use file.
> e.g. rather than using
>
> ```
> About/
>   About.js
>   index.js
> ```
>
> use
>
> ```
> About.js
> ```

> The intuition for this is the `ComponentName` only exports one component, with other components being used only internally inside the main component.
> This means that if you see for example Home/ folder, then the only important thing is Home.js, which uses other components inside Home/ folder.
> index.js will always `export default ComponentName` which can make the user of ComponentName imports the component without the need to specify ComponentName twice.
> e.g. `import ComponentName from './src/component/ComponentName'`

These folder naming rules applies also for nesting folders.
e.g.

```
Home/
  components/
    Section1/
      SectionTab/
        Tab.js
        SectionTab.js
        index.js
      Section1.js
      index.js
  Home.js
  index.js
```

## Folder Structure

### Apis

Contain API's used inside application

### Assets

Contain static assets like fonts & imgs

### Components

Global Components

### Theme Config

Control initial behavior of the application, include Light / Dark Mode and Fullscreen mode settings

### Layouts

Contain components used for Sidebar and Navbar

### Lib

Contain Constants , Contexts, Hooks, and Utils that will be used globally inside application

#### Pages and Modules

These follows structure as below:

```
modules/
  Home/
    components/
      ComponentA.js
      ComponentB/
        InternalComponent.js
        ComponentB.js
        index.js
    Home.js
    index.js
  About.js
pages/
  HomePage.js
  AboutPage.js
```

### Navigation

Register sidebar navigation. Support nested navigation as exampled below :

```
 const navigations: Navigations = [
  {
    id: "group-user",
    navLink: "",
    Icon: () => <></>,
    title: "User",
    children: [
      {
        id: "inactive",
        navLink: "/user/inactive",
        Icon: () => <></>,
        title: "Inactive",
      },
      {
        id: "active",
        navLink: "/user/active",
        Icon: () => <></>,
        title: "Active",
      },
    ],
  },
  {
    id: "group-proucts",
    navLink: "",
    Icon: () => <></>,
    title: "Products",
    children: [
      {
        id: "group-medical",
        navLink: "",
        Icon: () => <></>,
        title: "Medical",
        children: [
          {
            id: "Commercial",
            navLink: "/medical/commercial",
            Icon: () => <></>,
            title: "Commercial",
          },
          {
            id: "Hazard",
            navLink: "/medical/hazard",
            Icon: () => <></>,
            title: "Hazard",
          },
        ],
      },
      {
        id: "External",
        navLink: "/external",
        Icon: () => <></>,
        title: "External",
      },
    ],
  },
];
```

### Router

Register routes inside application

### Store

Register every redux store inside application

### Styles

Place to make custom CSS

### Typings

Data definition for Global Components

### Others

- If there any new endpoint you can put it inside folder Api
- The redux only storing the data that need to be used extensively
- You can add more alias for spesific path in `./config-overrides.js`
