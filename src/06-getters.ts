export class MyDate {
  // TODO: typescript solicita que siempre se inicialien las variables
  // private year: number;
  // private month: number;
  // FIXED: readonly day: number; da error para poder modificar internamente
  // private day: number;

  constructor(
    public _year: number = new Date().getFullYear(),
    public _month: number = new Date().getMonth() + 1,
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

  setDay(day: number): void {
    this._day = day;
  }
  setMonth(month: number): void {
    this._month = month;
  }
  setYear(year: number): void {
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
