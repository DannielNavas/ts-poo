import axios from 'axios';
import { Category } from '../category.model';
import { UpdateProductDto } from '../dtos/product.dto';
import { Product } from '../product.model';
export class BaseHttpService<TypeClass> {
  // data: TypeClass[] = [];
  constructor(protected url: string) {}
  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }
  async update<ID, DTO>(id: ID, changes: DTO): Promise<Product> {
    const { data } = await axios.put<Product>(`${this.url}/${id}`, changes);
    return data;
  }
}

// const service = new BaseHttpService<string>();
// service.data.push('1');
// service.getAll();

// const service1 = new BaseHttpService<Category>();
// service1.data.push(1);

(async () => {
  const productService = new BaseHttpService<Product>(
    'https://api.escuelajs.co/api/v1/products'
  );

  console.log(await (await productService.getAll()).length);

  productService.update<Product['id'], UpdateProductDto>(1, { title: 'test' });

  const categoryService = new BaseHttpService<Category>(
    'https://api.escuelajs.co/api/v1/categories'
  );

  console.log(await (await categoryService.getAll()).length);
})();
