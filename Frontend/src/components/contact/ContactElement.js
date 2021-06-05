import styled from "styled-components/macro";

export const Wrapper = styled.section`
  height: 40vh;
  background-color: #f36583;
`;

export const Container = styled.div`
  margin: 2rem 2rem;
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img`
  width: 43px;
  margin-top: 3rem;
`;

export const Logodiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  color: #fcede6;
  font-size: 20px;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  font-weight: bold;
`;

export const Social = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const Instagram = styled.img`
  width: 26px;
`;

export const Facebook = styled.img`
  width: 26px;
  margin-left: 1rem;
`;

export const Contact = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
  img {
    height: 15px;
  }
  p {
    margin-left: 0.5rem;
  }
`;

export const Phone = styled.div`
  display: flex;
  font-size: 10px;
  align-self: center;
`;

export const Email = styled.div`
  display: flex;
  font-size: 10px;
  align-self: center;
`;

export const Location = styled.div`
  display: flex;
  font-size: 10px;
  align-self: center;
`;

export const Line = styled.hr`
  width: 100%;
  margin-top: 2rem;
  position: absolute;
  color: #fcede6;
`;

export const Circle = styled.div`
  border-radius: 50%;
  border: 1px solid #fcede6;
  background-color: #f36583;
  position: absolute;
  height: 30px;
  width: 30px;
  top: 1.1rem; 
  z-index: 999;
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
  width: 100%;
  display: flex;
  justify-content: center;
`;
