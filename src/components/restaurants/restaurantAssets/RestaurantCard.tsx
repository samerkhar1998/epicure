import React from 'react'
import { Card, Img, Info, Frame, H1, H2 } from './styles'

function RestaurantCard(restaurant:any) {
  return (
    <Card>
        <Img src={restaurant.picture}/>
        <Info>
            <Frame>
                <H1>{restaurant.name}</H1>
                <H2>{restaurant.owner}</H2>
            </Frame>
        </Info>
    </Card>
  )
}

export default RestaurantCard