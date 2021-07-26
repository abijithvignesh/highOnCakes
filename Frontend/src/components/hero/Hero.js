import React, { forwardRef,useEffect } from "react";
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
  const handleScroll = () => {
    const balloon = document.querySelector('.balloon');
    const cloud1 = document.querySelector('.cloud1');
    const cloud2 = document.querySelector('.cloud2');
    const cloud3 = document.querySelector('.cloud3');
    balloon.style.transform = `translateY(${window.pageYOffset * -0.5}px)`;
    cloud1.style.transform = `translateY(${window.pageYOffset * 0.2}px)`;
    cloud2.style.transform = `translateY(${window.pageYOffset * 0.3}px)`;
    cloud3.style.transform = `translateY(${window.pageYOffset * 0.1}px)`;
    //setOffSetY(window.pageYOffset);
  };

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
              <Balloon src={logo} className="balloon" />
              <Cloud1 src={cloud1} className="cloud1" />
              <Cloud2 src={cloud2} className="cloud2" />
              <Cloud3 src={cloud3} className="cloud3" />
              <Logoring src={logoring} alr="ring" />
            </Logo>
          </RightContainer>
        </Container>
      </Section>
    </>
  );
}
)

export default Hero;