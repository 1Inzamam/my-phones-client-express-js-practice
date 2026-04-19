import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../pages/Home";
import Phones from "../components/Phones";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/phones",
        element: <Phones></Phones>,
      },
    ],
  },
]);
