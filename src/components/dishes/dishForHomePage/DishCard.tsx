import React from 'react'
import { Card, Frame, H1, H2, H3, H4, Img, Info } from '../../sharedStyles'


function DishCard(dish:any) {
  return (
    <Card>
        <Img src={dish.picture}/>
        <Info dish={true}>
            <Frame>
                <H1>{dish.name}</H1>
                <H2>{dish.ingredients}</H2>
                <H3><img src={dish.dishType} alt="hamburger img" /></H3>
                <H4>{dish.price}</H4>
            </Frame>
        </Info>
    </Card>
  )
}

export default DishCard