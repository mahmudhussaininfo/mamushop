import { RouterProvider } from "react-router-dom";
import publicRoute from "./routes/publicRoute";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllBrands } from "./Redux/Shop/action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBrands());
  });
  return (
    <>
      <RouterProvider router={publicRoute} />
    </>
  );
}

export default App;
