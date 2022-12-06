import React from 'react'
import { Container, H1, MainContainer, Text, Type, TypesContainer, Vector } from './styles'
import vegan from "../../data/images/Vegan.svg";
import vegitarian from "../../data/images/Vegitarian.svg";
import spicy from "../../data/images/Spicy.svg";

function SigntureDishes() {
  return (
    <MainContainer>
        <Container>
            <H1>SINGTURE DISH OF:</H1>
            <TypesContainer>
                <Type>
                    <Vector><img src={spicy} alt="spicy img"/></Vector>
                    <Text>Spicy</Text>
                </Type>
            </TypesContainer>
            <TypesContainer>
                <Type>
                    <Vector><img src={vegitarian} alt="spicy img"/></Vector>
                    <Text>Vegitarian</Text>
                </Type>
            </TypesContainer>
            <TypesContainer>
                <Type>
                    <Vector><img src={vegan} alt="spicy img"/></Vector>
                    <Text>Vegan</Text>
                </Type>
            </TypesContainer>
        </Container>
    </MainContainer>
    
  )
}

export default SigntureDishes