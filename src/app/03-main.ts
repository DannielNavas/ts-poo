import { ProductHttpService } from './services/product-http.service';
(async () => {
  //TODO: forma de atrapar errores en async/await
  try {
    const productHttpService = new ProductHttpService();

    console.log('--'.repeat(20));

    const products = await productHttpService.getAll();
    console.log(products.length);
    console.log(products.map((product) => product.title));

    console.log('--'.repeat(20));
    const productId = products[0].id;
    console.log(products[0]);
    await productHttpService.update(productId, {
      title: 'Modern Frozen Bacon - updated',
      price: 1000000,
      description: 'Modern Frozen Bacon - updated description',
    });

    console.log('--'.repeat(20));
    const rta = await productHttpService.findOne(productId);
    console.log(rta);
  } catch (error) {
    console.error(error);
  }
})();
