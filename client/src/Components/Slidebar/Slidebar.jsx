import React from "react";
import { Button } from "react-bootstrap";
import "./Slidebar.scss";

const Slidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-title">
          <h2>Search Product</h2>
          <input
            type="search"
            className="form-control"
            placeholder="Search..."
          />
        </div>
        <div className="sidbar-widget">
          <div className="widget-title">
            <h2>Catagories</h2>
            <hr />
          </div>
          <ul className="item">
            <li>
              <label>
                <input type="checkbox" /> Man
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> WoMen
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Kids
              </label>
            </li>
          </ul>
        </div>
        <div className="sidbar-widget">
          <div className="widget-title">
            <h2>Brands</h2>
            <hr />
          </div>
          <ul className="item">
            <li>
              <label>
                <input type="checkbox" /> Man
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> WoMen
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Kids
              </label>
            </li>
          </ul>
        </div>
        <div className="sidbar-widget">
          <div className="widget-title">
            <h2>Tags</h2>
            <hr />
          </div>
          <div className="tags-item">
            <a href="">Eid</a>
            <a href="">Eid</a>
            <a href="">Eid</a>
          </div>
        </div>
        <div className="sidbar-widget">
          <div className="price-search">
            <input
              className="form-control"
              type="text"
              placeholder="min price..."
            />
            <input
              className="form-control"
              type="text"
              placeholder="max price..."
            />
            <Button className="button" variant="primary">
              add
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slidebar;
