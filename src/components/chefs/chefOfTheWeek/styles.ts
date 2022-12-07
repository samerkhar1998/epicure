import styled from "styled-components";


export const MainContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
order:4;
background: #FAFAFA;
`

export const Title = styled.div`
width: 90%;
height: 35px;

font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 194%;
margin-bottom: 13px;
/* identical to box height, or 194% */

letter-spacing: 1.25px;
text-transform: uppercase;

color: #000000;
orer:0;
`

interface CardProps{
    img?:string;
}
export const ChefCard = styled.div<CardProps>`
display:flex;
flex-direction: column-reverse;
width: 335px;
height: 262px;

background: url(${props => props.img});
order:1
`

export const ChefName = styled.div`
/* Auto layout */

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;

height: 51px;

background: rgba(255, 255, 255, 0.8);
`

export const AboutChef = styled.div`
width: 100%;
height: 100%;
padding: 20px;

font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 156%;
/* or 28px */

text-align: justify;
letter-spacing: 1.25px;

color: #000000;
order:2;
`