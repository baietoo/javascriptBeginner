// // let values = [1, 2, 3];

// let values = Array.of(1,2,3);
// values.push(4,5,6);

// const lastVal = values.pop(6);
// console.log(values);

// const firstVal = values.shift();
// console.log(values);

// // values.unshift('da');
// console.log(values);

// const unshiftVar = values.unshift('da');
// // const last = values.pop();
// // const first = values.unshift('0');
// console.log(values, unshiftVar, firstVal, lastVal);
// // console.log(values + '  &  ' + first);

// values = ['bb','bbb','c'];
// // const newValues = values.slice(1,2);
// // values.splice(1,1);
// // console.log(values, newValues);
// // values.splice(1, 0, 'foo');
// // const copySlice = newValues.slice()
// // console.log(values);

// console.log(values.indexOf('c'));
// console.log(values.indexOf('d'));

// const set = values.filter(function(item){
//     return item > 'a';
// });

// const found = values.find( item => {
//     return item.length > 1;
// });

// const eachItems = values.forEach(element => {
//     console.log(element);
// });

// console.log(set);
// console.log(found);

const containers = document.getElementsByClassName('container');
console.log(containers);
containers[2].classList.add('d-none');
containers[2].classList.remove('d-none');
