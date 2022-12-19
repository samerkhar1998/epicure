import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import RestaurantCard from './restaurantHomPage/RestaurantCard';
import { CardsContainer, FilterContainer, H1, MainContainer, Text } from './styles';


export default function Restaurants(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const restaurants = useSelector((state:any) => state.restaurants.value);

    return(
        <MainContainer>
            
            <H1>restaurants</H1>
            <FilterContainer>
                <Text>All</Text>
                <Text>New</Text>
                <Text>Most Popular</Text>
                <Text>Open Now</Text>
            </FilterContainer>
            <CardsContainer>
                {restaurants && restaurants.map((restaurant:any, idx:number) => (<RestaurantCard  key={idx} restaurant={restaurant} resPage={true}/>))}
            </CardsContainer>

        </MainContainer>
    )
}