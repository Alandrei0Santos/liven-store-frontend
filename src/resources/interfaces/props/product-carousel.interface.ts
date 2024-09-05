import { ProductResponse } from '../response/product.interface';

export interface ProductCarouselProps {
  products: ProductResponse[];
  carouselColumns: number;
}
