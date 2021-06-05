import styled from "styled-components/macro";

export const Wrapper = styled.section`
  height: 500px;
`;

export const Banner = styled.div`
  position: relative;
`;

export const CoverPhoto = styled.img`
  width: 100%;
`;

export const ProfilePhoto = styled.img`
  position: absolute;
 // width: 115px;
  width: 7rem;
  top: 12rem;
  right: .5rem;
`;

export const Container = styled.div`
  position: relative;
`;

export const Aboutus = styled.p`
  color: #9f8189;
  font-size: 30px;
  font-weight: bold;
  margin-top: 1rem;
  margin-left: 2rem;
  line-height: 2.5rem;
  position: relative;
  span {
    color: #f36583;
  }
`;

export const Content = styled.p`
  font-size: 12px;
  color: #9f8189;
  position: absolute;
  margin-left: 5rem;
  top: 3rem;
  line-height: 1rem;
`;
