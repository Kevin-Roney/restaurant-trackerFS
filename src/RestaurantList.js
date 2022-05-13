import { useState, useEffect } from 'react';
import { getRestaurants } from './services/fetch-utils';
import Restaurant from './Restaurant';


export default function RestaurantList() {

  const [restaurants, setRestaurants] = useState([]);
  
  useEffect(() => {
    async function fetch() {
      const restaurantData = await getRestaurants();
      setRestaurants(restaurantData);
    }
  }, []);
  return (
    <div>RestaurantList</div>
  );
}
