import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getRestaurantById } from './services/fetch-utils';

export default function UpdatePage() {

  const { push } = useHistory();
  const { id } = useParams();
  const [restaurantInForm, setRestaurantInForm] = useState({
    name: '',
    location: '',
    cuisine: '',
    yelp_score: 0,
    google_score: 0,
    kid_friendly: false,
  });
  
  return (
    <div>UpdatePage</div>
  );
}
