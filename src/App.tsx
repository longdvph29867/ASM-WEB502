import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import LayoutAdmin from "./Layout/LayoutAdmin";
import AdminProductsList from "./pages/AdminProductsList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout Component={HomePage} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/admin"
            element={<LayoutAdmin Component={AdminProductsList} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
