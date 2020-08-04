const snackServings = 32;
const guests = 12;
/* Adding snackServings and guests */
console.log(snackServings + guests);
/* Subtracting snackServings and guests */
console.log(snackServings - guests);
/* Multiplying snackServings and guests */
console.log(snackServings * guests);
/* Divide snackServings and guests */
console.log(snackServings / guests);

let drinks = 10;
let resultOne = (snackServings * guests) / drinks ;
console.log(resultOne);

let monkeys = 15;
let bananas = 9;
console.log(monkeys / bananas);

let monkeyfights = 20;
let resultTwo = (monkeys + bananas) * monkeyfights;
console.log(resultTwo);

console.log(monkeys++);// 15
console.log(monkeys); // 16 -->After Incremented

console.log(bananas--); // 9
console.log(bananas); // 8

let happiness = monkeys - bananas;
console.log(happiness + monkeyfights);

console.log(resultOne % resultTwo);



