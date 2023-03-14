import { Product } from '../product.model';
import { BaseHttpService } from './base-http.service';

export class ProductHttpService extends BaseHttpService<Product> {
  otroRequest() {
    this.url;
  }
}
