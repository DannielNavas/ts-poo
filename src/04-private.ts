export class MyDate {
  // TODO: typescript solicita que siempre se inicialien las variables
  private year: number;
  private month: number;
  // FIXED: readonly day: number; da error para poder modificar internamente
  private day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${this.year}-${month}-${day}`;
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
  getDay(): number {
    return this.day;
  }
  getMonth(): number {
    return this.month;
  }
  getYear(): number {
    return this.year;
  }

  setDay(day: number): void {
    this.day = day;
  }
  setMonth(month: number): void {
    this.month = month;
  }
  setYear(year: number): void {
    this.year = year;
  }

  private addPadding(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
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
