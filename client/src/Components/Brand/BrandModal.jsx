import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import axios from "axios";
import { useDispatch } from "react-redux";
import { createBrands } from "../../Redux/Shop/action";

const BrandModal = ({ show, onHide, setModal }) => {
  const [input, setInput] = useState("");
  const [logo, setLogo] = useState(null);

  const dispatch = useDispatch();

  // for logo
  const handleFile = (e) => {
    setLogo(e.target.files[0]);
  };

  //submit data from api
  const handleSubmit = (e) => {
    e.preventDefault();

    const form_data = new FormData();
    form_data.append("name", input);
    form_data.append("brand-photo", logo);

    dispatch(createBrands({ data: form_data, setModal, setInput, setLogo }));
    e.target.reset();

    //final submit data with axios
    axios
      .post("http://localhost:6060/api/v1/product/brands", form_data)
      .then((res) => {
        console.log(res.form_data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      <div className="brandModal">
        <Modal show={show} onHide={onHide} centered>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBrand">
                <Form.Label>Brand Name</Form.Label>
                <Form.Control
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  type="text"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Brand Logo</Form.Label>
                <Form.Control onChange={handleFile} type="file" />
                {logo && (
                  <img
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      paddingTop: "10px",
                    }}
                    src={URL.createObjectURL(logo)}
                    alt=""
                  />
                )}
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default BrandModal;
