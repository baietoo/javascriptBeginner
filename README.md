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

## Objects

### object properties

- initialized using {}
  - ```javascriptlet person = {firstName: "John"};```
- access properties by:
  - person.firstName
  - person['firstName']
- symbols
  - let mySymbol = Symbol();
  - used for secret information
  - when passing an object symbols can only pe modified if the symbol variable is changed

### object methods

- a function within an object
- use `this.varName` to refer to variables within said object

```javascript
    let person = {
        name = 'John',
        showName = function(arg) {
            console.log(this.name + ' ' + arg)
        }
    }
```

- you can also send args to function in an object

### Passing objects to functions

- when passing an object to a function you pass a pointer therefore
  - you can change properties and the changes will be stored

```javascript
    let person = {
        name = 'John',
        age = 32,
    }

    function incrementAge(person) {
        person.age++;
    }

    incrementAge(person); // will return 33
```

### Standard Built in objects

- check MDN for these objects
- str
  - str.charAt(1)
- Date
  - new Date();
  - Date.toDateString();
- number
- Math
  - .random
  - .abs(myNumberapple)

### DOM DOM sa-naltzam

- ```javascript document.getElementById('damn-id').textContent = 'new text';```

- access the webpage object
  - with a method that retrieves an object
    - and change property of retrieved object with

### Stylin DOM Elements

- you can declare a `const` store de header element in it and change:
  - color: `header.style.color = '#fff'`
  - font-weight: `header.style.fontWeight = '800'`

### Event listeners

- detect if a user click on a button
  - get the button using an id
  - store it in a variable
  - using the addEventListener method
    - specifiy event type 'click'
    - and an anonymous function

```javascript
    const button = document.getElementById('btn-id');
    button.addEventListener('click', function () {
        console.log('click');
    });
```

### Showing and hidind DOM elems

- manipulate using classes
  - bootstrap example: add 'd-none' in the class area
  - classList.contains('d-none')
  - remove it by checking the classList method 
    - classList.remove('d-none')
    - classList.add('d-none')

## Arrays

### creating and initializing arrays

- typeof(array) won't work, use ```Array.isArray(array)```
- let values = [1,2,3]
- let values = Array.of(1,2,3)

### accessing array items

- value[0] = 4
- value[1] // would print 2

### Manipulating Arrays

- push - adds element at the end of the array
- pop - removes element from the end of the array
- shift - removes element from beggining of array
  - stores the first element of the array if used: shift()
- unshift - adds element to the beginning of array
  - stores the last element of the array if used: unshift()

### slice() and splice()

- slice will retrieve a slice from an array
  - slice(1,2)  will retrieve an array with element array[1]
  - slice() will retrieve a full copy of the array
  - splice(1, 0, 'foo') - adds foo at array[1]
  - splice(1,1) - removes array[1]


### array searching and looping

- filter 
  - returns an Array
- find
  - returns the first found value
- forEach
  - used to loop over all the items

```javascript
    // the following applicable to filter and find as well
    // (new) short version
    array.forEach( element => {
        console.log(element);
    })
    //long version
    array.forEach(function(element) {
        console.log(element);
    })
```

### Arrays in DOM

- document.damnboigetElementByClassName('container)
  - retrieves an array of all the elements that have the class container
  - the class can be removed easily:
    - array[0].classList.remove('d-none');
    - same with add