import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import RestaurantCard from './restaurantHomPage/RestaurantCard';
import { MainContainer } from './styles';


export default function Restaurants(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const restaurants = useSelector((state:any) => state.restaurants.value);
    
    
    return(
        <MainContainer>

            {/* {restaurants.map((restaurant:any, idx:number) => (<RestaurantCard key= {idx} {...restaurant}/>))} */}

        </MainContainer>
    )
}