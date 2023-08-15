import React from 'react'
import Header from '../components/Header'
import AddRestaurant from '../components/AddRestaurant'
import RestaurantsList from '../components/RestaurantsList'

const Home = () => {
  return (
    <>
      <Header />
      <AddRestaurant />
      <RestaurantsList />
    </>
  );
};

export default Home
