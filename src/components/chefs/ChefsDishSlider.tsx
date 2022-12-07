import React from 'react'
import { useSelector } from 'react-redux'
import DishCard from '../dishes/dishAssets/DishCard';
import RestaurantsLink from '../restaurants/restaurantAssets/RestaurantsLink'
import { Container, MainContainer, SwiperContainer, SwiperList, Title } from '../sharedStyles'

function ChefsDishSlider() {
    const dishes = useSelector((state:any) => state.dishes.value);
  return (
    <MainContainer>
            <Title>chef of the week:</Title>
            
            <Container>
                <SwiperContainer>
                    <SwiperList>
                        {dishes.map((dish:any, idx:number) => (<DishCard key= {idx} {...dish}/>))}
                        {/* here need to be something else */}
                    </SwiperList>
                </SwiperContainer>
                
            </Container>

            <RestaurantsLink/>
        </MainContainer>
  )
}

export default ChefsDishSlider