import React from 'react'
import { Card, Img, Info, Frame, H1, H2 } from '../../sharedStyles'

interface Props {
  restaurant: any;
  resPage: boolean;
}

// function RestaurantCard(restaurant:any, resPage: boolean) {
function RestaurantCard(props: Props) {
  
  return (
    <Card margin={props.resPage} >
        <Img src={props.restaurant.picture} />
        <Info>
            <Frame>
                <H1>{props.restaurant.name}</H1>
                <H2>{props.restaurant.owner}</H2>
            </Frame>
        </Info>
    </Card>
  )
}

export default RestaurantCard