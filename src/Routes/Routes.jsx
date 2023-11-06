import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AddJob from "../pages/AddJob/AddJob";
import PostedJobs from "../pages/PostedJobs/PostedJobs";
import Mybids from "../pages/MyBids/Mybids";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path: "/",
          element:<Home></Home>
        },
        {
          path:'register',
          element:<Register></Register>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/addJob',
          element:<AddJob></AddJob>
        },
        {
          path:'/postedJob',
          element:<PostedJobs></PostedJobs>
        },
        {
          path:'/bids',
          element:<Mybids></Mybids>
        }
      ]
    },
  ]);

export default router;