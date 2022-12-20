import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  Header,
  Home,
  Product,
  Footer,
  AllProducts,
  Login,
  Register,
} from "./components";

// CSS Imports
import "./App.css";

function App() {
  const { pathname } = useLocation();
  return (
    <AnimatePresence mode="wait">
      <div className="flex min-h-screen flex-col">
        {!["/login", "/register"].includes(pathname) && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:category" element={<AllProducts />} />
          <Route path="/search/:keyword" element={<AllProducts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
        {!["/login", "/register"].includes(pathname) && <Footer />}
      </div>
    </AnimatePresence>
  );
}

export default App;
