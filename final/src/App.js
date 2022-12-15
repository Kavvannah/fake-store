import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from './components/Products';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route exact path="/products" element={<Products/>} />
            <Route exact path="/products/:id" element={<ProductDetails/>} />
        </Routes>
    </>
  );
}

export default App;
