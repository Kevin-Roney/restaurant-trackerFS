import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getRestaurantById, updateRestaurants } from './services/fetch-utils';

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

  useEffect(() => {
    async function fetch() {
      const restaurantData = await getRestaurantById(id);
      setRestaurantInForm(restaurantData);
    }
    fetch();
  }, [id]);
  
  async function handleSubmit(e) {
    e.preventDefault();
    await updateRestaurants(id, restaurantInForm);
    push('/restaurants');
  }

  return (
    <div className='create'>
      <form onSubmit={handleSubmit}>
        <h2>Update {restaurantInForm.name}</h2>
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
          <select required value={restaurantInForm.kid_friendly} name='description' onChange={(e) => setRestaurantInForm({ ...restaurantInForm, kid_friendly: e.target.value })}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </label>
        <button>Update {restaurantInForm.name}</button>
      </form>
    </div>
  );
}
