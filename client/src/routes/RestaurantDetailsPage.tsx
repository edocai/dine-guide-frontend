import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { RestaurantsContext } from '../context/RestaurantsContext';
import RestaurantAPI from '../api/RestaurantAPI';
import Reviews from '../components/Reviews';
import AddReview from '../components/AddReview';

const RestaurantDetailsPage = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantsContext);

  useEffect(() => {
    try {      
      const fetchData =async () => {
        const response = await RestaurantAPI.get(`/${id}`);
        setSelectedRestaurant(response.data.data);
      }
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [])

  return (
    <>
      {selectedRestaurant && (
        <>
          <h1 className='text-center text-6xl mt-2 mb-8 text-white'>{selectedRestaurant.restaurant.name}</h1>
          <div className='text-center mt-2'>
            <Reviews reviews={selectedRestaurant.reviews} />
          </div>
          <AddReview />
        </>
      )}
    </>
  );
};

export default RestaurantDetailsPage
