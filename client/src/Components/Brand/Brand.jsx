import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { BiImageAdd } from "react-icons/bi";
import { FiEdit3 } from "react-icons/fi";
import { CiTrash } from "react-icons/ci";
import BrandModal from "./BrandModal";
import { useDispatch, useSelector } from "react-redux";
import { delateBrands } from "../../Redux/Shop/action";
import swal from "sweetalert";

const Brand = () => {
  const [status, setStatus] = useState(true);
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();

  const handleDelateBrand = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(delateBrands(id));
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  const { brands } = useSelector((state) => state.shop);
  return (
    <>
      <div className="brand">
        <div className="brand-header">
          <h2>Brands</h2>
          <button onClick={() => setModal(true)}>
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
              {brands.map(({ name, photo, _id }, index) => {
                return (
                  <tr className="align-middle" key={index}>
                    <td>{index + 1}</td>
                    <td>{name}</td>
                    <td>
                      <img
                        style={{
                          width: "40px",
                          height: "40px",
                          objectFit: "cover",
                        }}
                        src={`http://localhost:6060/brand/${photo}`}
                        alt=""
                      />
                    </td>
                    <td>
                      <Form>
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          label=""
                          checked={status}
                        />
                      </Form>
                    </td>
                    <td>
                      <Button variant="warning">
                        <FiEdit3 />
                      </Button>
                      &nbsp;
                      <Button
                        variant="danger"
                        onClick={() => handleDelateBrand(_id)}
                      >
                        <CiTrash />
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <BrandModal
          setModal={setModal}
          show={modal}
          onHide={() => setModal(false)}
        />
      </div>
    </>
  );
};

export default Brand;
