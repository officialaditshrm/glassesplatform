import React, { useState } from 'react';
import SliderAnimation from './components/SliderAnimation.jsx';
import SignIn from './components/Signin.jsx';
import SignUp from './components/Signup.jsx';

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
    <div className="font-sans min-h-screen bg-gray-100">
      {/* please complete the navbar*/}
      <nav className="flex justify-between items-center bg-white px-6 py-4 shadow-md">
        <h1 className="text-xl font-bold text-blue-700">V-Lens</h1>
        <div className="space-x-4">
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


      <SliderAnimation />

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
  );
};

export default App;
