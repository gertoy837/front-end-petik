import React from "react";
import { NavLink } from "react-router-dom";
import { Card, CardBody, CardText, CardTitle, Col, Row } from "reactstrap";

const Products = () => {
  const Products = [
    {
      title: "Product 1",
      price: "10000",
    },
    {
      title: "Product 2",
      price: "25000",
    },
    {
      title: "Product 3",
      price: "5200",
    },
    {
      title: "Product 4",
      price: "50000",
    },
    {
      title: "Product 5",
      price: "100000",
    },
  ];
  return (
    <div>
      <Row>
        {Products.map((product, index) => {
          return (
            <Col sm={6} md={4} lg={3} xl={2} key={index} className="mb-4">
              <NavLink to={'/detail'}>
                <Card
                  color="light"
                  style={{
                    width: "18rem",
                  }}
                >
                  <img alt="Sample" src="https://picsum.photos/300/200" />
                  <CardBody className="text-center">
                    <CardTitle tag="h5">{product.title}</CardTitle>
                    <CardText>{product.price}</CardText>
                  </CardBody>
                </Card>
              </NavLink>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Products;
