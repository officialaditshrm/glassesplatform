import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Wishlist from './components/Wishlist';
import Cart from './components/Cart';
import SliderAnimation from './components/SliderAnimation.jsx';
import SignIn from './components/Signin.jsx';
import SignUp from './components/Signup.jsx';
import Header from './components/Header.jsx';
import TrackOrder from './components/TrackOrder';
import FooterSection from './components/FooterSection';

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
      <div className="font-sans min-h-screen bg-gray-100 flex flex-col">
        {/* Header */}
        <Header />
        
        {/* Main Header with Navigation */}
        <div className="main-header bg-white shadow-md">
          <div className="header-content">
            <nav className="flex justify-between items-center px-6 py-4">
              <h1 className="text-xl font-bold text-blue-700">V-Lens</h1>
              
              {/* Header Actions */}
              <div className="header-actions flex items-center space-x-4">
                <TrackOrder />
                <Link 
                  to="/wishlist" 
                  className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
                >
                  Wishlist
                </Link>
                <Link 
                  to="/cart" 
                  className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors"
                >
                  Cart
                </Link>
                <button 
                  onClick={() => setShowSignIn(true)} 
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Sign In
                </button>
                <button 
                  onClick={() => setShowSignUp(true)} 
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                >
                  Sign Up
                </button>
              </div>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-grow min-h-[50vh] py-10">
          <div className="max-w-6xl mx-auto px-5 text-center">
            <Routes>
              <Route path="/" element={<SliderAnimation />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <FooterSection />

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
    </Router>
  );
};

export default App;