import React from 'react';
import { Link } from 'react-router-dom';

export default function Restaurant({ 
  name, 
  location, 
  cuisine, 
  yelp_score, 
  google_score,
  kid_friendly,
  id }) {
  return (
    <Link className='restaurant' to={`/restaurants.${id}`}>
      <h3>{name}</h3>
      <p>Cuisine: {cuisine}</p>
      <p>Neighborhood: {location}</p>
      <p>They have a {yelp_score} on yelp,</p>
      <p>and a {google_score} on google maps!</p>
      {
        kid_friendly
          ? <p>They are kid friendly!</p>
          : <p>They are not kid friendly!</p>
      }
    </Link>
  );
}
