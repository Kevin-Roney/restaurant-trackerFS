import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createRestaurant } from './services/fetch-utils';

export default function CreatePage() {

  const history = useHistory();
  const [restaurantInForm, setRestaurantInForm] = useState({
    name: '',
    location: '',
    cuisine: '',
    yelp_score: 0,
    google_score: 0,
    kid_friendly: false,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    await createRestaurant(restaurantInForm);
    history.push('/restaurants');
  }

  return (
    <div>CreatePage</div>
  );
}


