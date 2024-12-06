import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/navbar/Navbar";

const UpdateBooking = () => {
  const location = useLocation();
  const booking = location.state?.booking; // Access the passed booking data
  const navigate = useNavigate();

  const convertToDateFormat = (pickupDate) => {
    // If the pickupDate is a datetime string (e.g., '2024-12-20 05:30:00.0')
    // Extract only the date part (yyyy-MM-dd)
    return pickupDate ? pickupDate.split(" ")[0] : "";
  };

  const [pickupDate, setPickupDate] = useState(
    convertToDateFormat(booking?.pickupDate || "")
  );
  const [numOfDays, setNumOfDays] = useState(booking?.numOfDays || "");
  const [fullAmount, setFullAmount] = useState(booking?.fullAmount || "");

  // Dynamically determine the base rate (you can modify this logic based on your requirements)
  const baseRate = booking?.carPricePerDay || 100; // Use the booking's base rate or default to 100

  // Function to update fullAmount based on numOfDays
  const calculateFullAmount = (numOfDays) => {
    return numOfDays * baseRate;
  };

  useEffect(() => {
    if (numOfDays) {
      const amount = calculateFullAmount(numOfDays);
      setFullAmount(amount); // Update the full amount when numOfDays changes
    }
  }, [numOfDays]);

  const handleUpdate = async () => {
    const updatedBooking = {
      pickup_date: pickupDate,
      num_of_days: numOfDays,
      full_amount: fullAmount,
    };

    console.log(updatedBooking); // Log the updated booking data

    try {
      await axios.put(
        `http://localhost:8080/booking/update/${booking.booking_id}`,
        updatedBooking
      );
      alert("Booking updated successfully!");
      navigate("/bookings"); // Navigate back to bookings page
    } catch (error) {
      console.error("Error updating booking:", error);
      alert("Failed to update booking. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Update Booking</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Pickup Date
              </label>
              <input
                type="date"
                value={pickupDate} // Set the value of the date picker
                onChange={(e) => setPickupDate(e.target.value)} // Update state when changed
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Number of Days
              </label>
              <input
                type="number"
                value={numOfDays}
                min={1}
                onChange={(e) => setNumOfDays(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Full Amount
              </label>
              <input
                type="text"
                value={fullAmount}
                readOnly
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>
            <button
              type="button"
              onClick={handleUpdate} // No need to pass booking as argument, it's already available
              className="px-4 py-2 bg-sky-800 text-white rounded-lg hover:bg-sky-700"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateBooking;
