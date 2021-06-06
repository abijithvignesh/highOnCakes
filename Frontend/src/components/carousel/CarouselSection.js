import React from "react";
import Carousel, { consts } from "react-elastic-carousel";
import {
  Wrapper,
  Container,
  SliderImage,
  SliderButton,
  SliderButtonContainer
} from "./CarouselElements";
import './CarouselStyles.css';
import drip from "../../images/drip.svg";
import cake1 from "../../images/cake1.png";
import cake2 from "../../images/cake2.png";
//import { FaBeer } from 'react-icons/fa';
import "../../App.css";
import left from "../../images/left.svg"
import right from "../../images/right.svg"

export default function CarouselSection() {


  function myArrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ? left: right;
    return (
      <SliderButtonContainer>
        <SliderButton onClick={onClick} disabled={isEdge} src={pointer}/>
      </SliderButtonContainer>
    );
  }

  return (
    <>
      <Wrapper>
        <Container>
          <Carousel itemsToShow={window.innerWidth > 768 ? 2 : 1} renderArrow={myArrow}>
            <SliderImage src={cake1} alt="cake1"></SliderImage>
            <SliderImage src={cake2} alt="cake2"></SliderImage>
          </Carousel>
        </Container>
      </Wrapper>
    </>
  );
}
