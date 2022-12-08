import { AnimatePresence } from "framer-motion";
import "./App.css";
import { Header } from "./components";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <AnimatePresence mode="wait">
      <div className="min-h-screen flex flex-col">
        <Header />
        {/* <Routes></Routes> */}
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;
