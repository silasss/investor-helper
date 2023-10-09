# How to get started
Do not forget to use the same environment tools each module (dashboard, host, shared, ..), so, run:
`nvm use`

## Installing dependencies
Important to starts on that shared module!
`cd shared && npm install`

Installing dependencies
`cd host && npm install`

Installing dependencies
`cd dashboard && npm install`

## Starting applications

Start the dashboard application
`cd dashboard && npm run dev`

Start the host (core) application
`cd host && npm run dev`

## Running
Open the browser on page localhost:3001

## Todo
- [ ] Test global state accessible by remote modules
- [ ] Include graphql
- [ ] Test graphql on remote modules
- [ ] Configure jest
- [ ] Look at configuration of all projects, .nvmrc, eslint, prettier
- [ ] clean up project and to get start the project