import React from "react";
import Navigation from "./components/navigation/Navigation";
import Hero from "./components/hero/Hero";
import Carousel from "./components/carousel/CarouselSection";
import Menu from "./components/menu/Menu";
import Order from "./components/order/Order";
import AboutUs from "./components/aboutus/AboutUs";
import Contact from "./components/contact/ContactUs";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Hero></Hero>
      <Carousel></Carousel>
      <Menu></Menu>
      <Order></Order>
      <AboutUs></AboutUs>
      <Contact></Contact>
    </>
  );
}

export default App;
