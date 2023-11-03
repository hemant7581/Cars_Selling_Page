/* The code is a React component called "Card" that displays a list of cars with filtering and
pagination functionality. */
import { useState } from "react";
import Cars from "../data/Car_data.json";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { GoPeople } from "react-icons/Go";
import { BsSpeedometer, BsFuelPumpFill, BsHeart } from "react-icons/Bs";
import { PiSteeringWheelBold } from "react-icons/Pi";

const Card = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;

  // Function to handle changes in the search input
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page when a new search query is entered
  };

  // Filter the cars based on the search query
  const filteredCars = Cars.car.filter((car) => {
    // Perform case-insensitive search on brand and model
    return (
      car.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.model.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // Calculate the index range for the current page
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  // Function to handle pagination buttons
  const handlePageChange = (page) => {
    // Update the URL when a page is clicked
    setCurrentPage(page);
  };

  // Generate pagination buttons
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredCars.length / carsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    // for filter cars
    <div className="container my-5">
      <div className="flex flex-col items-center">
        <div className="mb-3 w-1/3 flex">
          <input
            type="text"
            className="px-4 py-2 border-none outline-none rounded-lg w-full text-start "
            placeholder="Search for cars by brand or model"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <div className="px-4 py-2 border-gray-600 outline-black bg-none text-2xl ">
            <AiOutlineSearch />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentCars.map((car) => (
            <div key={car.id} className="col-span-1">
              <div className="border rounded-lg shadow-lg">
                <img
                  src={car.Img}
                  className="w-full h-64 object-cover rounded-t-lg"
                  alt="Car"
                />
                <div className="p-4">
                  <h5 className="text-xl font-semibold mb-2 absolute">
                    {car.brand}
                  </h5>
                  <p className="text-gray-600 text-end mb-4 ">{car.year}</p>
                  <div className="flex  justify-between">
                    <div className="flex items-center">
                      <GoPeople className="text-blue-500 mr-1 text-lg" />
                      {/* Add the `text-blue-500` class to change the icon color to blue */}
                      <h6 className="text-gray-700 font-bold">{car.people}</h6>
                    </div>
                    <div className="flex items-center">
                      <BsFuelPumpFill className="text-blue-500  mr-1 text-lg" />
                      {/* Add the `text-blue-500` class to change the icon color to blue */}
                      <h6 className="text-gray-700 font-bold">{car.fuel}</h6>
                    </div>
                  </div>
                  <div className="flex justify-between mt-1  ">
                    <div className="flex items-center mb-3">
                      <BsSpeedometer className="text-blue-500 mr-1 text-lg" />
                      {/* Add the `text-blue-500` class to change the icon color to blue */}
                      <h6 className="text-gray-700 font-bold">{car.Average}</h6>
                    </div>
                    <div className="flex items-center">
                      <PiSteeringWheelBold className="text-blue-500 mr-1 text-lg " />
                      {/* Add the `text-blue-500` class to change the icon color to blue */}
                      <h6 className="text-gray-700 font-bold">{car.type}</h6>
                    </div>
                  </div>
                  <div className="flex mt-4">
                    <h1 className="text-gray-500 text-xl font-semibold">
                      {car.price}
                    </h1>
                    <div className="ml-auto flex items-center">
                      <BsHeart className="text-2xl mr-1 "/>
                      <button className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded">
                        Rent Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <nav aria-label="Page navigation fixed">
          <ul className="flex mt-4 text-center">
            {pageNumbers.map((page) => (
              <li key={page} className="mx-1">
                <Link
                  to={`/?page=${page}`}
                  className={`px-4 py-2 ${
                    currentPage === page
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Card;
