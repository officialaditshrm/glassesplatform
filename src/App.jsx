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
      
        <Header />
    
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

      
    </Router>
  );
};

export default App;