import { createContext, useContext, useState, ReactNode, JSXElementConstructor } from 'react';
import { ShoppingCartContextProps } from '../resources/interfaces/props/shopping-cart-context.interface';
import { CartItem } from '../resources/interfaces/state/cart-item.interface';
import { ProductResponse } from '../resources/interfaces/response/product.interface';

const ShoppingCartContext = createContext<ShoppingCartContextProps | undefined>(undefined);

export const useShoppingCart = (): ShoppingCartContextProps => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error('useShoppingCart must be used within a ShoppingCartProvider');
  }
  return context;
};

export const ShoppingCartProvider: JSXElementConstructor<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addItemToCart = (product: ProductResponse) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeItemFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const incrementItemQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    );
  };

  const decrementItemQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
      )
    );
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        incrementItemQuantity,
        decrementItemQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
