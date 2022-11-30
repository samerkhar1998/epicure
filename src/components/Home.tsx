import { useEffect } from 'react';
import { fetchChefs, fetchDishes, fetchRestaurants} from '../data/Data';
import {useNavigate} from 'react-router-dom';
import { setRestaurants } from './restaurants/restaurantsSlicer';
import { setDishes } from './dishes/dishesSlicer';
import { setChefs } from './chefs/chefsSlicer';
import { useDispatch } from 'react-redux';
import Restaurants from './restaurants/Restaurants';



export default function Home(){
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(()=>{
    async function fetchFunction(){
      const restaurants = await fetchRestaurants();
      const chefs = await fetchChefs();
      const dishes = await fetchDishes();
      dispatch(setRestaurants(restaurants));
      dispatch(setDishes(dishes));
      dispatch(setChefs(chefs));
    }
    fetchFunction();
  },[]);
    
    return (
        <div>
            <button onClick={() => navigate('./restaurants')}>go To restaurants</button>
            
          
        </div>
    )
};
