import styled from "styled-components/macro";
import orderbg from "../../images/orderbg.png";
import formbg from "../../images/formbg.svg";

export const Wrapper = styled.section`
  background-image: url(${orderbg});
  background-size: contain;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
export const Formbox = styled.div`
  background-color: #F36583;
  border-radius: 30px;
  opacity: 0.8;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  @media(min-width: 768px) {
    padding-right: 1rem;
  }
  margin-bottom: 2rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const Title = styled.p`
  color: white;
  font-size: ${(props) => (props.secondary ? "10px" : "20px")};
`;
export const Row = styled.div`
  display: flex;
  @media(min-width: 768px) {
    flex-direction: row;
  }
  flex-direction: column;
  width: 100%;
`;

export const Input = styled.input`
  border-radius: 10px;
  padding: 5px 20px;
  border: none;
  color: white;
  margin-top: 1rem;
  margin-right: 1rem;
  width: 100%;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.35);
  @media(min-width: 768px) {
    width: 50%;
  }
`;

export const TextArea = styled.textarea`
  border-radius: 10px;
  padding: 5px 20px;
  border: none;
  color: white;
  width: 100%;
  margin-top: 1rem;
  margin-right: 1rem;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.35);
  height: 100px;
  @media(min-width: 768px) {
    width: 50%;
  }
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
  border: none;
`;
