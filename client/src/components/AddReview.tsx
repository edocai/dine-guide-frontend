import React, { SyntheticEvent, useState } from "react";
import RestaurantAPI from "../api/RestaurantAPI";
import { useParams, useNavigate } from "react-router-dom";

const AddReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("Rating");

  const handleSubmitReview = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const response = await RestaurantAPI.post(`/${id}/addReview`, {
        name,
        review: reviewText,
        rating,
      });
      console.log(response);
      navigate(0);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="m-7">
      <form action="">
        <div className="flex mb-4">
          <div className="w-4/12 pr-2">
            <label htmlFor="name" className="block text-sm font-medium text-white pb-1">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="Name"
              type="text"
              className="border border-gray-400 rounded p-2 w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="w-4/12 pl-2">
            <label htmlFor="rating" className="block text-sm font-medium text-white pb-1">Rating</label>
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              id="rating"
              className="border border-gray-400 rounded p-2 w-full bg-white focus:outline-none focus:border-blue-500"
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="w-4/12">
          <label htmlFor="Review" className="block text-sm font-medium text-white pb-1">Review</label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            id="Review"
            placeholder="Add a Review"
            className="border border-gray-400 rounded p-2 w-full h-24 focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          onClick={handleSubmitReview}
          className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;