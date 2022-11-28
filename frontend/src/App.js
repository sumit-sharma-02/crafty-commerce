import { AnimatePresence } from "framer-motion";
import "./App.css";
import { Header } from "./components";

function App() {
  return (
    <AnimatePresence mode="wait">
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
      </div>
    </AnimatePresence>
  );
}

export default App;
