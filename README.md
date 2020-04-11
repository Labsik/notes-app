# notes-app

## Requirements

Prepare a simple application in ReactJS (or AngularJS). Prepare your own backend (using .Net Core or Node.js) with these endpoints.

### Methods:
- GET / notes
- GET / notes / {id}
- POST / notes
- PUT / notes / {id}
- DELETE / notes / {id}

### Functional requirements:

- After installing and running you enter localhost:3000 and page appears with a list of notes.
- It is possible to display, edit, delete and create a new note.
- User should be able to change a language ( EN / RUS )

### Non-functional requirements:
- GUI according to your design, using with Bootstrap and LESS / SASS / Stylus preferred.
- The code should be ES6 + JS using the newer APIs such as Promise, Array, extras
- You might also use Typescript
- Use ui-router (or https://github.com/rackt/react-router).
- At least one basic E2E test.

Develop code to github / Bitbucket public repository, in file README.md describe instructions
for installing and running a test and send URL via email.

## Installation Instructions

The project contains backend part and client (frontend) part.

## Run project:

Clone the repository from github (or download the .ZIP file):
```
git clone https://github.com/Labsik/notes-app.git

And then:

cd client 

npm install

cd ..

npm install

npm run dev

