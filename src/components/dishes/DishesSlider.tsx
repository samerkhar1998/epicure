import { useSelector } from "react-redux";
import { MainContainer, Title,Container, SwiperContainer,SwiperList } from "../sharedStyles";
import DishCard from "./dishAssets/DishCard";
import DishLink from "./dishAssets/DishLink";


export default function RestaurantsSlider(){
    const dishes = useSelector((state:any) => state.dishes.value);
    
    return (
        <MainContainer>
            <Title>SIGNTURE DISH OF:</Title>
            
            <Container>
                <SwiperContainer>
                    <SwiperList dish={true}>
                        {dishes.map((dish:any, idx:number) => (<DishCard key= {idx} {...dish}/>))}
                    </SwiperList>
                </SwiperContainer>
                
            </Container>
            <DishLink/>
        </MainContainer>
            
            
    )
}