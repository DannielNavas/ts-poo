import { ProductMemoryService } from './services/product-memory.service';

const productMemoryService = new ProductMemoryService();

productMemoryService.create({
  title: 'Producto 1',
  price: 100,
  description: 'bla bla bla',
  categoryId: 12,
  images: [],
  creationAt: '',
  updatedAt: '',
});
const products = productMemoryService.getAll();
const productId = products[0].id;

productMemoryService.update(productId, {
  title: 'cambiar nombre',
});

const rta = productMemoryService.findOne(productId);
console.log(rta);
