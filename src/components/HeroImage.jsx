import React from "react";
import { useNavigate } from "react-router-dom";

const HeroImage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="relative h-screen bg-gray-800 flex items-start justify-center pt-20">
      <img
        src="https://images.unsplash.com/photo-1638731042030-2f298bdb931b?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
      />

      <div className="relative text-center text-white px-4 mt-10">
        <h1 className="text-5xl font-bold mb-4">Welcome to Luxury R</h1>
        <p className="text-xl mb-6">
          This is the best place to rent a car to begin your journey!
        </p>
        <button
          className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded-lg"
          onClick={handleLoginClick}
        >
          Login
        </button>

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
