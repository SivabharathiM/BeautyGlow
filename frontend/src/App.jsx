import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";

import Products from "./pages/products";
import Cart from "./pages/cart";
import Orders from "./pages/orders";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<products />} />
        <Route path="/cart" element={<cart />} />
        <Route path="/orders" element={<orders />} />
        <Route path="/login" element={<login />} />
        <Route path="/register" element={<register />} />
      </Routes>
    </>
  );
}

export default App;