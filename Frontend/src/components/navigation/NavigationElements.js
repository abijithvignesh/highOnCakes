import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fcede6;
  height: 3.5rem;
  box-shadow: 0 4px 8px -3px #00000029;
`;

export const Nav = styled.nav`
  margin: 2rem 2rem;
  display: flex;
  font-family: "Poppins", sans-serif;
  justify-content: space-between;
`;

export const LeftNav = styled.div`
   @media (min-width: 1024px) {
      margin-left: 4rem;
    }
  a {
    text-decoration: none;
    font-weight: 600;
    color: #f36583;
    font-size: ${(props) => (props.show ? "0px" : "20px")};
    cursor: pointer;
    @media (min-width: 1024px) {
      font-size: 25px;
    }
  }
`;

export const RightNav = styled.div`
  display: flex;
  @media (min-width: 1024px) {
      margin-right: 4rem;
    }
  img {
    @media (min-width: 768px) {
      display: none;
    }
    cursor: pointer;
    display: ${(props) => (props.show ? "none" : "inline")};
  }
  ul {
    display: none;
    @media (min-width: 768px) {
      display: inline;
      font-size: 15px;
    }
    @media (min-width: 1024px) {
      font-size: 17px;
    }
    list-style-type: none;
    margin: 0;
    padding: 0;
   
    font-weight: 500;
   
  }
  li {
    display: inline;
    margin-left: 1.2rem;
    a {
      padding: 8px;
      color: #f36583;
      cursor: pointer;
      :hover{
        color:#9F8189;
      }
    }
  }
`;

export const Navtoggle = styled.div`
  background-color: #f36583;
  width: 80%;
  z-index: 1000;
  border-radius: 5%;

  img {
    width: 30px;
    cursor: pointer;
  }
  ul {
    list-style-type: none;
    padding: 2rem 1rem;
    text-align: right;
    color: white;
  }
  li {
    padding-top: 1rem;
    font-size: 20px;
    cursor: pointer;

    :hover {
      font-size: 30px;
      transition:  height .2s, transform .2s;
    }
  }
  ${(props) => {
    if (props.show)
      return `
      display: block;
      animation: fade_in_show 0.5s;
       @keyframes fade_in_show {
       0% {
          opacity: 0;
        }

     100% {
          opacity: 1; 
     }
       `;
    else
      return `
      display: none;
       `;
  }}
`;
