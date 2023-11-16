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
            path="/admin"
            element={<LayoutAdmin Component={AdminProductsList} />}
          />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
