- You will need to have Node installed to start this environment. If you are not sure if you have Node installed run `node -v` in your terminal. If you do not see a version number output, install Node before moving on.
- Install light-server locally and save it to your development environment by running `npm install lite-server --save-dev` in your terminal.
- Run `npm run start` in your terminal to start the server.
- Your browser will open at `localhost:3000`.

# My Notes

## Introduction and Beginnings

writing a function in javascript is simple;
```
funcName(arg) {
    // do something with arg
};
```

use utlis.js to store the functions and home.js to run functions passing parameters to it
### utils.js
```
funcName(arg);
```

also don't forget javascript is case sensitive and whitespace is ignored but please keep the code clean!!!

## Variables and Constants
always use let when declaring variables

use const for constants, constants cannot be changed later except when using let to redeclare it
* const name = 'tibi'
* let name = 'toader

the above works, if you do this on the other hand:
* const name = 'tibi'
* name = 'vasile' - should throw an error

if u use var the running order won't be kept, dont use var

## types and operators