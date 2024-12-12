import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/navbar/Navbar";

const Book = () => {
  const location = useLocation();
  const selectedCar = location.state?.selectedCar;
  console.log("Selected Car Data:", selectedCar);
  const [pickupDate, setPickupDate] = useState("");
  const [numberOfDays, setNumberOfDays] = useState(1);
  const [fullAmount, setFullAmount] = useState(
    selectedCar ? selectedCar.price : 0
  );
  const navigate = useNavigate();
  const userId = localStorage.getItem("user_id");

  const handleNumberOfDaysChange = (e) => {
    const days = parseInt(e.target.value, 10);
    setNumberOfDays(days);
    setFullAmount(days * selectedCar.price);
  };

  const handleConfirm = async () => {
    if (!pickupDate || numberOfDays <= 0) {
      alert("Please fill in all required fields.");
      return;
    }

    const bookingData = {
      pickup_date: pickupDate,
      num_of_days: numberOfDays,
      full_amount: fullAmount,
    };

    try {
      const response = await axios.post(
        `http://localhost:8080/booking/user/${userId}/car/${selectedCar.car_id}/addBooking`,
        bookingData
      );
      alert(`Booking Confirmed! Booking ID: ${response.data.booking_id}`);
      navigate("/bookings");
    } catch (error) {
      console.error("Error adding booking:", error);
      alert("Failed to confirm booking. Please try again.");
    }
  };

  const handleCancel = () => {
    alert("Booking Canceled");
    navigate("/cars");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="flex items-center justify-center pt-12">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <div className="mb-6">
            <img
              src={selectedCar?.image}
              alt={selectedCar?.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-lg font-bold">{selectedCar?.name}</h3>
            <p className="text-sm text-gray-600">{selectedCar?.description}</p>
            <p className="text-sm font-medium">
              Price for 1 day: LKR {selectedCar?.price.toLocaleString()}
            </p>
          </div>

          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Pickup Date
              </label>
              <input
                type="date"
                className="mt-1 p-2 border border-gray-300 rounded w-full"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Number of Days
              </label>
              <input
                type="number"
                min="1"
                className="mt-1 p-2 border border-gray-300 rounded w-full"
                value={numberOfDays}
                onChange={handleNumberOfDaysChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Full Amount
              </label>
              <input
                type="text"
                className="mt-1 p-2 border border-gray-300 rounded w-full bg-gray-100"
                value={`LKR ${fullAmount.toLocaleString()}`}
                readOnly
              />
            </div>
            <div className="flex justify-center space-x-4">
              <button
                type="button"
                onClick={handleConfirm}
                className="px-4 py-2 bg-sky-800 text-white rounded hover:bg-sky-700"
              >
                Confirm
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Book;
