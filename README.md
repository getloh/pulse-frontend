# Pulse-Frontend

## What is it

This is a plain HTML/SCSS/JS web component for an interview technical assessment

Spec is to replicate this design mockup and populate using a provided JSON file and assets.

![image](https://meng.s-ul.eu/G62SDnfx)

## Getting Started

### Run via local server (VScode 'Live Server')
Install Live Server extension if necessary, open project in vscode then right click on index.html and 'Open with live server'.

https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

Optional - run gulp to process SCSS if any changes are made: 

```bash
npm install
# then
npm run dev
# or
npm run watch
```

Open [http://localhost:5500](http://localhost:5500) with your browser to see the result.

### Run via local files only
This will fail to fetch the JSON due to CORS policies, to resolve:
- Open 'pulse-frontend\src\js\main.js' with your editor of choice.
- Comment out or delete function 'getData' (lines 7-15)
- Uncomment the second 'getData' function beneath (lines 18-341)
- Open index.html using browser

## Other

Changing HTML{font-size} will scale the entire app up or down in size.
```pulse-frontend\src\sass\_layout.scss```