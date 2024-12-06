import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar/Navbar";

// Function to format the date to "yyyy-MM-dd"
const formatDate = (date) => {
  const newDate = new Date(date);
  return newDate.toISOString().split("T")[0]; // Extract the date part (yyyy-MM-dd)
};

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);

  // Get user ID from local storage
  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    if (userId) {
      // Make an API call to get the user's bookings
      axios
        .get(`http://localhost:8080/booking/user/${userId}/getBookingByUser`)
        .then((response) => {
          setBookings(response.data); // Update state with bookings data
        })
        .catch((error) => {
          setError("Failed to load bookings. Please try again later.");
          console.error("Error fetching bookings:", error);
        });
    } else {
      setError("User not logged in.");
    }
  }, [userId]);

  const handleUpdate = (id) => {
    alert(`Update booking with id: ${id}`);
  };

  const handleCancel = (id) => {
    const updatedBookings = bookings.filter(
      (booking) => booking.bookingId !== id
    );
    setBookings(updatedBookings);
    alert(`Booking with id: ${id} has been cancelled`);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto p-6 mt-6">
        {error && <div className="text-red-600">{error}</div>}
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead className="bg-sky-900 text-white">
            <tr>
              <th className="py-2 px-4 border-b text-left">Booking ID</th>
              <th className="py-2 px-4 border-b text-left">Pickup Date</th>
              <th className="py-2 px-4 border-b text-left">Car Name</th>
              <th className="py-2 px-4 border-b text-left">Price Per Day</th>
              <th className="py-2 px-4 border-b text-left">Number Of Days</th>
              <th className="py-2 px-4 border-b text-left">Full Amount</th>
              <th className="py-2 px-4 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <tr key={booking.bookingId} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b text-black">
                    {booking.bookingId}
                  </td>
                  <td className="py-2 px-4 border-b text-black">
                    {formatDate(booking.pickupDate)}{" "}
                    {/* Formatted pickupDate */}
                  </td>
                  <td className="py-2 px-4 border-b text-black">
                    {booking.carName}
                  </td>
                  <td className="py-2 px-4 border-b text-black">
                    LKR {booking.carPricePerDay.toLocaleString()}
                  </td>
                  <td className="py-2 px-4 border-b text-black">
                    {booking.numOfDays}
                  </td>
                  <td className="py-2 px-4 border-b text-black">
                    LKR {booking.fullAmount.toLocaleString()}
                  </td>
                  <td className="py-2 px-4 border-b flex space-x-2">
                    <button
                      onClick={() => handleUpdate(booking.bookingId)}
                      className="px-4 py-2 bg-sky-800 text-white rounded-lg hover:bg-sky-700"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleCancel(booking.bookingId)}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
