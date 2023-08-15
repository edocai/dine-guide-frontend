import React, { SyntheticEvent, useContext, useState } from 'react'
import RestaurantFinder from '../api/RestaurantAPI'
import { RestaurantsContext } from '../context/RestaurantsContext';

const AddRestaurant = () => {
  const {addRestaurants} = useContext(RestaurantsContext)
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('Price Range');

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post("/", {
        name,
        location,
        price_range: priceRange
      })
      addRestaurants(response.data.data.restaurant)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="mb-2 p-10 flex justify-center">
      <form action="">
        <div className="flex">
          <div className="w-full">
            <input
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              type="text"
              className="border border-gray-400 p-2"
              placeholder="Name"
              />
          </div>
          <div className="w-full">
            <input
              value={location}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)}
              className="border border-gray-400 p-2"
              type="text"
              placeholder="Location"
              />
          </div>
          <div className="w-full">
            <select
              value={priceRange}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPriceRange(e.target.value)}
              className="border border-gray-400 p-2 pb-2.5 bg-white"
              >
              <option disabled>Price Range</option>
              <option value="1">£</option>
              <option value="2">££</option>
              <option value="3">£££</option>
              <option value="4">££££</option>
              <option value="5">£££££</option>
            </select>
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md ml-2"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant
