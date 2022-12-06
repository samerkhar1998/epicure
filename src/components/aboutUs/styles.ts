import styled from "styled-components";
import logoImg from '../../data/images/Logo-Title.svg';
import googleLogo from '../../data/images/GooglePlay.svg';
import appleLogo from '../../data/images/AppStore.svg';

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
gap: 32px;

width: 100%;
height: 867px;
left: -1px;
top: 2896px;
margin-left: 16px;
background: #FAFAFA;
`

export const Logo = styled.div`
width: 102px;
height: 95px;
left: 19px;
top: 2920px;

background: url(${logoImg});
`

export const MainFrame = styled.div`
/* Frame 1 */


/* Auto layout */

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 16px;
width: 100%;
height: 120px;
`

export const GoogleLogo = styled.div`
box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
align-items: center;
// padding: 7px 12px;
gap: 7px;

width: 180px;
height: 52px;

border: 0.5px solid #000000;
border-radius: 10px;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
background: url(${googleLogo});
`


export const AppleLogo = styled.div`
box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
align-items: center;
padding: 7px 12px;
gap: 7px;

width: 180px;
height: 52px;

border: 0.5px solid #000000;
border-radius: 10px;

/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
background: url(${appleLogo});

`