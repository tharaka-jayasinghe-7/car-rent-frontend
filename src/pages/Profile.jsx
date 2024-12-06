import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import axios from "axios";
import Navbar from "../components/navbar/Navbar";

const Profile = () => {
  const navigate = useNavigate(); // For navigating back
  const [userData, setUserData] = useState(null); // State to hold user data
  const [error, setError] = useState(null); // State for errors during API call

  // Get user ID from local storage or from the URL
  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    if (userId) {
      // Fetch user data from API
      axios
        .get(`http://localhost:8080/user/getUser/${userId}`)
        .then((response) => {
          setUserData(response.data); // Set the state with user data
        })
        .catch((error) => {
          setError("Failed to load user data. Please try again later.");
          console.error("Error fetching user data:", error);
        });
    } else {
      setError("User ID is missing.");
    }
  }, [userId]);

  const handleUpdate = () => {
    alert("Profile Updated!"); // Placeholder for update action
    // Add logic to submit form data or update user profile
  };

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  // If userData is not loaded yet or there's an error, show loading or error message
  if (!userData) {
    return (
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <div className="container mx-auto p-6">
          <div className="bg-white shadow-lg rounded-lg p-8">
            {error ? (
              <p className="text-red-600">{error}</p>
            ) : (
              <p>Loading user data...</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      <div className="container mx-auto px-8 py-8">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">Profile</h2>

          {/* Profile Form */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                value={userData.first_name}
                readOnly
                className="mt-1 p-2 border border-gray-300 rounded w-full bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                value={userData.last_name}
                readOnly
                className="mt-1 p-2 border border-gray-300 rounded w-full bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                value={userData.dob}
                readOnly
                className="mt-1 p-2 border border-gray-300 rounded w-full bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={userData.email}
                readOnly
                className="mt-1 p-2 border border-gray-300 rounded w-full bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mobile
              </label>
              <input
                type="text"
                value={userData.mobile}
                readOnly
                className="mt-1 p-2 border border-gray-300 rounded w-full bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <textarea
                value={userData.address}
                readOnly
                className="mt-1 p-2 border border-gray-300 rounded w-full bg-gray-100"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4 mt-6">
            <button
              onClick={handleUpdate}
              className="px-6 py-2 bg-sky-800 text-white rounded hover:bg-sky-700"
            >
              Update
            </button>
            <button
              onClick={handleBack}
              className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
