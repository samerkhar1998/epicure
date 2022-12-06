import React from 'react'
import { AppleLogo, GoogleLogo, Logo, MainContainer, MainFrame } from './styles'

function AboutUs() {
  return (
    <MainContainer>
        <Logo/>
        <MainFrame>
            <GoogleLogo/>
            <AppleLogo/>
        </MainFrame>
    </MainContainer>
  )
}

export default AboutUs