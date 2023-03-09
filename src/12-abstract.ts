import { Animal, Dog } from './09-protected';
// TODO: envia comportamiento hacia los hijos, se debe agregar la palabra abstract
const animal = new Animal('Fifi');
animal.greeting();

const snoopy = new Dog('Snoopy', 'Charlie Brown');
snoopy.greeting();
snoopy.woof(3);
