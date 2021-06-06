import React, { useState,useEffect } from "react";
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

  const[offsetY, setOffSetY] = useState(0);

  const handleScroll = () => setOffSetY(window.pageYOffset);

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)

    return () => window.removeEventListener("scroll",handleScroll);
  },[])

  

  return (
    <Wrapper offsetY={offsetY}>
      <Nav offsetY={offsetY}>
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
