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
  @media (max-width: 767px) {
    width: 43px;
    height: 42px;
  }
  @media (min-width: 768px) {
    width: 87px;
    height: 86px;
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
  @media (max-width: 767px) {
    font-size: 20px;
  }
  @media (min-width: 768px) {
    font-size: 20px;
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
  width: 2.5rem;
  height: 2.5rem;
`;

export const Facebook = styled.img`
  margin-left: 1rem;
  object-fit: none;
  width: 2.5rem;
  height: 2.5rem;
  
`;

export const Contact = styled.div`
  display: flex;
  padding-top: 1rem;
  font-size: 20px;
  @media (min-width: 768px) {
    font-size: 20px;
    img {
      width: 30px;
      height: 24px;
    }
  }
  @media (max-width: 767px) {
    font-size: 10px;
    img {
      width: 22px;
      height: 15px;
    }
  }
  justify-content: center;
  p {
    margin-left: 0.5rem;
  }
`;

export const Phone = styled.div`
  display: flex;
  color: white;
  align-items: center;
  @media (min-width: 768px) {
    margin-right: 2rem;
    p {
      font-size: 15px;
    }
  }
  @media (max-width: 767px) {
    margin-right: 1rem;
  }
  font-weight: bold;
`;

export const Email = styled.div`
  display: flex;
  color: white;
  align-items: center;
  @media (min-width: 768px) {
    margin-right: 2rem;
    p {
      font-size: 15px;
    }
  }
  @media (max-width: 767px) {
    margin-right: 1rem;
  }
  font-weight: bold;
`;

export const Location = styled.div`
  display: flex;
  color: white;
  font-weight: bold;
  align-items: center;
  p {
    font-size: 15px;
  }
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
