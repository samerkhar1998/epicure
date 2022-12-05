import styled from "styled-components";


export const MainContainer = styled.div``

export const SliderContainer = styled.div`
height:100%;
display: inline-flex;
overflow: hidden;
transform: translateX(0);
transition: transform 0.3s ease-out;
cursor: grab;
`

export const Slide = styled.div``



export const RestaurantCard = styled.div`
/* Card/Restaurant mobile */


/* Auto layout */

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

width: 245px;
height: 232.8px;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`