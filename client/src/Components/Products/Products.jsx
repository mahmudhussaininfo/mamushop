import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Products.scss";
import ProductModal from "../ProductModal/ProductModal";

const Products = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className="product-item">
        <ProductModal show={modal} onHide={() => setModal(false)} />
        <Card>
          <Link to="">
            <Card.Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Broccoli_and_cross_section_edit.jpg/1200px-Broccoli_and_cross_section_edit.jpg" />
          </Link>

          <Card.Body>
            <Card.Title>Apple</Card.Title>
            <div className="product-price">
              <span className="regular">$250</span>
              <span className="sale">$200</span>
            </div>
            <div className="product-button">
              <Button className="button-card" variant="success">
                Add to Card
              </Button>{" "}
              &nbsp;
              <Button
                onClick={() => setModal(true)}
                className="button-view"
                variant="info"
              >
                View
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Products;
