import styled from "styled-components";

export const MainContainer = styled.div`
position : relative;
display: flex;
flex-direction: column;
align-items: center;
width: 100%;

`

export const H1 = styled.div`
position: relative;
width: 90%;
height: 22px;
margin: 10px;

font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 22px;
/* identical to box height */

letter-spacing: 1.92px;
text-transform: uppercase;
order: 0;
color: #000000;
`

export const FilterContainer = styled.div`
display: flex;
position: relative;
width: 90%;
margin-bottom: 10px;
height: 27px;
flex-direction: row;
align-items: center;
justify-content: space-between;
`


export const Text = styled.div`
width: fit-content;
height: 21px;
margin-right: 21px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
letter-spacing: 1.92px;

color: #000000;


/* Inside auto layout */

flex: none;
flex-grow: 0;
`

export const CardsContainer = styled.div`
position: relative;
zoom: 140%;
display: flex;
flex-direction: column;
`