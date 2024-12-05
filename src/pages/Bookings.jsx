import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";

// Sample data (you can replace this with your dynamic data)
const bookingsData = [
  {
    id: 1,
    bookingDate: "2024-12-01",
    carName: "Toyota Corolla",
    carPricePerDay: 30,
    bookingDays: 5,
  },
  {
    id: 2,
    bookingDate: "2024-12-02",
    carName: "Honda Civic",
    carPricePerDay: 40,
    bookingDays: 3,
  },
  {
    id: 3,
    bookingDate: "2024-12-03",
    carName: "Ford Focus",
    carPricePerDay: 35,
    bookingDays: 7,
  },
];

const Bookings = () => {
  const [bookings, setBookings] = useState(bookingsData);

  const calculateFullAmount = (carPricePerDay, bookingDays) => {
    return carPricePerDay * bookingDays;
  };

  const handleUpdate = (id) => {
    alert(`Update booking with id: ${id}`);
  };

  const handleCancel = (id) => {
    const updatedBookings = bookings.filter((booking) => booking.id !== id);
    setBookings(updatedBookings);
    alert(`Booking with id: ${id} has been cancelled`);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto p-6 mt-6">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead className="bg-sky-900 text-white">
            <tr>
              <th className="py-2 px-4 border-b text-left">Book ID</th>
              <th className="py-2 px-4 border-b text-left">Booking Date</th>
              <th className="py-2 px-4 border-b text-left">Car Name</th>
              <th className="py-2 px-4 border-b text-left">Price Per Day</th>
              <th className="py-2 px-4 border-b text-left">Number Of Days</th>
              <th className="py-2 px-4 border-b text-left">Full Amount</th>
              <th className="py-2 px-4 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{booking.id}</td>
                <td className="py-2 px-4 border-b">{booking.bookingDate}</td>
                <td className="py-2 px-4 border-b">{booking.carName}</td>
                <td className="py-2 px-4 border-b">
                  ${booking.carPricePerDay}
                </td>
                <td className="py-2 px-4 border-b">{booking.bookingDays}</td>
                <td className="py-2 px-4 border-b">
                  $
                  {calculateFullAmount(
                    booking.carPricePerDay,
                    booking.bookingDays
                  )}
                </td>
                <td className="py-2 px-4 border-b flex space-x-2">
                  <button
                    onClick={() => handleUpdate(booking.id)}
                    className="px-4 py-2 bg-sky-700 text-white rounded-lg hover:bg-sky-800"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleCancel(booking.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
