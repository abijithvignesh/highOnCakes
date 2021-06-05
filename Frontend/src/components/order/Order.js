import React from "react";
import {
  Container,
  Wrapper,
  Formbox,
  Title,
  Row,
  Input,
  TextArea,
  Button,
} from "./OrderElement";

export default function Order() {
  return (
    <>
      <Wrapper>
        <Container>
          <Formbox>
            <Title>BOOK NOW</Title>
            <Row>
              <Input type="text" placeholder="Name" />
              <Input type="text" placeholder="Phone Number" />
            </Row>
            <Row>
              <Input type="date" placeholder="Name" />
              <Input type="text" placeholder="Product" />
            </Row>
            <Row>
              <TextArea placeholder="Specification" />
              <TextArea placeholder="Delivery Address" />
            </Row>
            <Title secondary>Upload a reference image</Title>
            <Button small>Choose File</Button>
            <Button >Order Now</Button>
          </Formbox>
        </Container>
      </Wrapper>
    </>
  );
}
