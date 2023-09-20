import { createBrowserRouter } from "react-router-dom";
import OutletFolder from "../OutletFolder/OutletFolder";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Profile from "../components/Profile/Profile";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <OutletFolder></OutletFolder>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Products",
        element: <About></About>,
        loader: () => fetch(`https://dummyjson.com/products`)
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);

export default myCreatedRoute;
