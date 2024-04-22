import React from "react";
import { Button, Col, Container, Row } from "reactstrap";

const Hero = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={8} className="text-md-left">
          <h2 className="text-primary">Title</h2>
          <h3 className="text-primary">Genre : </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            corrupti porro possimus quas quibusdam temporibus ea! Vel distinctio
            quibusdam voluptate ullam officiis, unde corporis? Consequatur
            doloremque quo quibusdam deleniti asperiores.
          </p>
          <Button color="primary">Primary</Button>
        </Col>
        <Col md={4}>
          <img src="https://picsum.photos/300/200" alt="hero-img" />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
