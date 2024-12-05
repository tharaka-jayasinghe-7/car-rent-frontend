import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Navbar from "../components/navbar/Navbar";

// Sample data for the cars
const carData = [
  {
    id: 1,
    type: "Car",
    model: "Toyota",
    name: "Toyota Corolla",
    price: 5000,
    description: "Reliable car",
    image:
      "https://global.toyota/pages/models/images/20191018/thumbnail/corolla_w610_01.jpg",
  },
  {
    id: 2,
    type: "Van",
    model: "Honda",
    name: "Honda Odyssey",
    price: 8000,
    description: "Spacious van",
    image:
      "https://static3.toyotabharat.com/images/homepage/services/d27-whats-awesome-547x306.jpg",
  },
  {
    id: 3,
    type: "SUV",
    model: "BMW",
    name: "BMW X5",
    price: 10000,
    description: "Luxury car",
    image:
      "https://images.dealer.com/ddc/vehicles/2025/Toyota/Camry/Sedan/trim_LE_ed6316/color/Underground-1L7-83%2C81%2C83-640-en_US.jpg?impolicy=downsize_bkpt&imdensity=1&w=520",
  },
  {
    id: 4,
    type: "Car",
    model: "Honda",
    name: "Honda Civic",
    price: 6000,
    description: "Fuel-efficient car",
    image:
      "https://scene7.toyota.eu/is/image/toyotaeurope/yaris-cross-pcp-offer:Large-Landscape?ts=1728491140700&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=png-alpha",
  },
  {
    id: 5,
    type: "Van",
    model: "Toyota",
    name: "Toyota HiAce",
    price: 7000,
    description: "Perfect for families",
    image:
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/132513/7-series-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
  },
  {
    id: 6,
    type: "SUV",
    model: "Toyota",
    name: "Toyota RAV4",
    price: 9000,
    description: "Versatile SUV",
    image: "https://media.zigcdn.com/media/model/2023/Jan/x7-1_600x400.jpg",
  },
];

const Cars = () => {
  const [selectedType, setSelectedType] = useState("All");
  const [selectedModel, setSelectedModel] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");
  const navigate = useNavigate(); // Initialize useNavigate

  // Filter and sort data
  const filteredData = carData
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
