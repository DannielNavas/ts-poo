// TODO: previene multiples instacias de un objeto

export class MyService {
  static instance: MyService | null = null;

  // TODO: private constructor para el patron singleton
  private constructor(private name: string) {}

  getName() {
    return this.name;
  }
  // TODO: se crea la instancia en el metodo estatico
  //TODO: se retorna la instancia si la variable instance es null de no ser retorna la misma instancia ya creada
  static create(name: string) {
    if (MyService.instance === null) {
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}
// TODO: retorna unicamente la primera instancia creada
const myService = MyService.create('MyService');
console.log(myService.getName());

const myService2 = MyService.create('MyService2');
console.log(myService2.getName());

console.log(myService === myService2);
