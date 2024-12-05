import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const HeroImage = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Function to handle Login button click
  const handleLoginClick = () => {
    navigate("/login"); // Navigate to the Login page
  };

  return (
    <div className="relative h-screen bg-gray-800 flex items-center justify-center">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your image URL
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
      />
      {/* Overlay content */}
      <div className="relative text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-xl mb-6">
          Explore our amazing content and learn more about what we do!
        </p>
        <button
          className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded-lg"
          onClick={handleLoginClick} // Attach the handleLoginClick function
        >
          Login
        </button>

        {/* Register link */}
        <p className="text-sm mt-4">
          Don't you have an account?{" "}
          <a href="/register" className="text-blue-400 hover:underline">
            Click here to register
          </a>
        </p>
      </div>
    </div>
  );
};

export default HeroImage;
