import { useState, useEffect } from 'react';
import { ProductCarousel } from '../component/ProductCarousel';
import { fetchProducts } from '../resources/api/product.api';
import { ProductResponse } from '../resources/interfaces/response/product.interface';

export default function HomePage() {
  const [products, setProducts] = useState<ProductResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const carouselColumns = 2;

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

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="w-[800px]">
      <ProductCarousel products={products} carouselColumns={carouselColumns} />
    </div>
  );
}
