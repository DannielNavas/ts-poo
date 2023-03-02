const date = new Date();
date.getHours();
date.getTime();
date.toISOString();

const date2 = new Date(1993, 1, 12);
date2.getHours();
date2.getTime();
date2.toISOString();

console.log(date2);
console.log(date);
// TODO: ya se soporta desde ES6 esto se coloca en el tsconfig > target: "es6"
class MyDate {
  // TODO: typescript solicita que siempre se inicialien las variables
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

const myDate = new MyDate(2023, 2, 2);
console.log(myDate);
