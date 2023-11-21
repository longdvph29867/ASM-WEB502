import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AdminProductsList from "./pages/AdminProductsList";
import LayoutAdmin from "./Layout/LayoutAdmin";
import PortfolioPage from "./pages/PortfolioPage";
import { ToastContainer } from "react-toastify";
import Spinner from "./components/Spinner";
import AddProduct from "./pages/AdminAddProduct";
import UpdateProduct from "./pages/AdminUpdateProduct";
import DetailPage from "./pages/DetailPage/DetailPage";
import ListProductPage from "./pages/ListProductPage";

function App() {
  return (
    <>
      <Spinner />
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout Component={HomePage} />} />
          <Route path="/login" element={<LoginPage action={"login"} />} />
          <Route path="/singup" element={<LoginPage action={"singup"} />} />
          <Route
            path="/products/:slug"
            element={<Layout Component={DetailPage} />}
          />
          <Route
            path="/products"
            element={<Layout Component={ListProductPage} />}
          />
          <Route
            path="/admin/products"
            element={<LayoutAdmin Component={AdminProductsList} />}
          />
          <Route
            path="/admin/products/add"
            element={<LayoutAdmin Component={AddProduct} />}
          />
          <Route
            path="/admin/products/update/:slug"
            element={<LayoutAdmin Component={UpdateProduct} />}
          />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
