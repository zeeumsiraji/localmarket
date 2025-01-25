import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';
import { Navigate, Route, Routes } from 'react-router-dom'; // Switch -> Routes, Redirect -> Navigate
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Singin from './components/Singin';
import Singup from './components/Singup';

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* হোমপেজ */}
        <Route path="/" element={<Home />} />
        
        {/* সাইন ইন এবং সাইন আপ */}
        <Route path="/singin" element={<Singin />} />
        <Route path="/signup" element={<Singup />} />
        
        {/* প্রোডাক্ট সম্পর্কিত */}
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        
        {/* কার্ট এবং চেকআউট */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        
        {/* অন্যান্য পেজ */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* যেকোনো ভুল URL-এ হোমপেজে রিডাইরেক্ট করবে */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
