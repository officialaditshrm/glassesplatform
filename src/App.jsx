import React from "react";
import Wishlist from "./components/Wishlist";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/wishlist" element={<Wishlist />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </Router>
  )
}

export default App