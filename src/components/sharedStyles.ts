import styled from "styled-components";




export const MainContainer = styled.div`
display:flex;
flex-direction: column;
align-items: baseline;
margin-top:25px;
`

export const Container = styled.div`
display:flex;
justify-content: flex-start;
flex-direction: row;
margin-left: 16px
`

export const Title = styled.div`


font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 24px;
margin-bottom:20px;
/* identical to box height, or 133% */

letter-spacing: 1.25px;
text-transform: uppercase;

color: #000000;`

export const SlideContainer = styled.div`

`

export const Card = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
margin-right: 30px;
width: 245px;
height: 232.8px;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`

interface ImgProps{
    src:string;
}

export const Img = styled.div<ImgProps>`
width: 245px;
height: 151.8px;

background: url(${props => props.src});

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`

interface DishProps{
    dish?:boolean
}
export const Info = styled.div<DishProps>`
/* Info */


/* Auto layout */

display: flex;
flex-direction: column;
align-items: flex-start;

padding: 16px;
padding-bottom: 0px;
gap: 10px;

// width: 245px;
height: ${props => props.dish ? '236px' : "67px" };

background: #F9F4EA;

/* Inside auto layout */

flex: none;
order: 12;
align-self: stretch;
flex-grow: 0;
`



export const Frame = styled.div`
/* Frame 3 */


/* Auto layout */

display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-around;
padding: 0px;
gap: 8px;

width: 100%;
height: 100%; 


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;`

export const H1 = styled.div`
width: 100%;
height: 21px;

font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
letter-spacing: 2.67px;

color: #000000;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;`

export const H2 = styled.div`
width: 100%;
height: auto;

font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 16px;
line-height: 125%;
/* identical to box height, or 125% */

letter-spacing: 1.97px;

color: #000000;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
`
export const H3 = styled.div`
width: 100%;
height: auto;

font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 16px;
line-height: 125%;
/* identical to box height, or 125% */

letter-spacing: 1.97px;

color: #000000;


/* Inside auto layout */

flex: none;
order: 2;
flex-grow: 0;
`

export const H4 = styled.div`
width: 100%;
height: auto;

font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 16px;
line-height: 125%;
/* identical to box height, or 125% */

letter-spacing: 1.97px;

color: #000000;


/* Inside auto layout */

flex: none;
order: 3;
flex-grow: 0;
`
export const Link = styled.button `
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
padding: 0px;
gap: 12px;

width: 172px;
height: 35px;
left: 20px;
top: 659px;

border-style: hidden;

`

export const MyText = styled.div`
width: 136px;
height: 35px;

font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 35px;
/* identical to box height, or 219% */

text-align: right;
letter-spacing: 2px;
text-transform: capitalize;

color: #000000;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;`

export const VectorContainer = styled.div`
width: 24px;
height: 24px;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;`

export const Group = styled.div`
position: absolute;
left: 0%;
right: 0%;
top: 12.5%;
bottom: 12.5%;`

export const VecImg = styled.div`
position: absolute;
left: 0%;
right: 0%;
top: 12.5%;
bottom: 12.5%;

background: #000000;
`
export const SwiperContainer = styled.div`
box-sizing: border-box;
width:100%;
max-width: 90vw;
overflow: auto;
`



export const SwiperList = styled.li<DishProps> `
min-width:100%;
display: flex;
flex-direction: row;
list-style: none;
padding: 0;
margin:0;
margin-bottom: ${props => props.dish ? '160px' : '0'};
`