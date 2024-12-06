import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/navbar/Navbar";

const UpdateBooking = () => {
  const location = useLocation();
  const booking = location.state?.booking; // Access the passed booking data
  const navigate = useNavigate();

  const [pickupDate, setPickupDate] = useState(
    booking?.pickupDate ? booking.pickupDate.split(" ")[0] : ""
  ); // Format initial pickup date (yyyy-MM-dd)
  const [numOfDays, setNumOfDays] = useState(booking?.numOfDays || "");
  const [fullAmount, setFullAmount] = useState(booking?.fullAmount || "");
  const [carId, setCarId] = useState(null); // Store the car ID
  const baseRate = booking?.carPricePerDay || 100; // Fallback base rate if none provided

  // Retrieve user_id from local storage
  const userId = localStorage.getItem("user_id");

  // Calculate full amount when numOfDays changes
  useEffect(() => {
    if (numOfDays) {
      setFullAmount(numOfDays * baseRate);
    }
  }, [numOfDays, baseRate]);

  // Fetch car ID using car name
  useEffect(() => {
    if (booking?.carName) {
      axios
        .get(`http://localhost:8080/car/getCarByName`, {
          params: { name: booking.carName }, // Send car name as request parameter
        })
        .then((response) => {
          if (response.data?.car_id) {
            setCarId(response.data.car_id);
            console.log("Fetched car ID:", response.data.car_id);
          } else {
            console.error("Car ID not found in the response.");
          }
        })
        .catch((error) => {
          console.error("Error fetching car ID:", error);
        });
    }
  }, [booking]);

  // Handle booking update
  const handleUpdate = async () => {
    if (!pickupDate || !numOfDays || !carId || !userId) {
      alert("Please fill in all fields before updating.");
      return;
    }

    const updatedBooking = {
      pickup_date: pickupDate,
      num_of_days: numOfDays,
      full_amount: fullAmount,
    };

    try {
      await axios.put(
        `http://localhost:8080/booking/user/${userId}/car/${carId}/updateBooking/${booking.bookingId}`,
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
            {/* Pickup Date */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Pickup Date
              </label>
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>

            {/* Number of Days */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Number of Days
              </label>
              <input
                type="number"
                value={numOfDays}
                min={1}
                onChange={(e) => setNumOfDays(Number(e.target.value))}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>

            {/* Full Amount */}
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

            {/* Update Button */}
            <button
              type="button"
              onClick={handleUpdate}
              className="px-4 py-2 bg-sky-800 text-white rounded-lg hover:bg-sky-700 w-full"
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
