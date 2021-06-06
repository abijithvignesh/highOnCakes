import styled from "styled-components/macro";

export const Wrapper = styled.section``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h1`
  align-self: center;
  color: #9f8189;
  padding: 20px;
  font-size: 27px;
`;

export const MenuTitle = styled.div`
  margin: 1rem 1rem;
  display: flex;
  justify-content: center;
`;

export const Top = styled.div`
  text-align: center;
`;
export const Bottom = styled.div`
  text-align: center;
`;

export const Menuimage = styled.img`
  @media(min-width: 768px) {
    width: 100px;
    height: 100px;
  }
  width: 58px;
  height: 58px;
`;

export const Cakes = styled.div``;

export const Tidbits = styled.div``;

export const MenuItems = styled.div`
  margin: 1rem 1rem;
  display: flex;
  flex-wrap: wrap;
  @media(min-width: 768px) {
    padding: 0 4rem;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  @media(min-width: 768px) {
    flex: 0 0 25%;
    max-width: 25%;
  }
    flex: 0 0 33.33%;
    max-width: 33.33%;
`;

export const Text = styled.p`
  font-size: 10px;
  color: #9f8189;
`;
