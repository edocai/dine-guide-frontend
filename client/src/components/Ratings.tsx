import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

interface ratingProps {
  rating: number;
}

const Ratings: React.FC<ratingProps> = ({ rating }) => {
  const stars = [];
  for (let index = 1; index <= 5; index++) {
    if (index <= rating) {
      stars.push(<FontAwesomeIcon key={index} icon={solidStar} style={{color: '#FEE12B'}}/>)
    } else if (index === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<FontAwesomeIcon key={index} icon={faStarHalfStroke} style={{color: '#FEE12B'}} />)
    } else {
      stars.push(<FontAwesomeIcon key={index} icon={regularStar} style={{color: '#FEE12B'}} />)
    }    
  }
  return (
    <div>{stars}</div>
  )
}

export default Ratings

