import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import {
  Header,
  Home,
  Product,
  Footer,
  AllProducts,
  Login,
  Register,
  Profile,
  ProtectedRoute,
  UpdateProfile,
  UpdatePassword,
  ForgotPassword,
  ResetPassword,
  Cart,
  Shipping,
  Order,
} from "./components";
import { loadUser } from "./actions/user";
import store from "./store";

// CSS Imports
import "./App.css";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div className="flex min-h-screen flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/profile/update"
            element={
              <ProtectedRoute>
                <UpdateProfile />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/password/update"
            element={
              <ProtectedRoute>
                <UpdatePassword />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/shipping"
            element={
              <ProtectedRoute>
                <Shipping />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/order/confirm"
            element={
              <ProtectedRoute>
                <Order />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/password/forgot" element={<ForgotPassword />} />
          <Route path="/password/reset/:token" element={<ResetPassword />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:category" element={<AllProducts />} />
          <Route path="/search/:keyword" element={<AllProducts />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/checkout" element={<Checkout />} /> */}
        </Routes>
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;
