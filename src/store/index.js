import { createContext, useEffect, useState } from 'react';

const Context = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [sortType, setSortType] = useState('asc');
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?sort=${sortType}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, [sortType]);
  //
  return (
    <Context.Provider value={{ products, setSortType }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
