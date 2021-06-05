import React, { useState } from "react";
import hamburger from "../../images/hamburger.svg";
import {
  Nav,
  LeftNav,
  RightNav,
  Wrapper,
  Navtoggle,
} from "./NavigationElements";
import close from "../../images/close.png";

export default function Navigation() {
  const [hamMenuState, setHamMenuState] = useState(false);

  const toggleMenu = () => {
    setHamMenuState(prevState=>!prevState);
  };

  return (
    <Wrapper>
      <Nav>
        <LeftNav show={hamMenuState}>
          <a href="home">HIGH ON CAKES</a>
        </LeftNav>
        <RightNav show={hamMenuState}>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Menu</a>
            </li>
            <li>
              <a>Order</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
          <img onClick={toggleMenu} src={hamburger} alt="hammenu" />
        </RightNav>
        <Navtoggle show={hamMenuState}>
          <ul>
            <li>
              <img onClick={toggleMenu} src={close} />
            </li>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Menu</a>
            </li>
            <li>
              <a>Order</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </Navtoggle>
      </Nav>
    </Wrapper>
  );
}
