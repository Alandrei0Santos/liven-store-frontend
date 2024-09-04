import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Carousel } from 'antd';
import { ProductCarouselProps } from '../resources/interfaces/props/product-carousel.interface';

// Adjust the amount of columns in the carousel
function chunkArray<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({
  products,
  carouselColumns = 2,
}) => {
  const chunkedProducts = chunkArray(products, carouselColumns);
  const gridStyle: React.CSSProperties = {
    gridTemplateColumns: `repeat(${carouselColumns}, minmax(0, 1fr))`,
  };

  return (
    <Carousel arrows>
      {chunkedProducts.map((productGroup, groupIndex) => (
        <div key={groupIndex} className="slide">
          <div style={gridStyle} className={`grid gap-4 h-full bg-[#3e3c3c]`}>
            {productGroup.map((product) => (
              <div key={product.id} className="bg-[#3e3c3c] h-[450px] grid p-6">
                <div className="flex justify-center max-h-[255px] bg-white">
                  <img
                    className="rounded-md object-contain"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className="flex flex-col justify-end">
                  <figcaption>
                    <h2 className="text-wrap">{product.title}</h2>
                    <p className="">${product.price.toFixed(2)}</p>
                  </figcaption>
                  <Button
                    tabIndex={-1}
                    type="primary"
                    shape="round"
                    icon={<ShoppingCartOutlined />}
                    size="large"
                  >
                    Add to Cart
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
