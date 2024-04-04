import React, { useContext } from 'react';
import Context from '../store';
import ProductsList from '../components/ProductsList';

export default function Products() {
  const { products, setSortType } = useContext(Context);

  return (
    <div>
      Products
      <ProductsList prods={products} setSortType={setSortType} />
    </div>
  );
}
