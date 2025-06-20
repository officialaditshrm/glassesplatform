import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Wishlist from "./components/Wishlist";
import Cart from "./components/Cart";
import SliderAnimation from "./components/SliderAnimation.jsx";
import SignIn from "./components/Signin.jsx";
import SignUp from "./components/Signup.jsx";
import ChatBot from "./components/ChatBot";

const App = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSwitchToSignUp = () => {
    setShowSignIn(false);
    setShowSignUp(true);
  };

  const handleSwitchToSignIn = () => {
    setShowSignUp(false);
    setShowSignIn(true);
  };

  return (
    <Router>
      <div className="font-sans min-h-screen bg-gray-100">
        {/* Navbar */}
        <nav className="flex justify-between items-center bg-white px-6 py-4 shadow-md">
          <h1 className="text-xl font-bold text-blue-700">V-Lens</h1>
          <div className="space-x-4">
            <Link to="/wishlist" className="text-blue-600 hover:underline">
              Wishlist
            </Link>
            <Link to="/cart" className="text-blue-600 hover:underline">
              Cart
            </Link>
            <button
              onClick={() => setShowSignIn(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Sign In
            </button>
            <button
              onClick={() => setShowSignUp(true)}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Sign Up
            </button>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<SliderAnimation />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        {/* Modals */}
        {showSignIn && (
          <SignIn
            onClose={() => setShowSignIn(false)}
            onSwitch={handleSwitchToSignUp}
          />
        )}
        {showSignUp && (
          <SignUp
            onClose={() => setShowSignUp(false)}
            onSwitch={handleSwitchToSignIn}
          />
        )}
      </div>
      <div>
        <ChatBot />
      </div>
    </Router>
  );
};

export default App;
