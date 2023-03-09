console.log(Math.PI);
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

export class MyMath {
  // TODO: es estatica y de solo lectura
  static readonly PI: number = 3.1416;

  static max(...numbers: number[]): number {
    return numbers.reduce((max, current) => (current > max ? current : max));
  }
}

console.log(MyMath.PI);
const numbers = [-1, -8, -9, -10];
console.log(MyMath.max(...numbers));
