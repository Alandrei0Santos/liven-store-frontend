import axios from 'axios';
import { ProductResponse } from '../interfaces/response/product.interface';

const baseURL = import.meta.env.VITE_API_BASE_URL;

export const fetchProducts = async (): Promise<ProductResponse[]> => {
  try {
    const response = await axios.get(`${baseURL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products: ', error);
    throw error;
  }
};
