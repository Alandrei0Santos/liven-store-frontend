import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Carousel } from 'antd';
import { ProductCarouselProps } from '../resources/interfaces/props/product-carousel.interface';
import { JSXElementConstructor } from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';

// Adjust the amount of columns in the carousel
function chunkArray<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export const ProductCarousel: JSXElementConstructor<ProductCarouselProps> = ({
  products = [],
  carouselColumns = 2,
}) => {
  const chunkedProducts = chunkArray(products, carouselColumns);
  const gridStyle: React.CSSProperties = {
    gridTemplateColumns: `repeat(${carouselColumns}, minmax(0, 1fr))`,
  };

  const { addItemToCart, removeItemFromCart, cartItems } = useShoppingCart();

  const isItemAlreadyInCart = (productId: number) => {
    return cartItems.some((item) => item.id === productId);
  };

  return (
    <Carousel className="h-full" arrows>
      {chunkedProducts.map((productGroup, groupIndex) => (
        <div key={groupIndex}>
          <div style={gridStyle} className={`grid gap-4 h-full bg-[#3e3c3c]`}>
            {productGroup.map((product) => (
              <div key={product.id} className="bg-[#3e3c3c] max-h-[450px] grid p-6">
                {/* Product pic */}
                <div className="flex rounded-md justify-center max-h-[255px] bg-white">
                  <img className="object-contain" src={product.image} alt={product.title} />
                </div>
                {/* Product title and price */}
                <div className="flex flex-col justify-end">
                  <figcaption>
                    <h2>{product.title}</h2>
                    <p className="text-3xl">${product.price.toFixed(2)}</p>
                  </figcaption>
                  {/* Add/Remove item button */}
                  <Button
                    onClick={() => {
                      if (isItemAlreadyInCart(product.id)) {
                        removeItemFromCart(product.id);
                      } else {
                        addItemToCart(product);
                      }
                    }}
                    tabIndex={-1}
                    type="primary"
                    shape="round"
                    icon={<ShoppingCartOutlined />}
                    size="large"
                    // Conditionally apply "danger" color
                    danger={isItemAlreadyInCart(product.id)}
                  >
                    {isItemAlreadyInCart(product.id) ? 'Remove from Cart' : 'Add to Cart'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Carousel>
  );
};
