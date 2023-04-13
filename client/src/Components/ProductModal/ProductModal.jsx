import React from "react";
import "./ProductModal.scss";
import { Button, Modal, ModalHeader } from "react-bootstrap";

const ProductModal = ({ show, onHide }) => {
  return (
    <>
      <Modal show={show} onHide={onHide} size="lg" centered>
        <ModalHeader closeButton></ModalHeader>
        <Modal.Body>
          <div className="product-view">
            <div className="product-photo">
              <img
                src="https://stylesatlife.com/wp-content/uploads/2018/04/green-leafy-vegetables-2.jpg.webp"
                alt=""
              />
            </div>
            <div className="product-details">
              <h3>Banana</h3>
              <hr />
              <div className="product-view-price">
                <span className="regular">$250</span>
                <span className="sale">$200</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                quam et suscipit sequi maxime, perferendis sit, consequuntur
                quod dolorem blanditiis facilis facere repellendus neque quaerat
                laudantium in fugit! Mollitia, voluptatibus!
              </p>
              <div className="view-button">
                <Button>Add to card</Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductModal;
