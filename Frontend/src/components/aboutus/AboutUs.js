import React,{forwardRef} from "react";
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

const AboutUs = forwardRef((props, ref) => {
  return (
    <>
      <Wrapper ref={ref}>
        <CoverPhoto src={aboutus} alt="about us"></CoverPhoto>
        <Aboutus>
          ABOUT<br />
        </Aboutus>
        <Container>
          <Content >
            <span className="aboutcont">US</span>
            <span className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dui
              leo, lobortis et
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </span>
            
          </Content>
          <div className="profile-container">
            <ProfilePhoto src={profilepic} alt="profile pic"></ProfilePhoto>
          </div>
         
        </Container>
        <Container>
          <Content >
            <span className="aboutcont">US</span>
            <span className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dui
              leo, lobortis et
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </span>
            
          </Content>
         
        </Container>
      </Wrapper>
    </>
  );
}
)
export default AboutUs;