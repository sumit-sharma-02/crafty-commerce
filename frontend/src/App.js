import { AnimatePresence } from "framer-motion";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Product";
import Footer from "./components/Footer";
// import Login from "./components/Login";
// import Register from "./components/Register";

function App() {
  return (
    <AnimatePresence mode="wait">
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}
        </Routes>
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;
