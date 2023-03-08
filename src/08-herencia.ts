export class Animal {
  constructor(public name: string) {}

  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m`);
  }

  greeting(): string {
    return `Hello, I'm ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(name: string, public awner: string) {
    // TODO: para hacer referencia a la clase padre (heredada) se usa SUPER
    super(name);
  }

  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log('Woof!');
    }
  }
}

const fifi = new Animal('Fifi');
console.log(fifi.greeting());
fifi.move(10);

const snoopy = new Dog('Snoopy', 'Charlie Brown');
console.log(snoopy.greeting());
snoopy.move(10);
snoopy.woof(3);
console.log(snoopy.awner);
