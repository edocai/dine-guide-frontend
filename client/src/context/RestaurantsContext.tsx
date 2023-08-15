import React, { useState, createContext, ReactNode } from 'react';

export interface Restaurant {
  id: number;
  name: string;
  location: string;
  price_range: number;
  rating: number;
  review: string;
  reviews: Restaurant[];
  restaurant: Restaurant
  count: number
  average_rating: number
}
export interface Review {
  id: number;
  name: string;
  rating: number;
  review: string;
}

export interface RestaurantsContextType {
  restaurants: Restaurant[];
  setRestaurants: React.Dispatch<React.SetStateAction<Restaurant[]>>;
  addRestaurants: (restaurant: Restaurant) => void;
  selectedRestaurant: Restaurant | null;
  setSelectedRestaurant: React.Dispatch<React.SetStateAction<Restaurant | null>>; 
}

export const RestaurantsContext = createContext<RestaurantsContextType>({
  restaurants: [],
  setRestaurants: () => { },
  addRestaurants: () => { },
  selectedRestaurant: null,
  setSelectedRestaurant: () => {},
});

export const RestaurantsContextProvider = (props: { children: ReactNode }) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  const addRestaurants = (restaurant: Restaurant) => {
    setRestaurants([...restaurants, restaurant]);
  }

  return (
    <RestaurantsContext.Provider value={{ restaurants, setRestaurants, addRestaurants, selectedRestaurant, setSelectedRestaurant }}>
      {props.children}
    </RestaurantsContext.Provider>
  );
};
