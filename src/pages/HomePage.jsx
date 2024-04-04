import React, { useContext } from 'react';
import Context from '../store';
import ProductsList from '../components/ProductsList';

export default function HomePage() {
  const { products, setSortType } = useContext(Context);

  return (
    <div>
      HomePage:
      <ProductsList prods={products} setSortType={setSortType} />
    </div>
  );
}
