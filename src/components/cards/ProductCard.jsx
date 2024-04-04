import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ prod }) {
  return (
    <div>
      <ul>
        <li>{prod.title}</li>
        <img src={prod.image} alt={prod.title} width={200} height={200} />
        <h2>{prod.price}</h2>
        <button>Add to cart</button>
        <Link to={`products/${prod.id}`}>See More about this products</Link>
      </ul>
    </div>
  );
}
