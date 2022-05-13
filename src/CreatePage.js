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
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add Restaurant</h2>
        <label>
            Name
          <input required value={restaurantInForm.name} name='title' onChange={(e) => setRestaurantInForm({ ...restaurantInForm, name: e.target.value })}/>
        </label>
        <label>
            Location
          <input required value={restaurantInForm.location} name='title' onChange={(e) => setRestaurantInForm({ ...restaurantInForm, location: e.target.value })}/>
        </label>
        <label>
            Cuisine
          <input required value={restaurantInForm.cuisine} name='title' onChange={(e) => setRestaurantInForm({ ...restaurantInForm, cuisine: e.target.value })}/>
        </label>
        <label>
            Yelp Score
          <input required value={restaurantInForm.yelp_score} name='title' onChange={(e) => setRestaurantInForm({ ...restaurantInForm, yelp_score: e.target.value })}/>
        </label>
        <label>
            Google Maps Score
          <input required value={restaurantInForm.google_score} name='title' onChange={(e) => setRestaurantInForm({ ...restaurantInForm, google_score: e.target.value })}/>
        </label>
        <label>
            Description
          {/* on change, set the description in state */}
          <select required value={restaurantInForm.kid_friendly} name='description' onChange={(e) => setRestaurantInForm({ ...restaurantInForm, kid_friendly: e.target.value })}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </label>
        <button>Add Restaurant</button>
      </form>
    </div>
  );
}


