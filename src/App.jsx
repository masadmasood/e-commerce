import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Collection from "./pages/Collection";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./pages/Collection/components/SearchBar";

const routes = [
  { path: "/", element: <Home /> },
  { path: "about", element: <About /> },
  { path: "login", element: <Login /> },
  { path: "contact", element: <Contact /> },
  { path: "collection", element: <Collection /> },
  { path: "product/:productId", element: <Product /> },
];

export default function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <SearchBar />

      <Routes>
        {routes.map((item, index) => (
          <Route key={index} path={item.path} element={item.element} />
        ))}
      </Routes>

      <Footer />
    </>
  );
}
