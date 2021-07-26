import styled from "styled-components/macro";
import { motion } from "framer-motion";

export const Section = styled.section`
  height: 80vh;

  @media (min-width: 768px) {
    /* height: 100vh; */
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin: 3rem 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const LeftContainer = styled.div`
  margin-top: 3.5rem;
`;

export const RightContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.div`
  position: relative;
`;

export const Title1 = styled(motion.h1)`
  color: #9f8189;
  font-size: 30px;
  text-align: center;
  margin-bottom: 0;

  @media (min-width: 768px) {
    text-align: left;
    line-height: 2.5rem;
    font-weight: bold;
  }
  @media (min-width: 1024px) {
    font-size: 50px;
    line-height: 3.5rem;
  }

  span {
    color: #f36583;
  }
`;

export const Title2 = styled.p`
  margin-top: 1rem;
  font-size: 13px;
  color: #9f8189;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
    font-size: 15px;
  }
  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: left;
  }
`;
export const Button = styled(motion.button)`
  width: 147px;
  border-radius: 100px;
  background-color: ${(props) => (props.primary ? "#f36583" : "#FCEDE6")};
  color: ${(props) => (props.primary ? "#FCEDE6" : "#f36583")};
  padding: 0.5rem 1rem;
  border: ${(props) => (props.primary ? "none" : "1px solid #f36583")};
  margin-top: 0.5rem;
  font-size: 15px;
  cursor: pointer;

  @media (min-width: 768px) {
    margin-right: 1rem;
  }
  @media (min-width: 1024px) {
    padding: 0.8rem 1rem;
  }
`;

export const Balloon = styled.img`
  width: 221px;
  height: 374px;
  position: absolute;
  left: 2rem;
  z-index: 999;
  transform: ${(props) =>
    props.offsetY && `translateY(${props.offsetY * -0.5}px)`};

  @media (min-width: 768px) {
    height: 500px;
    width: 300px;
    left: 2.7rem;
  }
`;

export const Cloud1 = styled.img`
  width: 38px;
  height: 23px;
  position: absolute;
  top: 3rem;
  left: 3rem;
  transform: ${(props) =>
    props.offsetY && `translateY(${props.offsetY * 0.2}px)`};

  @media (min-width: 768px) {
    width: 70px;
    height: 40px;
    top:4rem;
    left: 3.3rem;
  }
`;

export const Cloud2 = styled.img`
  width: 104px;
  height: 61px;
  position: absolute;
  left: 12rem;
  top: 4rem;
  transform: ${(props) =>
    props.offsetY && `translateY(${props.offsetY * 0.3}px)`};

  @media (min-width: 768px) {
    width: 160px;
    height: 100px;
    left: 17rem;
    top: 5rem;
  }
`;

export const Cloud3 = styled.img`
  width: 72;
  height: 42px;
  position: absolute;
  top: 6rem;
  transform: ${(props) =>
    props.offsetY && `translateY(${props.offsetY * 0.1}px)`};

  @media (min-width: 768px) {
    width: 100px;
    height: 60px;
    top: 8rem;
  }
`;

export const Logoring = styled.img`
  width: 304px;
  margin-top: 1.5rem;
  @media (min-width: 768px) {
    width: 410px;
    margin-top: 2.5rem;
  }
`;
