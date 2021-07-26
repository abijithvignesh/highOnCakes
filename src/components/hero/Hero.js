import React, { forwardRef,useEffect, useState } from "react";
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
  Logo,
} from "./HeroElement";
import logo from "../../images/logo.png";
import logoring from "../../images/logoring.svg";
import cloud1 from "../../images/cloud1.png";
import cloud2 from "../../images/cloud2.png";
import cloud3 from "../../images/cloud3.png";
import Navigation from "../navigation/Navigation"

const Hero = forwardRef(({updateMenu}, ref) => {
  const [offsetY, setOffSetY] = useState(0);

  const handleScroll = () => setOffSetY(window.pageYOffset);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      
      <Section ref={ref}>
     
        <Container>
          <LeftContainer>
            <Title1
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 1 }}
            >
              HOMEBAKING
              <br /> HAS NEVER TASTED <br />
              SO <span>GOOD.</span>
            </Title1>
            <Title2>
              Cakes for every occassion from <br /> High On Cakes
            </Title2>
            <ButtonGroup>
              <Button onClick={(val)=>updateMenu(3)} whileHover={{ scale: 1.05 }} whileTap={{scale:0.95}} primary>
                Order Now
              </Button>
              <Button onClick={(val)=>updateMenu(4)} whileHover={{ scale: 1.05 }} whileTap={{scale:0.95}}>Know More</Button>
            </ButtonGroup>
          </LeftContainer>
          <RightContainer>
            <Logo>
              <Balloon offsetY={offsetY} src={logo} alt="logoimage" />
              <Cloud1 offsetY={offsetY} src={cloud1} alt="cloud1" />
              <Cloud2 offsetY={offsetY} src={cloud2} alt="cloud2" />
              <Cloud3 offsetY={offsetY} src={cloud3} alt="cloud3" />
              <Logoring offsetY={offsetY} src={logoring} alr="ring" />
            </Logo>
          </RightContainer>
        </Container>
      </Section>
    </>
  );
}
)

export default Hero;