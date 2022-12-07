import React from 'react'
import { useSelector } from 'react-redux'
import { AboutChef, ChefCard, ChefName, MainContainer, Title } from './styles'
import yossi from '../../../data/images/yossi.png';
import ChefsDishSlider from '../ChefsDishSlider';

function ChefOfTheWeek() {
  const chefs = useSelector((state:any) => state.chefs.value)
  return (
    <MainContainer>
      <Title>chef of the week:</Title>
      <ChefCard img={yossi}>
        <ChefName>Yosii Shitrit</ChefName>
        
      </ChefCard>
      <AboutChef>
          Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades,
          including running the kitchen in his first restaurant, the fondly-remembered Violet, located in
          Moshav Udim. Shitrit's creativity and culinary acumen born of long experience are expressed in
          the every detail of each and every dish.
        </AboutChef>

    <ChefsDishSlider/>

    </MainContainer>
  )
}

export default ChefOfTheWeek