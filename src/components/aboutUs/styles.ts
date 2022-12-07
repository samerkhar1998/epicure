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
padding-top: 20px;
width: 100%;
height: 800px;
padding-left: 16px;
background: #FAFAFA;
order:5;
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

export const AboutUsContainer = styled.div`
width: 100%;
height: 35px;
left: 20px;
top: 3215px;

font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 35px;
/* identical to box height, or 194% */

letter-spacing: 1.25px;
text-transform: uppercase;

color: #000000;

order:2;
`

export const AboutUsText = styled.div`
width: 100%;
height: auto;

font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 156%;

letter-spacing: 2.14px;
order: 3;
color: #000000;
`