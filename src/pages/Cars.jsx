import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Navbar from "../components/navbar/Navbar";
import axios from "axios"; // Import Axios

const Cars = () => {
  const [cars, setCars] = useState([]); // State to hold car data
  const [selectedType, setSelectedType] = useState("All");
  const [selectedModel, setSelectedModel] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");
  const navigate = useNavigate(); // Initialize useNavigate

  // Fetch data from backend
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("http://localhost:8080/getCars");
        setCars(response.data); // Update state with fetched cars
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, []); // Empty dependency array to fetch data only once

  // Filter and sort data
  const filteredData = cars
    .filter((car) =>
      selectedType === "All" ? true : car.type === selectedType
    )
    .filter((car) =>
      selectedModel === "All" ? true : car.model === selectedModel
    )
    .sort((a, b) => {
      if (sortOrder === "low-to-high") return a.price - b.price;
      if (sortOrder === "high-to-low") return b.price - a.price;
      return 0;
    });

  // Handle button click to navigate to booking page
  const handleBookNowClick = () => {
    navigate("/book"); // Navigate to /book route
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Filters */}
          <div className="flex space-x-4">
            <select
              className="p-2 border border-gray-300 rounded"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="All">Vehicle Type: All</option>
              <option value="Car">Car</option>
              <option value="Van">Van</option>
              <option value="SUV">SUV</option>
            </select>
            <select
              className="p-2 border border-gray-300 rounded"
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
            >
              <option value="All">Model: All</option>
              <option value="Toyota">Toyota</option>
              <option value="Honda">Honda</option>
              <option value="BMW">BMW</option>
            </select>
          </div>
          {/* Sort */}
          <div className="flex items-center mt-4 md:mt-0">
            <select
              className="p-2 border border-gray-300 rounded"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="default">Default Sorting</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </div>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((car) => (
            <div key={car.id} className="bg-white shadow rounded p-4">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-lg font-bold">{car.name}</h3>
              <p className="text-sm text-gray-600">{car.description}</p>
              <p className="text-sm font-medium">
                Price for 1 day: LKR {car.price.toLocaleString()}
              </p>
              <button
                onClick={handleBookNowClick} // Trigger navigation on button click
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
