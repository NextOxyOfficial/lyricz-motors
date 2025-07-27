"use client";

import { Product, useProduct, useProducts } from "@/hooks/useProductsApi";
import { useState } from "react";

export default function ProductsDemo() {
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );
  const [filters, setFilters] = useState({
    category__name: "",
    has_variants: undefined as boolean | undefined,
    is_active: true,
  });

  // Fetch all products with filters
  const {
    products,
    loading: productsLoading,
    error: productsError,
    refetch,
  } = useProducts(filters);

  // Fetch single product details
  const {
    product,
    loading: productLoading,
    error: productError,
  } = useProduct(selectedProductId);

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
    refetch(newFilters);
  };

  const formatPrice = (price: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(parseFloat(price));
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold gradient-text mb-8">
          Products API Demo
        </h1>

        {/* Filters */}
        <div className="bg-gray-900 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <input
                type="text"
                value={filters.category__name}
                onChange={(e) =>
                  handleFilterChange({
                    ...filters,
                    category__name: e.target.value,
                  })
                }
                placeholder="Enter category name"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Has Variants
              </label>
              <select
                value={filters.has_variants?.toString() || ""}
                onChange={(e) =>
                  handleFilterChange({
                    ...filters,
                    has_variants:
                      e.target.value === ""
                        ? undefined
                        : e.target.value === "true",
                  })
                }
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
              >
                <option value="">All</option>
                <option value="true">With Variants</option>
                <option value="false">Without Variants</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Status</label>
              <select
                value={filters.is_active?.toString() || ""}
                onChange={(e) =>
                  handleFilterChange({
                    ...filters,
                    is_active:
                      e.target.value === ""
                        ? undefined
                        : e.target.value === "true",
                  })
                }
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
              >
                <option value="">All</option>
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Products List */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Products</h2>
            {productsLoading && (
              <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
                <p className="mt-2">Loading products...</p>
              </div>
            )}

            {productsError && (
              <div className="bg-red-900/20 border border-red-500 rounded-lg p-4 mb-4">
                <p className="text-red-400">Error: {productsError}</p>
              </div>
            )}

            {!productsLoading && !productsError && (
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {products.map((product: Product) => (
                  <div
                    key={product.id}
                    onClick={() => setSelectedProductId(product.id)}
                    className={`bg-gray-900 p-4 rounded-lg cursor-pointer border transition-colors ${
                      selectedProductId === product.id
                        ? "border-red-500 bg-red-900/20"
                        : "border-gray-700 hover:border-red-600/50"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">
                          {product.name}
                        </h3>
                        <p className="text-gray-400 text-sm mb-2">
                          {product.category_name}
                        </p>
                        <p className="text-gray-300 text-sm line-clamp-2">
                          {product.details}
                        </p>
                      </div>
                      <div className="text-right ml-4">
                        <p className="text-red-400 font-semibold">
                          {formatPrice(product.sell_price)}
                        </p>
                        <p className="text-gray-400 text-sm">
                          Stock: {product.stock}
                        </p>
                      </div>
                    </div>
                    {product.has_variants && (
                      <span className="inline-block bg-blue-600 text-blue-100 text-xs px-2 py-1 rounded mt-2">
                        Has Variants
                      </span>
                    )}
                  </div>
                ))}
                {products.length === 0 && (
                  <p className="text-gray-400 text-center py-8">
                    No products found
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
            {!selectedProductId && (
              <div className="bg-gray-900 p-6 rounded-lg text-center text-gray-400">
                Select a product to view details
              </div>
            )}

            {selectedProductId && productLoading && (
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
                <p className="mt-2">Loading product details...</p>
              </div>
            )}

            {selectedProductId && productError && (
              <div className="bg-red-900/20 border border-red-500 rounded-lg p-4">
                <p className="text-red-400">Error: {productError}</p>
              </div>
            )}

            {selectedProductId && product && !productLoading && (
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <span className="bg-red-600 text-white px-2 py-1 rounded text-sm">
                    {product.category_name}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-gray-400">Sell Price</p>
                    <p className="text-xl font-semibold text-red-400">
                      {formatPrice(product.sell_price)}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400">Buy Price</p>
                    <p className="text-lg">{formatPrice(product.buy_price)}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Stock</p>
                    <p className="text-lg">{product.stock}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Profit Margin</p>
                    <p className="text-lg text-green-400">
                      {product.profit_margin}%
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-gray-400 mb-2">Description</p>
                  <p className="text-gray-300">{product.details}</p>
                </div>

                <div className="mb-4">
                  <p className="text-gray-400 mb-2">Supplier</p>
                  <p className="text-gray-300">{product.supplier_name}</p>
                </div>

                <div className="mb-4">
                  <p className="text-gray-400 mb-2">Location</p>
                  <p className="text-gray-300">{product.location}</p>
                </div>

                {product.variants && product.variants.length > 0 && (
                  <div className="mb-4">
                    <p className="text-gray-400 mb-2">Variants</p>
                    <div className="space-y-1">
                      {product.variants.map((variant, index) => (
                        <div
                          key={index}
                          className="bg-gray-800 p-2 rounded text-sm"
                        >
                          {JSON.stringify(variant)}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {product.photos && product.photos.length > 0 && (
                  <div className="mb-4">
                    <p className="text-gray-400 mb-2">
                      Photos ({product.photos.length})
                    </p>
                    <div className="text-sm text-gray-300">
                      {product.photos.map((photo, index) => (
                        <div key={index} className="truncate">
                          {photo}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="text-xs text-gray-500 mt-4">
                  <p>
                    Created: {new Date(product.created_at).toLocaleDateString()}
                  </p>
                  <p>
                    Updated: {new Date(product.updated_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
