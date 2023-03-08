export class Animal {
  // TODO: protected permite que la variable sea accesible desde la clase padre y las clases hijas (heredadas)
  constructor(protected name: string) {}

  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m`);
  }

  greeting(): string {
    return `Hello, I'm ${this.name}`;
  }
  protected doSomething() {
    console.log('I am doing something');
  }
}

export class Dog extends Animal {
  constructor(name: string, public awner: string) {
    // TODO: para hacer referencia a la clase padre (heredada) se usa SUPER
    // TODO: se llama al constructor de la clase padre
    // TODO: solo se llama desde el constructor del hijo
    super(name);
  }

  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log(`Woof! ${this.name} says!`);
    }
    this.doSomething();
  }
  // TODO: se puede sobreescribir el metodo de la clase padre
  move(distance?: number): void {
    console.log('Gonna move as a dog');
    // TODO: se llama al metodo de la clase padre
    super.move(distance);
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
// TODO: no se puede acceder a la variable name, ya que tiene el modificador protected
// snoopy.name = 'Snoopy Jr.';
snoopy.woof(3);
// TODO: no se puede acceder al metodo doSomething, ya que tiene el modificador protected
// snoopy.doSomething();
snoopy.move(10);
