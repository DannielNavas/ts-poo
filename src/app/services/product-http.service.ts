import axios from 'axios';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { ProductServices } from '../models/product.services.model';
import { Product } from '../product.model';

export class ProductHttpService implements ProductServices {
  private url = 'https://api.escuelajs.co/api/v1/products';
  async getAll(): Promise<Product[]> {
    const { data } = await axios.get<Product[]>(this.url);
    return data;
  }
  async update(id: Product['id'], changes: UpdateProductDto): Promise<Product> {
    const { data } = await axios.put<Product>(`${this.url}/${id}`, changes);
    return data;
  }
  async create(dto: CreateProductDto): Promise<Product> {
    const { data } = await axios.post<Product>(this.url, dto);
    return data;
  }
  async findOne(id: Product['id']): Promise<Product | undefined> {
    const { data } = await axios.get<Product>(`${this.url}/${id}`);
    return data;
  }
}
