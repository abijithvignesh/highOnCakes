import React from "react";
import aboutus from "../../images/aboutus.png";
import {
  Wrapper,
  CoverPhoto,
  ProfilePhoto,
  Container,
  Aboutus,
  Content,
  Banner,
} from "./AboutUsElements";
import profilepic from "../../images/profilepic.png";

export default function AboutUs() {
  return (
    <>
      <Wrapper>
        <Banner>
          <CoverPhoto src={aboutus} alt="about us"></CoverPhoto>
          <ProfilePhoto src={profilepic} alt="profile pic"></ProfilePhoto>
        </Banner>
        <Container>
          <Aboutus>
            ABOUT <br />
            <span>US</span>
          </Aboutus>
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dui
            leo, lobortis et
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dui
            leo, lobortis et nunc eu, tempus euismod ligula. Vestibulum eu
            mauris vitae lectus sagittis posuere. Suspendisse consectetur ornare
            fermentum.
          </Content>
        </Container>
      </Wrapper>
    </>
  );
}
