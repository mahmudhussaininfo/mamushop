import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import "./Admin.scss";

const Admin = () => {
  return (
    <>
      <div className="admin my-3">
        <Container>
          <Row>
            <Col md={2}>
              <div className="admin-menu">
                <ul>
                  <li>
                    <Link to="dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="product">Product</Link>
                  </li>
                  <li>
                    <Link to="catagory">Catagory</Link>
                  </li>
                  <li>
                    <Link to="brand">Brand</Link>
                  </li>
                  <li>
                    <Link to="tag">Tags</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={10}>
              <Outlet />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Admin;
