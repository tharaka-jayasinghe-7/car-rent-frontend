import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import Navbar from "../components/navbar/Navbar";

const Profile = () => {
  const navigate = useNavigate(); // For navigating back

  // Sample user data (you can fetch this from an API or state)
  const [userData] = useState({
    firstName: "John",
    lastName: "Doe",
    dob: "1990-01-01",
    email: "johndoe@example.com",
    mobile: "123-456-7890",
    address: "123 Main St, City, Country",
  });

  // Handle update (can be expanded to handle form submission)
  const handleUpdate = () => {
    alert("Profile Updated!"); // Placeholder for update action
    // You can add logic to submit form data or update user profile
  };

  // Navigate back to the previous page or homepage
  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

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
                value={userData.firstName}
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
                value={userData.lastName}
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
