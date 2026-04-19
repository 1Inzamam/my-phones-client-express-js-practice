import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../pages/Home";
import Phones from "../components/Phones";
import Phone from "../components/Phone";

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
        loader: () => fetch("http://localhost:5001/phones"),
      },
      {
        path: "/phone/:id",
        element: <Phone></Phone>,
        loader: ({ params }) =>
          fetch(`http://localhost:5001/phones/${params.id}`),
      },
    ],
  },
]);
