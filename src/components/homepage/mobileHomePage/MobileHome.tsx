import { useEffect } from 'react';
import { fetchChefs, fetchDishes, fetchRestaurants} from '../../../data/Data';
import {useNavigate} from 'react-router-dom';
import { setRestaurants } from '../../restaurants/restaurantsSlicer';
import { setDishes } from '../../dishes/dishForHomePage/dishesSlicer';
import { setChefs } from '../../chefs/chefsSlicer';
import { useDispatch } from 'react-redux';
import Restaurants from '../../restaurants/Restaurants';
import { MainContainer } from './styles';
import Hero from '../../hero/Hero';
import RestaurantsSlider from '../../restaurants/restaurantHomPage/RestaurantsSlider';
import DishesSlider from '../../dishes/dishForHomePage/DishesSlider';
import SigntureDishes from '../../dishes/dishForHomePage/SigntureDishes';
import AboutUs from '../../aboutUs/AboutUs';
import ChefOfTheWeek from '../../chefs/chefOfTheWeek/ChefOfTheWeek';



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
        <MainContainer>
          <Hero/>
          <RestaurantsSlider/>
          <DishesSlider/>
          <SigntureDishes/>
          <ChefOfTheWeek/>
          <AboutUs/>
        </MainContainer>

    )
};