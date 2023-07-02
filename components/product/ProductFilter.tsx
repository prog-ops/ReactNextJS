import React from 'react';

interface Product {
  category: string;
  brand: string;
}

interface ProductFilterProps {
  products: Product[];
  filters: {
    category: string;
    brand: string;
  };
  onFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = (
    {
      products,
      filters,
      onFilterChange,
    }) => {
  const uniqueCategories = Array.from(
      new Set(products.map((product) => product.category))
  );
  const uniqueBrands = Array.from(
      new Set(products.map((product) => product.brand))
  );

  return (
      <div className='flex flex-col mt-5'>
        <h3>Filter products by category and brand</h3>
        <div className='flex'>
          <div className='mr-4 mt-2'>
            <label>
              <select
                  className='rounded bg-slate-400 p-1'
                  name='category'
                  value={filters.category}
                  onChange={onFilterChange}
              >
                <option value=''>All categories</option>
                {uniqueCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                ))}
              </select>
            </label>
          </div>
          <div className='mr-4 mt-2'>
            <label>
              <select
                  className='rounded bg-slate-400 p-1'
                  name='brand'
                  value={filters.brand}
                  onChange={onFilterChange}
              >
                <option value=''>All brands</option>
                {uniqueBrands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </div>
  );
};

export default ProductFilter;
