import React from 'react'
import { AboutUsContainer, AboutUsText, AppleLogo, GoogleLogo, Logo, MainContainer, MainFrame } from './styles'

function AboutUs() {
  return (
    <MainContainer>
        <Logo/>
        <MainFrame>
            <GoogleLogo/>
            <AppleLogo/>
            <AboutUsContainer>About Us:</AboutUsContainer>
            <AboutUsText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                In a lacus vel justo fermentum bibendum non eu ipsum.
                Cras porta malesuada eros, eget blandit 
                turpis suscipit at. Vestibulum sed 
                massa in magna sodales porta.
                Vivamus elit urna,
                dignissim a vestilbulum.
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit.
                In a lacus vel justo fementum bobendum no 
                eu ipsum. Cras porta malesuada eros.

            </AboutUsText>
        </MainFrame>
    </MainContainer>
  )
}

export default AboutUs