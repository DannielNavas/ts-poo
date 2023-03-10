import axios from 'axios';
import { Product } from './product.model';
// TODO: se puede asignar cualquier tipo de dato a una variable de tipo any y por esto se adigna el valor 123 a la variable bool que espera un valor booleano
let anyVar: any = 123;
let boolVar: boolean = anyVar;

(async () => {
  // TODO: aqui afuera tipa el resultado
  // async function getProducts(): Promise<Product[]> {
  //   // TODO: tipado de la respuesta de axios
  //   const { data } = await axios.get(
  //     'https://api.escuelajs.co/api/v1/products'
  //   );
  //   return data;
  // }

  async function getProducts() {
    // TODO: tipado de la respuesta de axios
    const { data } = await axios.get<Product[]>(
      'https://api.escuelajs.co/api/v1/products'
    );
    return data;
  }

  // async function getProducts() {
  //   const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
  //   //TODO: un cast de tipo (DE ESTA MANERA NO SE DEBE HACER) dado que estas forzando
  //   const data = rta.data as Product[];
  //   return data;
  // }

  console.log('---'.repeat(10));
  const products = await getProducts();
  console.log(products.map((product) => product.title));
})();
