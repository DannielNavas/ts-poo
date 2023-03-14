import { UpdateProductDto } from '../dtos/product.dto';
import { Product } from '../product.model';
// import { BaseHttpService } from './base-http.service';
import { ProductHttpService } from './product-http2.service';
//TODO: los genericos es mayormente para reutilizar codigo de librerias y no de productos
export class ProductCrudService {
  private endpoint = 'https://api.escuelajs.co/api/v1/products';
  // private http = new BaseHttpService<Product>(this.endpoint);
  private http = new ProductHttpService(this.endpoint);

  async update(id: Product['id'], changes: UpdateProductDto): Promise<Product> {
    // Permisos
    // Validaciones
    // Logica de negocio
    return await this.http.update(id, changes);
  }
}
