import React, { forwardRef,useState, useEffect } from "react";
import hamburger from "../../images/hamburger.svg";
import {
  Nav,
  LeftNav,
  RightNav,
  Wrapper,
  Navtoggle,
} from "./NavigationElements";
import close from "../../images/close.png";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Hero from "../hero/Hero";
import Carousel from "../carousel/CarouselSection";
import Contact from "../contact/ContactUs";
import Order from "../order/Order";
import Menu from "../menu/Menu";
import About from "../aboutus/AboutUs";

const Navigation = forwardRef(({ updateMenu }, ref) => {
  const [hamMenuState, setHamMenuState] = useState(false);

  const toggleMenu = () => {
    setHamMenuState((prevState) => !prevState);
  };

  const [offsetY, setOffSetY] = useState(0);

  const handleScroll = () => setOffSetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeComponent = (val) =>{
    console.log("inisde changeComponent function",val)
    updateMenu(val);
  }

  return (
    <Wrapper ref={ref} offsetY={offsetY}>
      <Nav offsetY={offsetY}>
        <LeftNav show={hamMenuState}>
          <a href="home">HIGH ON CAKES</a>
        </LeftNav>
        <RightNav show={hamMenuState}>
          <ul>
            <li>
              <a onClick={(val)=>changeComponent(1)}>Home</a>
            </li>
            <li>
              <a onClick={(val)=>changeComponent(2)}>Menu</a>
            </li>
            <li>
              <a onClick={(val)=>changeComponent(3)}>Order</a>
            </li>
            <li>
              <a onClick={(val)=>changeComponent(4)}>About</a>
            </li>
            <li>
              <a onClick={(val)=>changeComponent(5)}>Contact</a>
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
              <a onClick={(val)=>changeComponent(1)}>Home</a>
            </li>
            <li>
              <a onClick={(val)=>changeComponent(2)}>Menu</a>
            </li>
            <li>
              <a onClick={(val)=>changeComponent(3)}>Order</a>
            </li>
            <li>
              <a onClick={(val)=>changeComponent(4)}>About</a>
            </li>
            <li>
              <a onClick={(val)=>changeComponent(5)}>Contact</a>
            </li>
          </ul>
        </Navtoggle>
      </Nav>
    </Wrapper>
  );
})

export default Navigation
