import { createBrowserRouter } from "react-router-dom";
import OutletFolder from "../OutletFolder/OutletFolder";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Profile from "../components/Profile/Profile";
import ViweProductsDetiles from "../components/ViweProductsDetiles/ViweProductsDetiles";
import Dashboard from "../components/Dashboard/Dashboard";
import EditProfile from "../components/EditProfile/EditProfile";
import UserManual from "../components/UserManual/UserManual";

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
        loader: () => fetch(`https://dummyjson.com/products`),
      },
      {
        path: "/ViweProductsDetiles/:id",
        element: <ViweProductsDetiles></ViweProductsDetiles>,
        loader: ({ params }) =>
          fetch(`https://dummyjson.com/products/${params.id}`),
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
       children:[
        {
          path: "/profile",
          element:<Dashboard></Dashboard>
        },
        {
          path:"/profile/editprofile",
          element:<EditProfile></EditProfile>
        },
        {
          path:"/profile/usermanual",
          element:<UserManual></UserManual>
        }
       ]
      },
    ],
  },
]);

export default myCreatedRoute;
