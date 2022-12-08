import styled from "styled-components";
import x from "../../../data/images/x.svg";

export const Button = styled.button`
background: transparent;
border-color: transparent;
`

interface MainContainerProps{
    open?:boolean;
}
export const MenuContainer = styled.div<MainContainerProps>`
display: flex;
position: absolute;
width: 100%;
height: 413px;
top: 0px;
background: #FFFFFF;
// flex-flow column nowrap;
transform: ${ props => props.open ? 'translateX(0)' : 'translateX(-100%)'};
transition: transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
z-index: 10;
`

export const CloseMenu = styled.button`
position: absolute;
width: 24px;
height: 24px;
left: 19px;
top: 11px;
border-color: transparent;
background: #FFFFFF;
background-image: url(${x});
order: 0;
`

export const Container = styled.div`
/* My order */


/* Auto layout */

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 40px 12px 24px 20px;
gap: 24px;

position: absolute;
width: 100%;
height: 367px;
left: -1px;
top: 46px;

background: #FFFFFF;
box-shadow: 2px 4px 10px rgba(175, 175, 175, 0.25);
order: 1;
`

