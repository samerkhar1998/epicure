import { useEffect } from 'react';
import { fetchChefs, fetchDishes, fetchRestaurants} from '../../../data/Data';
import {useNavigate} from 'react-router-dom';
import { setRestaurants } from '../../restaurants/restaurantAssets/restaurantsSlicer';
import { setDishes } from '../../dishes/dishAssets/dishesSlicer';
import { setChefs } from '../../chefs/chefsSlicer';
import { useDispatch } from 'react-redux';
import Restaurants from '../../restaurants/Restaurants';
import { MainContainer } from './styles';
import Hero from '../../../assets/homePageImges/HeroImg';
import RestaurantsSlider from '../../restaurants/RestaurantsSlider';
import DishesSlider from '../../dishes/DishesSlider';
import SigntureDishes from '../../dishes/SigntureDishes';
import AboutUs from '../../aboutUs/AboutUs';



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
          <AboutUs/>
        </MainContainer>

    )
};