import styled from "styled-components/macro";
import aboutus from "../../images/aboutus.png";
export const Wrapper = styled.section`
  position: relative;
`;

export const Banner = styled.div`
  position: relative;
`;

export const CoverPhoto = styled.img`
  width: 100%;
`;

export const ProfilePhoto = styled.img`
  width: 15rem;
  height: 15rem;
  @media (max-width: 768px) {
    position: absolute;
    width: 9rem;
    height: 9rem;
    z-index: 1;
    top: -60%;
    right: 1%
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  margin: 0 2rem;
  @media (min-width: 768px) {
    div.profile-container{
      display: flex;
      justify-content: center;
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
  }
`;

export const Aboutus = styled.p`
  color: #9F8189;
  font-size: 30px;
  font-weight: bold;
  margin-top: 1rem;
  margin-left: 2rem;
  line-height: 2.5rem;
  position: relative;
  span {
    color: #F36583;
  }
`;

export const Content = styled.p`
  font-size: 20px;
  margin-top: 1rem;
  display: flex;
  color: #9F8189;
  line-height: 1.3rem;
  @media(min-width: 768px) {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
    span.aboutcont {
      margin-right: 1rem;
    }
  }
  @media(max-width: 768px) {
    span.content {
      font-size: 15px;
    }
    span.aboutcont {
      margin-right: 0.5rem;
    }
  }
  span.aboutcont {
    font-size: 30px;
    color: #F36583;
  }
`;
