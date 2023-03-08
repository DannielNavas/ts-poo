export class MyDate {
  // TODO: typescript solicita que siempre se inicialien las variables
  // private year: number;
  // private month: number;
  // FIXED: readonly day: number; da error para poder modificar internamente
  // private day: number;

  constructor(
    private _year: number = new Date().getFullYear(),
    private _month: number = new Date().getMonth() + 1,
    private _day: number = new Date().getDate()
  ) {
    // TODO: no es necesario asignar las variables ya que el constructor lo resume con los accesos privados y publicos
    // this._year = year;
    // this._month = month;
    // this._day = day;
  }

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
    return `${this._year}-${month}-${day}`;
  }
  add(amount: number, type: 'days' | 'mounths' | 'years'): void {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'mounths') {
      this._month += amount;
    }
    if (type === 'years') {
      this._year += amount;
    }
  }
  get day(): number {
    return this._day;
  }
  get month(): number {
    return this._month;
  }
  get year(): number {
    return this._year;
  }

  set day(day: number) {
    this._day = day;
  }
  set month(month: number) {
    if (month >= 1 || month <= 12) {
      this._month = month;
    } else {
      throw new Error('Invalid month');
    }
  }
  set year(year: number) {
    this._year = year;
  }

  private addPadding(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  //TODO: todos los getter deben retornar algo
  get isLeapYear(): boolean {
    if (this._year % 400 === 0) return true;
    if (this._year % 100 === 0) return false;
    return this._year % 4 === 0;
  }
}

const myDate = new MyDate();
console.log(myDate.printFormat());

console.log(myDate.day);

console.log(myDate.isLeapYear);

myDate.month = 33;
console.log(myDate.month);
myDate.month = 10;
console.log(myDate.month);
