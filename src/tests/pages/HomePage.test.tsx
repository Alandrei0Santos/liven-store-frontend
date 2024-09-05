import { act, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import HomePage from '../../pages/HomePage';
import { fetchProducts } from '../../resources/api/product.api';
import { ProductResponse } from '../../resources/interfaces/response/product.interface';
import { ShoppingCartProvider } from '../../context/ShoppingCartContext'; // Import your provider

vi.mock('../../resources/api/product.api');

const mockProducts: ProductResponse[] = [
  { id: 1, title: 'Product 1', price: 10, image: 'image1.jpg' },
  { id: 2, title: 'Product 2', price: 20, image: 'image2.jpg' },
];

const renderWithProviders = (ui: React.ReactElement) => {
  return render(<ShoppingCartProvider>{ui}</ShoppingCartProvider>);
};

describe('HomePage component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('displays loading state initially', async () => {
    vi.mocked(fetchProducts).mockImplementationOnce(() => new Promise(() => {}));

    await act(async () => {
      renderWithProviders(<HomePage />);
    });

    await waitFor(() => expect(screen.getByText(/loading/i)).toBeInTheDocument());
  });

  test('displays products when fetch is successful', async () => {
    vi.mocked(fetchProducts).mockResolvedValueOnce(mockProducts);

    await act(async () => {
      renderWithProviders(<HomePage />);
    });
    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());

    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
  });

  test('displays error message when fetch fails', async () => {
    const consoleError = console.error;
    console.error = vi.fn();
    vi.mocked(fetchProducts).mockRejectedValueOnce(new Error('Failed to load products'));

    await act(async () => {
      renderWithProviders(<HomePage />);
    });

    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());

    await act(async () => {
      expect(screen.getByText('Failed to load products.')).toBeInTheDocument();
    });
    console.error = consoleError;
  });

  test('updates carousel columns based on window width', async () => {
    vi.mocked(fetchProducts).mockResolvedValueOnce(mockProducts);

    await act(async () => {
      renderWithProviders(<HomePage />);
    });

    await act(async () => {
      window.innerWidth = 500;
      window.dispatchEvent(new Event('resize'));
    });

    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());

    const productElements = screen.getAllByText('Product 1');
    expect(productElements.length).toBeGreaterThan(0);

    await act(async () => {
      window.innerWidth = 800;
      window.dispatchEvent(new Event('resize'));
    });

    await waitFor(() => {
      expect(screen.getByText('Product 1')).toBeInTheDocument();
      expect(screen.getByText('Product 2')).toBeInTheDocument();
    });
  });
});
