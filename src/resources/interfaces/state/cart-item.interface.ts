import { ProductResponse } from '../response/product.interface';

export interface CartItem extends ProductResponse {
  quantity: number;
}
