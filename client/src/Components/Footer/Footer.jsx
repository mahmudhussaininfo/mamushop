import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="copy-right">
              <p>Copy Right from @Mahmud</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
