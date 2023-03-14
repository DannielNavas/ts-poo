import { Dog } from './09-protected';
// function getValue(value: number | string) {
//   return value;
// }

// function getValue(value: unknown) {
//   return value;
// }
// TODO: tipado como parametro ejemplo el Promise<tipado>, el nombre del generico puede ser cualquiera
function getValue<myType>(value: myType) {
  return value;
}

getValue<number>(12).toFixed();
getValue<string>('12').toLowerCase();
getValue<number[]>([]).push(1);

const fifi = new Dog('Fifi', 'Charlie Brown');
getValue<Dog>(fifi).greeting();
