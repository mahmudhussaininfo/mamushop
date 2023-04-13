import { RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import publicRoute from "./routes/publicRoute";

function App() {
  return (
    <>
      <RouterProvider router={publicRoute} />
    </>
  );
}

export default App;
