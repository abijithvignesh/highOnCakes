import React, { useState, useEffect, useRef } from "react";
import Navigation from "./components/navigation/Navigation";
import Hero from "./components/hero/Hero";
import Carousel from "./components/carousel/CarouselSection";
import Menu from "./components/menu/Menu";
import Order from "./components/order/Order";
import AboutUs from "./components/aboutus/AboutUs";
import Contact from "./components/contact/ContactUs";

function App() {
  const home = useRef(null);
  const order = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);
  const menu = useRef(null);
  const [position, setPosition] = useState(0);


  useEffect(() => {
    if (position == 1) {
      home.current.scrollIntoView({alignToTop:true, behavior: "smooth" });
    } else if (position == 2) {
      menu.current.scrollIntoView({ behavior: "smooth" });
    } else if (position == 3) {
      order.current.scrollIntoView({ behavior: "smooth" });
    } else if (position == 4) {
      about.current.scrollIntoView({ behavior: "smooth" });
    } else if (position == 5) {
      contact.current.scrollIntoView({ behavior: "smooth" });
    }

    
  }, [position])

  return (
    <>
      <Navigation  updateMenu={setPosition}></Navigation>
      <Hero ref={home} updateMenu={setPosition} ></Hero>
      <Carousel></Carousel>
      <Menu ref={menu}></Menu>
      <Order ref={order}></Order>
      <AboutUs ref={about}></AboutUs>
      <Contact ref={contact}></Contact>
    </>
  );
}

export default App;
