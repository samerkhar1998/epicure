
import styled from "styled-components";



export const Column = styled.div`
display:flex;
float: left;
width: 33.33%;
`
export const LeftColumn = styled(Column)`
justify-content: flex-start;
`
export const CenterColumn = styled(Column)`
justify-content: center;
`
export const RightColumn = styled(Column)`
justify-content: flex-end;
`
export const Row = styled.div`
content: "";
display: flex;
clear: both;
width:100%;
margin-top: 4px
`

