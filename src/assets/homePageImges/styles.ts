import styled from "styled-components";

export const MainContainer = styled.div`
display:flex;
width:100%;
height:100%;

`

export const Img = styled.img`
width:120%;

`

export const Container = styled.div`
/* Auto layout */

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 18px;

position: absolute;
left: 10%;
right:10%;
top: 12%;
height:20%;
justify-content: flex-start;
background: rgba(255, 255, 255, 0.88);
`

export const SubContainer = styled.div`
width: 100%;
height: 35%;

font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 133%;
line-height: 133%;
margin-top:5%;
margin-left: 5%;
margin-right:0%;
letter-spacing: 1.97px;

color: #000000;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`

export const SearchBox = styled.div`
box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
align-items: center;
padding: 6px 12px;
gap: 8px;
width: 90%;
height: 20%;

border: 0.5px solid #000000;
border-radius: 4px;
// transform: matrix(1, 0, 0, -1, 0, 0);

/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
`

export const Input = styled.input `
width: 70%;
height: 100%;

font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 12px;
line-height: 15px;
/* identical to box height */

letter-spacing: 1.29px;
color: #000000;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 1;
`


