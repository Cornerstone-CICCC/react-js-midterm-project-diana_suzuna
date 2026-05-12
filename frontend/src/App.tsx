import { BrowserRouter, Route, Routes, Outlet } from "react-router";
import PageLayout from "./layouts/PageLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductList from "./pages/PrpductList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Outlet />}>
            <Route index element={<ProductList />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
