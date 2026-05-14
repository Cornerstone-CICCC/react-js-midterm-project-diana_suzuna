import { BrowserRouter, Route, Routes, Outlet } from "react-router";
import PageLayout from "./layouts/PageLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          {/* admin dashboard */}
          <Route path="admin_dashboard" element={<Outlet />}>
            <Route index element={<AdminDashboard />} />
          </Route>

          {/* login/signup */}
          <Route path="auth" element={<Outlet />}>
            <Route index element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
          </Route>

          <Route index element={<Home />} />
          <Route path="products" element={<Outlet />}>
            <Route index element={<ProductList />} />
            <Route path=":id" element={<ProductDetail />} />
          </Route>
          <Route path="cart" element={<Cart />} />
          <Route path="customer_dashboard" element={<CustomerDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
