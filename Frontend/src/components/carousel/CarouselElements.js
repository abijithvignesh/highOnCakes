import styled from "styled-components/macro";
import drip from "../../images/drip.svg";
export const Wrapper = styled.div`
  background: url(${drip});
  background-color: white;
  background-position: top;
  background-repeat: no-repeat;
`;

export const Container = styled.div`
  position: relative;
  @media(min-width: 768px)  {
    display: flex;
    justify-content: center;
  }
  padding: 6em 1em;
`;

export const Drip = styled.img`
  width: 100%;
  position: absolute;
`;

export const SliderImage = styled.img`
  @media(max-width: 768px) {
    max-width: 200px;
    border-radius: 20%;
  }
  max-width: 400px;
`;

export const SliderButton = styled.img`
  height: 30px;
`;

export const SliderButtonContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
