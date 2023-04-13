import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./home.scss";
import Products from "../../Components/Products/Products";

const Home = () => {
  return (
    <>
      <div className="homepage">
        <Container>
          <Row>
            <Col>
              <div className="header-title">
                <h2>welcome to mamu's Shop</h2>
              </div>

              <div className="main-header">
                <img
                  src="https://thumbs.dreamstime.com/b/shop-building-colorful-isolated-white-33822015.jpg"
                  alt=""
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="header-title">
                <h2>Expolore Our Products</h2>
              </div>
              <div className="products">
                <Products />
                <Products />
                <Products />
                <Products />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
