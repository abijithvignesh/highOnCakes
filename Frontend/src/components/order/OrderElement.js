import styled from "styled-components/macro";
import orderbg from "../../images/orderbg.png";
import formbg from "../../images/formbg.svg";

export const Wrapper = styled.section`
  min-height: 100vh;
  background-image: url(${orderbg});
  background-size: contain;
`;

export const Container = styled.div`
  margin: 2em 2em;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
export const Formbox = styled.div`
  background-image: url(${formbg});
  background-size: contain;
  height: 623px;
  width: 320px;
  margin-top: 4rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const Title = styled.p`
  color: white;
  margin-top: ${(props) => (props.secondary ? "1rem" : "2rem")};
  margin-bottom: ${(props) => (props.secondary ? "1rem" : "2rem")};
  font-size: ${(props) => (props.secondary ? "10px" : "20px")};
`;
export const Row = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border-radius: 10px;
  padding: 5px 20px;
  border: none;
  color: white;
  margin-top: 1em;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.35);
`;

export const TextArea = styled.textarea`
  border-radius: 10px;
  padding: 5px 20px;
  border: none;
  color: white;
  margin-top: 1em;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.35);
  height: 100px;
`;

export const Button = styled.button`
  border-radius: 30px;
  color: #e36e84;
   ${props=>{
       if(props.small)
       return`
        padding: .5em 1em;
       `
       else
       return`
       padding: 1em 2em;
       font-size: 12px;
       `
   }}
 // padding: .5em 1em;
  border: none;
  margin-top: ${props=>props.small? "0":"1rem"};
`;
