import styled from "styled-components/macro";

export const Wrapper = styled.section`
  background-color: #f36583;
  padding: 2rem 2rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img`
  @media(max-width: 767px) {
    width: 43px;
    height: 42px
  }
  @media (min-width: 768px) {
    width: 87px;
    height: 86px
  }
`;

export const Logodiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  color: #fcede6;
  font-size: 50px;
  display: flex;
  @media(max-width: 767px) {
    font-size: 20px;
  }
  @media (min-width: 768px) {
    font-size: 50px;
  }
  justify-content: center;
  padding-top: 1rem;
  font-weight: bold;
`;

export const Social = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1rem;
`;

export const Instagram = styled.img`
  object-fit: none;
  @media(max-width: 767px) {
    width: 26px;
    height: 26px
  }
  @media (min-width: 768px) {
    width: 79px;
    height: 79px
  }
`;

export const Facebook = styled.img`
  margin-left: 1rem;
  object-fit: none;
  @media(max-width: 767px) {
    width: 26px;
    height: 26px;
  }
  @media (min-width: 768px) {
    width: 79px;
    height: 79px;
  }
`;

export const Contact = styled.div`
  display: flex;
  padding-top: 1rem;
  font-size: 20px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 767px) {
    font-size: 10px;
  }
  justify-content: center;
  img {
    height: 15px;
  }
  p {
    margin-left: 0.5rem;
  }
`;

export const Phone = styled.div`
  display: flex;
  color: white;
  align-self: center;
  @media (min-width: 768px) {
    margin-right: 2rem;
  }
  @media (max-width: 767px) {
    margin-right: 1rem;
  }
  font-weight: bold;
`;

export const Email = styled.div`
  display: flex;
  color: white;
  align-self: center;
  @media (min-width: 768px) {
    margin-right: 2rem;
  }
  @media (max-width: 767px) {
    margin-right: 1rem;
  }
  font-weight: bold;
`;

export const Location = styled.div`
  display: flex;
  color: white;
  align-self: center;
  font-weight: bold;
`;

export const Line = styled.hr`
  width: 100%;
  color: #fcede6;
`;

export const Circle = styled.div`
  border-radius: 50%;
  border: 1px solid #fcede6;
  background-color: #f36583;
  position: absolute;
  height: 30px;
  width: 30px;
  top: 30%; 
  z-index: 999;
  cursor: pointer;
  p {
    font-size: 10px;
    color: #fcede6;
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
  }
`;

export const Footer = styled.div`
  position: relative;
  padding: 2rem;
  margin-top: 2rem;
  @media (max-width: 767px) {
    margin-top: 1rem;
  }
  width: 100%;
  display: flex;
  justify-content: center;
`;
