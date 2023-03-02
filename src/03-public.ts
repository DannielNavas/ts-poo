export class MyDate {
  // TODO: typescript solicita que siempre se inicialien las variables
  year: number;
  month: number;
  // FIXED: readonly day: number; da error para poder modificar internamente
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    return `${this.year}-${this.month}-${this.day}`;
  }
  add(amount: number, type: 'days' | 'mounths' | 'years'): void {
    if (type === 'days') {
      this.day += amount;
    }
    if (type === 'mounths') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }
}

const myDate = new MyDate(2023, 2, 2);
console.log(myDate.printFormat());

myDate.add(1, 'days');
console.log(myDate.printFormat());

myDate.add(1, 'mounths');
console.log(myDate.printFormat());

// TODO: es pelñigroso asignar desde afuera una variable de una clase
// myDate.day = 12
