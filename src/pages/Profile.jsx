import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/navbar/Navbar";

const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    if (userId) {
      axios
        .get(`http://localhost:8080/user/getUser/${userId}`)
        .then((response) => {
          setUserData(response.data);
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
    alert("Profile Updated!");
  };

  const handleBack = () => {
    navigate(-1);
  };

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
      <Navbar />

      <div className="container mx-auto px-8 py-8">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Profile</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                readOnly
                value={userData.first_name}
                className="mt-1 p-2 border border-gray-300 rounded w-full bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                readOnly
                value={userData.last_name}
                className="mt-1 p-2 border border-gray-300 rounded w-full bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                readOnly
                value={userData.dob}
                className="mt-1 p-2 border border-gray-300 rounded w-full bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                readOnly
                value={userData.email}
                className="mt-1 p-2 border border-gray-300 rounded w-full bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mobile
              </label>
              <input
                type="text"
                readOnly
                value={userData.mobile}
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

          <div className="flex justify-center space-x-4 mt-6">
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
