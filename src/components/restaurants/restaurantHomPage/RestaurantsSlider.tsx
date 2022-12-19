import { Container, Title, MainContainer, SwiperContainer, SwiperList} from "../../sharedStyles";
import { useSelector } from "react-redux";
import RestaurantCard from "./RestaurantCard";
import RestaurantsLink from "./RestaurantsLink";


export default function RestaurantsSlider(){
    const restaurants = useSelector((state:any) => state.restaurants.value);
    
    
    return (
        <MainContainer>
            <Title>POPULAR RESTAURANTS IN IPICURE:</Title>
            
            <Container>
                <SwiperContainer>
                    <SwiperList>
                        {restaurants.map((restaurant:any, idx:number) => (<RestaurantCard key={idx} restaurant={restaurant} resPage={false}/>))}
                    </SwiperList>
                </SwiperContainer>
                
            </Container>

            <RestaurantsLink/>
        </MainContainer>
            
            
    )
}