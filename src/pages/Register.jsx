import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    dob: "",
    email: "",
    mobile: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");

    const { confirmPassword, ...dataToSend } = formData;

    try {
      const response = await fetch("http://localhost:8080/user/addUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        throw new Error("Failed to register. Please try again.");
      }

      const result = await response.json();
      alert("Registration successful!");
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen py-8"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1606004649694-fbb8757fd6c0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      <div className="container mx-auto px-16 py-8 relative z-10">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>

          {error && (
            <div className="bg-red-100 text-red-600 p-2 rounded mb-4 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                required
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Mobile
              </label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-sky-800 text-white rounded-lg hover:bg-sky-700"
            >
              Register
            </button>
          </form>

          <p className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-blue-400 hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
