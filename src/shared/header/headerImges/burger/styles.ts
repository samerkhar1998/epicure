import styled from "styled-components";
import hamburgerImg from "../../../../data/images/hamburber.svg";


export const BurgerButton = styled.button`
margin-top:5px;
width: 24px;
height:24px;
background: url(${hamburgerImg});
border-color: transparent;
`

interface TextProps{
    order:number;
}
export const Button = styled.div<TextProps>`
width: 100%;
height: 22px;

font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 22px;
/* identical to box height */

letter-spacing: 1.92px;

color: #000000;


/* Inside auto layout */

flex: none;
order: ${props => props.order};
flex-grow: 0;
`

export const Line = styled.div`
/* Line 36 */

width: 100%;
height: 0px;
left: -1px;
top: 194px;

border: 1px solid #F2F2F2;
order: 2;
`