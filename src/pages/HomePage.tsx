import { useState, useEffect } from 'react';
import { ProductCarousel } from '../components/ProductCarousel';
import { fetchProducts } from '../resources/api/product.api';
import { ProductResponse } from '../resources/interfaces/response/product.interface';

export default function HomePage() {
  const [products, setProducts] = useState<ProductResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [carouselColumns, setCarouselColumns] = useState(4);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (e) {
        setError('Failed to load products.');
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  useEffect(() => {
    // Function to update the number of carousel columns based on the window width
    const updateCarouselColumns = () => {
      if (window.innerWidth < 600) {
        setCarouselColumns(1);
      } else if (window.innerWidth < 1000) {
        setCarouselColumns(2);
      } else {
        setCarouselColumns(4);
      }
    };

    updateCarouselColumns();
    window.addEventListener('resize', updateCarouselColumns);

    return () => {
      window.removeEventListener('resize', updateCarouselColumns);
    };
  }, []);

  return (
    <>
      <section aria-labelledby="products-heading">
        <header className="mb-5">
          <h1 id="products-heading">Products available {`🛍️`}</h1>
        </header>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <ProductCarousel products={products} carouselColumns={carouselColumns} />
        )}
      </section>
    </>
  );
}
