let currentDate = new Date();
// console.log(currentDate.getFullYear());

let milliseconds = new Date(1102188005000);
// console.log(milliseconds);

let dateString = new Date("December 5 2004 00:20:05")
// console.log(dateString)

let componentDate = new Date(2004, 11, 05, 00, 20, 0, 0)
// console.log(componentDate);


// currentDate.setFullYear(2004)
// console.log(currentDate.getFullYear());

console.log(
    currentDate.toLocaleString('default', {month: 'short',

weekday: 'short'})
);