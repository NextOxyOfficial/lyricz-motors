import { useCallback, useEffect, useState } from "react";

// Base configuration
const BASE_URL = "http://localhost:8000/api/public";
const API_KEY = "pak_p3biz72koaf667qpzbz8antbzmjieycv";

// Types
export interface Product {
  id: number;
  name: string;
  details: string;
  location: string;
  category_name: string;
  supplier_name: string;
  has_variants: boolean;
  buy_price: string;
  sell_price: string;
  stock: number;
  profit_margin: number;
  total_stock: number;
  main_photo: string | null;
  photos: string[];
  variants: any[];
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ProductsQueryParams {
  category__name?: string;
  has_variants?: boolean;
  is_active?: boolean;
}

interface UseProductsApiState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

interface UseProductApiState {
  product: Product | null;
  loading: boolean;
  error: string | null;
}

// API utility functions
const createHeaders = () => ({
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
});

const buildQueryString = (params: ProductsQueryParams): string => {
  const searchParams = new URLSearchParams();

  if (params.category__name) {
    searchParams.append("category__name", params.category__name);
  }

  if (params.has_variants !== undefined) {
    searchParams.append("has_variants", params.has_variants.toString());
  }

  if (params.is_active !== undefined) {
    searchParams.append("is_active", params.is_active.toString());
  }

  const queryString = searchParams.toString();
  return queryString ? `?${queryString}` : "";
};

// Hook for fetching all products
export const useProducts = (params: ProductsQueryParams = {}) => {
  const [state, setState] = useState<UseProductsApiState>({
    products: [],
    loading: true,
    error: null,
  });

  const fetchProducts = useCallback(
    async (queryParams: ProductsQueryParams = {}) => {
      setState((prev) => ({ ...prev, loading: true, error: null }));

      try {
        const queryString = buildQueryString(queryParams);
        const response = await fetch(`${BASE_URL}/products/${queryString}`, {
          method: "GET",
          headers: createHeaders(),
        });

        if (!response.ok) {
          throw new Error(
            `Failed to fetch products: ${response.status} ${response.statusText}`
          );
        }

        const data: Product[] = await response.json();
        setState({
          products: data,
          loading: false,
          error: null,
        });
      } catch (error) {
        setState((prev) => ({
          ...prev,
          loading: false,
          error:
            error instanceof Error
              ? error.message
              : "An unknown error occurred",
        }));
      }
    },
    []
  );

  useEffect(() => {
    fetchProducts(params);
  }, [fetchProducts, params]);

  const refetch = useCallback(
    (newParams?: ProductsQueryParams) => {
      fetchProducts(newParams || params);
    },
    [fetchProducts, params]
  );

  return {
    ...state,
    refetch,
  };
};

// Hook for fetching a single product by ID
export const useProduct = (id: number | null) => {
  const [state, setState] = useState<UseProductApiState>({
    product: null,
    loading: false,
    error: null,
  });

  const fetchProduct = useCallback(async (productId: number) => {
    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const response = await fetch(`${BASE_URL}/products/${productId}/`, {
        method: "GET",
        headers: createHeaders(),
      });

      if (!response.ok) {
        throw new Error(
          `Failed to fetch product: ${response.status} ${response.statusText}`
        );
      }

      const data: Product = await response.json();
      setState({
        product: data,
        loading: false,
        error: null,
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      }));
    }
  }, []);

  useEffect(() => {
    if (id !== null) {
      fetchProduct(id);
    } else {
      setState({
        product: null,
        loading: false,
        error: null,
      });
    }
  }, [id, fetchProduct]);

  const refetch = useCallback(() => {
    if (id !== null) {
      fetchProduct(id);
    }
  }, [id, fetchProduct]);

  return {
    ...state,
    refetch,
  };
};

// Generic API utility hook for custom requests
export const useProductsApi = () => {
  const makeRequest = useCallback(
    async <T = any>(
      endpoint: string,
      options: RequestInit = {}
    ): Promise<T> => {
      const url = `${BASE_URL}${
        endpoint.startsWith("/") ? endpoint : `/${endpoint}`
      }`;

      const response = await fetch(url, {
        ...options,
        headers: {
          ...createHeaders(),
          ...options.headers,
        },
      });

      if (!response.ok) {
        throw new Error(
          `API request failed: ${response.status} ${response.statusText}`
        );
      }

      return response.json();
    },
    []
  );

  return { makeRequest };
};

// Export utility functions for direct use
export const productsApi = {
  getAllProducts: async (
    params: ProductsQueryParams = {}
  ): Promise<Product[]> => {
    const queryString = buildQueryString(params);
    const response = await fetch(`${BASE_URL}/products/${queryString}`, {
      method: "GET",
      headers: createHeaders(),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch products: ${response.status} ${response.statusText}`
      );
    }

    return response.json();
  },

  getProductById: async (id: number): Promise<Product> => {
    const response = await fetch(`${BASE_URL}/products/${id}/`, {
      method: "GET",
      headers: createHeaders(),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch product: ${response.status} ${response.statusText}`
      );
    }

    return response.json();
  },
};
