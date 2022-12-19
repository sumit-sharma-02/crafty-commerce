import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { Home } from "./components";
import { Product } from "./components";
import { Footer } from "./components";
import { AllProducts } from "./components";
// import { Search } from "./components";
// import Login from "./components/user/Login";
// import Register from "./components/user/Register";

// CSS Imports
import "./App.css";

function App() {
  return (
    <AnimatePresence mode="wait">
      <div className="flex min-h-screen flex-col">
        {/* <Search /> */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:category" element={<AllProducts />} />
          <Route path="/search/:keyword" element={<AllProducts />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
        <Footer />
        {/* <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes> */}
      </div>
    </AnimatePresence>
  );
}

export default App;
