import React from "react";
import {
  Section,
  Container,
  LeftContainer,
  RightContainer,
  Title1,
  Title2,
  ButtonGroup,
  Button,
  Balloon,
  Cloud1,
  Cloud2,
  Cloud3,
  Logoring,
  Logo
} from "./HeroElement";
import logo from "../../images/logo.png";
import logoring from "../../images/logoring.svg";
import cloud1 from "../../images/cloud1.png";
import cloud2 from "../../images/cloud2.png";
import cloud3 from "../../images/cloud3.png";

export default function Hero() {
  return (
    <>
      <Section>
        <Container>
          <LeftContainer>
            <Title1>HOMEBAKING<br/> HAS NEVER TASTED <br/>SO <span>GOOD</span></Title1>
            <Title2>Cakes for every occassion from High On Cakes</Title2>
            <ButtonGroup>
              <Button primary>Order Now</Button>
              <Button>Know More</Button>
            </ButtonGroup>
          </LeftContainer>
          <RightContainer>
            <Logo>
            <Balloon src={logo} alt="logoimage" />
            <Cloud1 src={cloud1} alt="cloud1" />
            <Cloud2 src={cloud2} alt="cloud2" />
            <Cloud3 src={cloud3} alt="cloud3"/>
            <Logoring src={logoring} alr="ring" />
            </Logo>
          </RightContainer>
        </Container>
      </Section>
    </>
  );
}
