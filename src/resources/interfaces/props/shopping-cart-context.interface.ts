import { ProductResponse } from '../response/product.interface';
import { CartItem } from '../state/cart-item.interface';

export interface ShoppingCartContextProps {
  cartItems: CartItem[];
  addItemToCart: (product: ProductResponse) => void;
  removeItemFromCart: (id: number) => void;
  incrementItemQuantity: (id: number) => void;
  decrementItemQuantity: (id: number) => void;
}
