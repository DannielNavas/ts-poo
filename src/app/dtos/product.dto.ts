import { Category } from '../category.model';
import { Product } from '../product.model';

// TODO: elijo los campos que quiero no sean obligatorios
export interface CreateProductDto extends Omit<Product, 'id' | 'category'> {
  categoryId: Category['id'];
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}
