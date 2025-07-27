# Products API Hook

This hook provides a simple interface to interact with your products API using React hooks.

## Configuration

The hook is pre-configured with:

- **Base URL**: `http://localhost:8000/api/public` (uses port 8000 as requested)
- **API Key**: Your provided Bearer token is already included

## Available Hooks

### `useProducts(params?)`

Fetches all products with optional filtering.

```typescript
import { useProducts } from "../hooks/useProductsApi";

const { products, loading, error, refetch } = useProducts({
  category__name: "Electronics",
  has_variants: true,
  is_active: true,
});
```

**Parameters:**

- `category__name` (optional): Filter by category name
- `has_variants` (optional): Filter by products with variants (true/false)
- `is_active` (optional): Filter by active status (true/false)

**Returns:**

- `products`: Array of Product objects
- `loading`: Boolean indicating if request is in progress
- `error`: Error message string or null
- `refetch`: Function to refetch data with new parameters

### `useProduct(id)`

Fetches a single product by ID.

```typescript
import { useProduct } from "../hooks/useProductsApi";

const { product, loading, error, refetch } = useProduct(123);
```

**Parameters:**

- `id`: Product ID number or null

**Returns:**

- `product`: Single Product object or null
- `loading`: Boolean indicating if request is in progress
- `error`: Error message string or null
- `refetch`: Function to refetch the product

### `useProductsApi()`

Generic hook for making custom API requests.

```typescript
import { useProductsApi } from "../hooks/useProductsApi";

const { makeRequest } = useProductsApi();

// Custom request
const customData = await makeRequest("/products/special-endpoint/");
```

## Direct API Functions

For use outside of React components:

```typescript
import { productsApi } from "../hooks/useProductsApi";

// Get all products
const products = await productsApi.getAllProducts({
  category__name: "Motorcycles",
});

// Get single product
const product = await productsApi.getProductById(1);
```

## Product Type

```typescript
interface Product {
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
```

## Example Usage in Component

```typescript
"use client";

import { useState } from "react";
import { useProducts, useProduct } from "../hooks/useProductsApi";

export default function ProductsPage() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // Get all motorcycles
  const { products, loading, error } = useProducts({
    category__name: "Motorcycles",
    is_active: true,
  });

  // Get selected product details
  const { product: selectedProduct } = useProduct(selectedId);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Our Motorcycles</h1>
      {products.map((product) => (
        <div key={product.id} onClick={() => setSelectedId(product.id)}>
          <h3>{product.name}</h3>
          <p>{product.details}</p>
          <p>Price: ${product.sell_price}</p>
          <p>Stock: {product.stock}</p>
        </div>
      ))}

      {selectedProduct && (
        <div>
          <h2>Selected: {selectedProduct.name}</h2>
          <p>Category: {selectedProduct.category_name}</p>
          <p>Supplier: {selectedProduct.supplier_name}</p>
          <p>Profit Margin: {selectedProduct.profit_margin}%</p>
        </div>
      )}
    </div>
  );
}
```

## Demo Page

Visit `/products-demo` to see a full working example of the API hook in action with filters and product details.

## Error Handling

All hooks include comprehensive error handling:

- Network errors
- HTTP status errors
- JSON parsing errors
- API key authentication errors

Errors are returned in the `error` field of each hook's return value.

## Rate Limiting

The API includes rate limiting. If you exceed the limits, you'll receive a 429 status code which will be reflected in the error message.
