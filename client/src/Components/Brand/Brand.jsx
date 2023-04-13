import React from "react";
import { Button, Form, Table } from "react-bootstrap";
import { BiImageAdd } from "react-icons/bi";
import { FiEdit3 } from "react-icons/fi";
import { CiTrash } from "react-icons/ci";

const Brand = () => {
  return (
    <>
      <div className="brand">
        <div className="brand-header">
          <h2>Brands</h2>
          <button>
            {" "}
            <BiImageAdd /> Create New Brand
          </button>
        </div>
        <div className="brand-table my-3">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Logo</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="align-middle">
                <td>hhhhh</td>
                <td>ggggg</td>
                <td>
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "cover",
                    }}
                    src=""
                    alt=""
                  />
                </td>
                <td>
                  <Form>
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      label=""
                      checked=""
                    />
                  </Form>
                </td>
                <td>
                  <Button variant="warning">
                    <FiEdit3 />
                  </Button>
                  &nbsp;
                  <Button variant="danger">
                    <CiTrash />
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Brand;
