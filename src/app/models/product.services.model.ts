import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { Product } from '../product.model';

export interface ProductServices {
  getAll(): Product[];
  update(id: Product['id'], changes: UpdateProductDto): Product;
  create(dto: CreateProductDto): Product;
}
