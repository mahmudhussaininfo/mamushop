import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Products from "../../Components/Products/Products";
import Slidebar from "../../Components/Slidebar/Slidebar";
import "./Shop.scss";

const Shop = () => {
  return (
    <>
      <section className="my-5">
        <Container>
          <Row>
            <Col md={3}>
              <div className="sidebar">
                <Slidebar />
              </div>
            </Col>
            <Col md={9}>
              <div className="products">
                <Products />
                <Products />
                <Products />
                <Products />
                <Products />
                <Products />
                <Products />
                <Products />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Shop;
