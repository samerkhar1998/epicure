import { Container, Title, MainContainer, SwiperContainer, SwiperList} from "../sharedStyles";
import img from '../../data/images/claro.png'

import { useSelector } from "react-redux";
import RestaurantCard from "./restaurantAssets/RestaurantCard";
import RestaurantsLink from "./restaurantAssets/RestaurantsLink";


export default function RestaurantsSlider(){
    const restaurants = useSelector((state:any) => state.restaurants.value);
    
    return (
        <MainContainer>
            <Title>POPULAR RESTAURANTS IN IPICURE:</Title>
            
            <Container>
                <SwiperContainer>
                    <SwiperList>
                        {restaurants.map((restaurant:any, idx:number) => (<RestaurantCard key= {idx} {...restaurant}/>))}
                    </SwiperList>
                </SwiperContainer>
                
            </Container>

            <RestaurantsLink/>
        </MainContainer>
            
            
    )
}