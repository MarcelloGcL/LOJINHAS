import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { paths } from "./paths.js";

const Home = lazy(() => import("../pages/Home/Home.jsx"));
const Auth = lazy(() => import("../pages/Auth/Auth.jsx"));
const Payments = lazy(() => import("../pages/Payments/Payments.jsx"));
const Product = lazy(() => import("../pages/ProductDetails/ProductDetails.jsx"));
const Category = lazy(() => import("../pages/Category/Category.jsx"));
const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard.jsx"));

function AppRoutes() {
  return (
    <Router>
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path={paths.public.home} element={<Home />} />
          <Route path={paths.public.auth} element={<Auth />} />
          <Route path={paths.public.payments} element={<Payments />} />
          <Route path={paths.public.productDetails} element={<Product />} />
          <Route path={paths.public.categoryName} element={<Category />} />
          <Route path={paths.private.dashboard} element={<Dashboard />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default AppRoutes;