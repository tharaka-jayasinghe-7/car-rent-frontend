import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate(); // Optional, for redirecting after login

  // State to hold form input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!email || !password) {
      setError("Please fill in both fields");
      return;
    }

    try {
      // Make a POST request with axios
      const response = await axios.post("http://localhost:8080/user/login", {
        email,
        password,
      });

      // If login is successful
      if (response.status === 200) {
        const userData = response.data;

        // Save user data to local storage
        localStorage.setItem("user_id", userData.user_id);
        localStorage.setItem("user_email", userData.email);

        // Redirect to another page (e.g., dashboard)
        navigate("/cars");
      }
    } catch (error) {
      // Handle errors, such as invalid credentials
      if (error.response && error.response.data) {
        setError(error.response.data || "Login failed");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1662719940099-7892662c2031?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

          {/* Error message */}
          {error && (
            <div className="bg-red-100 text-red-600 p-2 rounded mb-4 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Email input */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>

            {/* Password input */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full py-2 bg-sky-800 text-white rounded-lg hover:bg-sky-700"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-center text-sm">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-400 hover:underline">
              Click here to register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
