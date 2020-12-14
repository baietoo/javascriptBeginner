/* 
====PROGRAM FLOW====

    if else statements    
    Truthy and falsi
    === ==
    ternary operator
    block scope
    Loops for while do while
*/

// let message = 'tibi';

// if (message === 'tibi' ) {
//     showMessage(message);
// }

// let state = 'FL';

// use '===' in conditionals

// if (true) {
//     showMessage('truuu');
// }

// === - identically equal

// empty strings false, 0 is false
/* null false
undefined false
nan false

"0" true 0 falsy

+(1.1).toFixed(2)
converts string to Number */

// if (condition) {

// } else {
    
// }


// == converts type
// likewise for !=
// use !==

// let price = 12;

// let message = (price > 10) ? showMessage('yes') : showMessage('no');

// for (let index = 0; index < 3; index++) {
//     console.log(index);    
// }

// let i = 5;
// while(i>0) {
//     console.log(i);
//     i--;
// };

// let countDown = 10;

// do {
//     countDown === 0 ? console.log("Happy New Year!") :  console.log(countDown);
//     countDown--;    
// } while(countDown >= 0) 

// price = 2.4;
// if((1.1 + 1.3).toFixed(1) === 2.4) {
//     showMessage('true');
// }
//     else {
//         showMessage(typeof(+(1.1 + 1.3).toFixed(4)));
//     }

// let myFunction = function (message) {
//     console.log(message);
// }

// myFunction();

// function getSecretCode (value) {
//     let code = key * 42;
//     return code;
// }

// let key = 3;
// let secretCode = getSecretCode(2);
// showMessage(secretCode);

// changePercentageOff(42);

// let mySymbol = Symbol();

// let person = {
//     name: "John",
//     age: 32,
//     partTime: false,
//     showInfo: function(realAge) {
//         showMessage(this.name + ' is ' + realAge);
//     }
// };

// person.showInfo(34);

// let person = {
//     name : 'John',
//     age : 32,
// };

// function incrementAge(person) {
//     person.age++;
// };

// incrementAge(person); // will return 33
// showMessage(person.age);

// let currentDate = new Date();
// showMessage(currentDate.toDateString());
// showMessage(Math.random());

// let s = 'Hello';
// showMessage(s.charAt(1))

// const header = document.getElementById('message');

// // header.style.color = '#FFF';
// header.style.fontWeight = '800';

// const button = document.getElementById('see-review');

// button.addEventListener('click', function() {
//     console.log('click');
// });

const button = document.getElementById('see-review');

button.addEventListener('click', function () {
    const review = document.getElementById('review');
    if(review.classList.contains('d-none')) {
        review.classList.remove('d-none');
        button.textContent = 'CLOSE REVIEW';
    }
    else {
        review.classList.add('d-none');
        button.textContent = 'SEE REVIEW';

    }
})