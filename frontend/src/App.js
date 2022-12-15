import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/layout/Home/Home";
import Product from "./components/product/Product";
import Footer from "./components/layout/Footer";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import "./App.css";

function App() {
  return (
    <AnimatePresence mode="wait">
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
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
