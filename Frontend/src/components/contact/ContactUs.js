import React from "react";
import {
  Wrapper,
  Container,
  Logo,
  Title,
  Social,
  Instagram,
  Facebook,
  Contact,
  Phone,
  Email,
  Location,
  Line,
  Logodiv,
  Circle,
  Footer,
} from "./ContactElement";
import bottomlogo from "../../images/bottomlogo.png";
import instagram from "../../images/instagram.png";
import facebook from "../../images/facebook.png";
import phone from "../../images/phone.png";
import email from "../../images/email.png";
import location from "../../images/location.png";
import footer from "../../images/footer.svg";

export default function ContactUs() {
  return (
    <>
      <Wrapper>
        <Container>
          <Logodiv>
            <Logo src={bottomlogo} alt="bottomlogo"></Logo>
          </Logodiv>
          <Title>GET IN TOUCH</Title>
          <Social>
            <Instagram src={instagram}></Instagram>
            <Facebook src={facebook}></Facebook>
          </Social>
          <Contact>
            <Phone>
              <img src={phone} alt="phone" />
              <p>9840761996</p>
            </Phone>
            <Email>
              <img src={email} alt="phone" />
              <p>abijithvignesh@gmail.com</p>
            </Email>
            <Location>
              <img src={location} alt="phone" />
              <p>Chennai</p>
            </Location>
          </Contact>
          <Footer>
            <Circle>
              <p>TOP</p>
            </Circle>
            <Line></Line>
          </Footer>
        </Container>
      </Wrapper>
    </>
  );
}
