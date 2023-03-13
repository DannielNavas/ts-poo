import { faker } from '@faker-js/faker';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { Product } from '../product.model';

export class ProductMemoryService {
  private products: Product[] = [];

  create(data: CreateProductDto): Product {
    const newProduct = {
      ...data,
      id: faker.datatype.number(),
      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        image: faker.image.imageUrl(),
        creationAt: String(new Date()),
        updatedAt: String(new Date()),
      },
    };
    return this.add(newProduct);
  }

  add(product: Product) {
    this.products.push(product);
    return product;
  }

  updatedProduct(id: string | number, changes: UpdateProductDto): Product {
    const index = this.products.findIndex((product) => product.id === id);
    const prevData = this.products[index];
    this.products[index] = {
      ...prevData,
      ...changes,
    };
    return this.products[index];
  }

  findOne(id: Product['id']): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  getAll() {
    return this.products;
  }
}
