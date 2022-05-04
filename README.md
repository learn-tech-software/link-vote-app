# Link Vote App
This project includes a sample app about link vote. Users can create a new link and their can vote up or down these links. Links keep in local storage and so users can see these links another sessions. <br/>
This project developed with Vue.js3. Unit tests written with Vitest and End to End tests written with Cypress. <br/>

## Features
- Users can add a link
- User up or down vote count links
- On the page reload links order by created date. But if user click up or down vote button, links order by vote count most to less.
- Users can ordering the links via order by dropdown
- Each page shows 5 links and user can see via by pagination area.
- If user wants to remove the link, open modal and ask again.
- After the operations (up vote, down vote, add new link and remove link) open tooltip and inform the users.

## Screenshots
- ![image 1](https://raw.githubusercontent.com/learn-tech-software/link-vote-app/master/screenshots/s1.png)
- ![image 2](https://raw.githubusercontent.com/learn-tech-software/link-vote-app/master/screenshots/s2.png)
- ![image 3](https://raw.githubusercontent.com/learn-tech-software/link-vote-app/master/screenshots/s3.png)
- ![image 4](https://raw.githubusercontent.com/learn-tech-software/link-vote-app/master/screenshots/s4.png)


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```
