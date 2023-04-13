import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <>
      <div className="header">
        <Container>
          <Row>
            <div className="header-part">
              <Col md={2}>
                <div className="logo-img">
                  <Link>
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/015/584/177/original/online-shop-logo-design-free-vector.jpg"
                      alt=""
                    />
                  </Link>
                </div>
              </Col>
              <Col md={10}>
                <div className="menu-item">
                  <ul>
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/shop">Shop</NavLink>
                    </li>
                    <li>
                      <NavLink to="/cart">cart</NavLink>
                    </li>
                    <li>
                      <NavLink to="/wish">wishlist</NavLink>
                    </li>
                    <li>
                      <NavLink to="/admin">Admin</NavLink>
                    </li>
                  </ul>
                </div>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Header;
