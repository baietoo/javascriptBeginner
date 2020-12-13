# My Notes

- You will need to have Node installed to start this environment. If you are not sure if you have Node installed run `node -v` in your terminal. If you do not see a version number output, install Node before moving on.
- Install light-server locally and save it to your development environment by running `npm install lite-server --save-dev` in your terminal.
- Run `npm run start` in your terminal to start the server.
- Your browser will open at `localhost:3000`.

## Introduction and Beginnings

writing a function in javascript is simple;

```javascript
funcName(arg) {
    // do something with arg
};
```

use utlis.js to store the functions and home.js to run functions passing parameters to it

### utils.js

```javascript
funcName(arg);
```

also don't forget javascript is case sensitive and whitespace is ignored but please keep the code clean!!!

## Variables and Constants

always use let when declaring variables

use const for constants, constants cannot be changed later except when using let to redeclare it

- const name = 'tibi'
- let name = 'toader

the above works, if you do this on the other hand:

- const name = 'tibi'
- name = 'vasile' - should throw an error

if u use var the running order won't be kept, dont use var

## types and operators

strings in javascript act different due to weak typing:

'123' + 2 = '1232';

- number.parseToFloat('A123') - throws an error
- number.parseToFloat('123A') - returns 123
- typeof(2) - returns number
- typeof('a') -returns string
- 'a'.toUpper() - returns 'A'
- you can also increment/decrement
  - varName++
  - ++varName
  - just keep in mind that a post increment will not be shown in console
- 123.toString - '123'
- 'tibi'.length = 4
- 'tibi'.substrin(1) = 'ibi'
- when using backticks in string you can include variables:

 ```javascript
  `damn boi he: ${thicknessIndex}`
 ```

 also objects:

```javascript
let person = {
    firstName: 'John',
    lastName: 'Boi'
    }
```

- access an object:
  - console.log(person.firstName);

- booleans:
  - let saved = true
  - saved = !saved

- best practice to erase a variable:
  - varName = null;
  - leave undefined to javascript
  - common sense innit

## Program Flow

we got ifs while do while for loops

- ternary operation:
  - (condition) ? (true) : false

- best practice: use `===` instead of `==`
- `==` converts type
  - 1 == '1' will return `true`
- basic math
  - even though you got basic in the name it's not that easy:
    - javascript floatin point is quite chaotic:
      - 1.1 + 1.3 == 2.4
        - not really, use toFixed(nrOfDigits)
          - this return a string, use +(1.1).toFixed(2)

## Function Basics

### Declaring a function

```javascript
    function showNumber(number) {
        console.log(number);
    }
    showNumber(myNumber);
```

### Function expressions

```javascript
    let myFunction = function optionalName(message) {
        console.log('logging');
    }

    myFunction(); // works, displays 'undefined'
    myFunction('test'); // displays test
    optionalName(); // if given doesn't work, use only for debugging
```

- leaving an argument off will print 'undefined'

### Function return values

```javascript
    function getSecretCode (value) {
        let code = value * 42;
        return code;
    }

    let secretCode = getSecretCode(2);
    showMessage(secretCode);
```

### Functions to modify the web

```javascript
    function changePercentageOff(percentage) {
        document.getElementById('percentage-off').textContent = percentage + " % OFF";
    }
```