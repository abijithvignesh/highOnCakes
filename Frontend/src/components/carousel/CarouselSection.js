import React from "react";
import Carousel, { consts } from "react-elastic-carousel";
import {
  Wrapper,
  Container,
  SliderImage,
  SliderButton,
  SliderButtonContainer,
} from "./CarouselElements";
import "./CarouselStyles.css";
import drip from "../../images/drip.svg";
import cake1 from "../../images/cake1.png";
import cake2 from "../../images/cake2.png";
import one from "../../images/gallery/1.JPG";
import two from "../../images/gallery/2.JPG";
import three from "../../images/gallery/3.JPG";
import four from "../../images/gallery/4.JPG";
import five from "../../images/gallery/5.JPG";
import six from "../../images/gallery/6.JPG";
import seven from "../../images/gallery/7.JPG";
import eight from "../../images/gallery/8.JPG";
import nine from "../../images/gallery/9.JPG";
import ten from "../../images/gallery/10.jpg";
import "../../App.css";
import left from "../../images/left.svg";
import right from "../../images/right.svg";

export default function CarouselSection(props, ref) {
  function myArrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ? left : right;
    return (
      <SliderButtonContainer>
        <SliderButton onClick={onClick} disabled={isEdge} src={pointer} />
      </SliderButtonContainer>
    );
  }

  return (
    <>
      <Wrapper >
        <Container>
          <Carousel
            itemsToShow={window.innerWidth > 768 ? 2 : 1}
            renderArrow={myArrow}
          >
            <SliderImage src={one} alt="cake1"></SliderImage>
            <SliderImage src={two} alt="cake2"></SliderImage>
            <SliderImage src={three} alt="three"></SliderImage>
            <SliderImage src={four} alt="four"></SliderImage>
            <SliderImage src={five} alt="five"></SliderImage>
            <SliderImage src={six} alt="six"></SliderImage>
            <SliderImage src={seven} alt="seven"></SliderImage>
            <SliderImage src={eight} alt="eight"></SliderImage>
            <SliderImage src={nine} alt="nine"></SliderImage>
            <SliderImage src={ten} alt="ten"></SliderImage>
          </Carousel>
        </Container>
      </Wrapper>
    </>
  );
}



