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
import './order.css';
export default function Order() {
  return (
    <>
      <Wrapper>
        <Container>
          <Formbox>
            <Row>
              <Title>BOOK NOW</Title>
            </Row>
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
            <Row className="align-items-center">
              <Title className="upload-image-text" secondary>Upload a reference image</Title>
            </Row>
            <Row className="button-row align-items-center upload-image-text">
              <Button small className="choosefile-button">Choose File</Button>
              <Button className="ordernow-button">Order Now</Button>
            </Row>
          </Formbox>
        </Container>
      </Wrapper>
    </>
  );
}
