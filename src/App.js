import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import { ProductsProvider } from './store';
import ProductDetails from './components/ProductDetails';
function App() {
  return (
    <>
      <ProductsProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:id' element={<ProductDetails />} />
          </Routes>
        </BrowserRouter>
      </ProductsProvider>
    </>
  );
}

export default App;
