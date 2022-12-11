import styled from "styled-components"
import magnifier from "../../../../data/images/search.svg";

export const SearchContainer = styled.div`
box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
align-items: center;
padding: 6px 12px;
gap: 8px;

position: absolute;
width: 90%;
height: 30px;

border: 0.5px solid #000000;
border-radius: 4px;
`

export const SearchIcon = styled.div`
width: 20px;
height: 20px;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
background: url(${magnifier});
`

export const SearchBar = styled.input`
width: 241px;
height: 15px;

font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 12px;
line-height: 15px;
/* identical to box height */

letter-spacing: 1.29px;

color: #000000;

opacity: 0.2;

/* Inside auto layout */

flex: none;
order: 2;
flex-grow: 1;
border-color: transparent;
`