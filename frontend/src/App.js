import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
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
  Payment,
  Success,
  OrdersList,
  OrderDetails,
  Dashboard,
  ProductsList,
  CreateProduct,
  UpdateProduct,
  AllOrders,
  UpdateOrder,
  UsersList,
  UpdateUser,
  Reviews,
  FAQ,
  TermsAndCondition,
} from "./components";
import { loadUser } from "./actions/user";
import store from "./store";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// CSS Imports
import "./App.css";

function App() {
  const [stripeApiKey, setStripeApiKey] = useState("");

  useEffect(() => {
    store.dispatch(loadUser());
    async function getStripeApiKey() {
      const { data } = await axios.get("/api/v1/stripe");
      setStripeApiKey(data.stripeApiKey);
    }
    getStripeApiKey();
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div className="flex min-h-screen flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Admin Protected Routes */}
          <Route
            path="/admin/dashboard"
            isAdmin={true}
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/admin/products/all"
            isAdmin={true}
            element={
              <ProtectedRoute>
                <ProductsList />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/admin/products/create"
            isAdmin={true}
            element={
              <ProtectedRoute>
                <CreateProduct />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/admin/product/:id"
            isAdmin={true}
            element={
              <ProtectedRoute>
                <UpdateProduct />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/admin/orders"
            isAdmin={true}
            element={
              <ProtectedRoute>
                <AllOrders />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/admin/order/:id"
            isAdmin={true}
            element={
              <ProtectedRoute>
                <UpdateOrder />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/admin/users"
            isAdmin={true}
            element={
              <ProtectedRoute>
                <UsersList />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/admin/user/:id"
            isAdmin={true}
            element={
              <ProtectedRoute>
                <UpdateUser />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/admin/reviews"
            isAdmin={true}
            element={
              <ProtectedRoute>
                <Reviews />
              </ProtectedRoute>
            }
          ></Route>

          {/* User Protected Routes */}
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
            path="/orders/myOrders"
            element={
              <ProtectedRoute>
                <OrdersList />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/order/:id"
            element={
              <ProtectedRoute>
                <OrderDetails />
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
          <Route
            path="/success"
            element={
              <ProtectedRoute>
                <Success />
              </ProtectedRoute>
            }
          ></Route>
          {stripeApiKey && (
            <Route
              path="/payment"
              element={
                <Elements stripe={loadStripe(stripeApiKey)}>
                  <ProtectedRoute>
                    <Payment />
                  </ProtectedRoute>
                </Elements>
              }
            ></Route>
          )}
          <Route path="/password/forgot" element={<ForgotPassword />} />
          <Route path="/password/reset/:token" element={<ResetPassword />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:category" element={<AllProducts />} />
          <Route path="/search/:keyword" element={<AllProducts />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about-us/FAQ" element={<FAQ />} />
          <Route path="/terms-and-condition" element={<TermsAndCondition />} />
        </Routes>
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App;
