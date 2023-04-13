import { createBrowserRouter } from "react-router-dom";

import Layout from "../Components/Layout/Layout";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import Admin from "../Pages/Admin/Admin";
import Dashboard from "../Components/Dashboard/Dashboard";
import Product from "../Components/Product/Product";
import Catagory from "../Components/Catagory/Catagory";
import Brand from "../Components/Brand/Brand";
import Tag from "../Components/Tag/Tag";
import Cart from "../Pages/Cart/Cart";
import WishList from "../Pages/WishList/WishList";

//create Route
const publicRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/wish",
        element: <WishList />,
      },
      {
        path: "/admin",
        element: <Admin />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "product",
            element: <Product />,
          },
          {
            path: "catagory",
            element: <Catagory />,
          },
          {
            path: "brand",
            element: <Brand />,
          },
          {
            path: "tag",
            element: <Tag />,
          },
        ],
      },
    ],
  },
]);

//export
export default publicRoute;
