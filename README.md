# Application

This application was designed to support investors taking decisions.

It doesn't count on any AI at first.

As a helper, it will allows the user to create themselves wallet of investment, registering their stocks and itselves categories, define goals for each category and individual assets.

In a dashboard module it will start monitoring that prices and alert user when some goals rule was reached.

# Getting started

## Build shared library
Important to starts by that shared module!

> `cd shared`

> `nvm use`

or 

> `nvm install`

> `npm install`

> `npm run rollup`

## Installing modules dependencies

> `cd ../host`

> `nvm use`

> `npm install`

---

> `cd ../dashboard`

> `nvm use`

> `npm install`


## Starting applications

Start the dashboard application
> `cd dashboard && npm run dev`

Start the host (shell) application
> `cd host && npm run dev`

## Running
Open the browser on `http://localhost:3000`

## Stack / Technologies
- [ ] Google finance API
- [x] Modedule Federation (distributed frontend applications)
- [x] Next.js
- [x] TypeScript
- [x] React.js Library
- [x] Redux toolkit
- [x] Node.js
- [ ] GraphQL
- [ ] React Native

## Architecture - 1: Scratch
![Alt text](<arch-1.png>)

## Todo
- [ ] Test global state accessible by remote modules
- [ ] Fix the typescript mismatch error message on dispatch (Argument of type 'AsyncThunkAction<Wallet[], void, AsyncThunkConfig>' is not assignable to parameter of type 'AnyAction'.)
- [ ] Include graphql
- [ ] Configure apollo/client provider
- [ ] Test graphql on remote modules
- [ ] app folder?
- [ ] Add Mui
- [ ] Test mui on remote modules
- [ ] Hot reload to module
- [ ] Configure jest
- [ ] Look at configuration of all projects, .nvmrc, eslint, prettier
- [ ] Adjust shared module to not import from root, but show folders like models / interfaces /.. so the import should be: import { Wallet } from 'shared/models' for example
- [ ] clean up project and to get start the project
- [ ] Global Header / Main menu

### To keep in mind
- [ ] When I started the host application, and navigated by dashboard route, it was 404, even after I started the dashboard application it doesn't had updated for host.
- [ ] Any application only can get on after host application is on, each team will starts from them.
