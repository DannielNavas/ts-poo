import axios from 'axios';

(async () => {
  function delay(time: number) {
    const promise = new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
    return promise;
  }

  function getProducts() {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }

  async function getProductsAsync() {
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
    return rta.data;
  }

  console.time('delay');
  const result = await delay(3000);
  console.log(result);
  console.timeEnd('delay');

  console.log('---'.repeat(10));
  const products = await getProducts();
  console.log(products.data);

  console.log('---'.repeat(10));
  const productsAsync = await getProductsAsync();
  console.log(productsAsync);
})();
