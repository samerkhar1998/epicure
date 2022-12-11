import styled from "styled-components";

export const Container=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 40px;

position: absolute;
left: 5.04%;
right: 61.54%;
top: 16.26%;
bottom: 11.82%;
`
export const MainRectanlge=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 20px;
padding: 16px;

width: auto;
`

interface ColProps{
    order:number;
}
export const Button = styled.button<ColProps>`
flex: none;
order: ${prop => prop.order};
flex-grow: 0;
background-color: transparent;
border-color: transparent;
`



