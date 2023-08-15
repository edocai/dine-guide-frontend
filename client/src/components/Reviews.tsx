import React from 'react'
import Ratings from './Ratings';

interface Review {
  id: number;
  name: string;
  rating: number;
  review: string;
}

interface ReviewsProp {
  reviews: Review[];
}


const Reviews: React.FC<ReviewsProp> = ({ reviews }) => {
  return (
    <div className="flex flex-wrap m-4">
      {reviews.map((review) => {
        return (
          <div
            key={review.id}              
            className="bg-blue-500 text-white w-1/3 p-4 rounded-md shadow-md mb-4 mr-4"
            style={{ maxWidth: "30%" }}
          >
            <div className="flex justify-between mb-2">
              <span>{review.name}</span>
              <span>
                <Ratings rating={review.rating} />
              </span>
            </div>
            <div>
              <p className="text-white">{review.review}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Reviews