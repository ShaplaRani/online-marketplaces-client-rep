import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AddJob from "../pages/AddJob/AddJob";
import PostedJobs from "../pages/PostedJobs/PostedJobs";
import Mybids from "../pages/MyBids/Mybids";
import PrivateRoutes from "./PrivateRoutes";
import ProductUpdate from "../component/ProductUpdate/ProductUpdate";
import JobDetails from "../pages/JobDetails/JobDetails";
import BidRequest from "../pages/Request/BidRequest";


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
          element:<PrivateRoutes><AddJob></AddJob></PrivateRoutes>
        },
        {
          path:'/postedJob',
          element:<PrivateRoutes><PostedJobs></PostedJobs></PrivateRoutes>
        },
        {
          path:'/product/:id',
          element:<ProductUpdate></ProductUpdate>,
          loader: ({params}) => 
        fetch(`https://online-marketplaces-server.vercel.app/api/email-product/${params.id}`)
        },
        {
          path:'/jobs/:id',
          element:<PrivateRoutes><JobDetails></JobDetails></PrivateRoutes>,
          loader: ({params}) => 
          fetch(`https://online-marketplaces-server.vercel.app/api/email-product/${params.id}`)
        },
        {
          path:'/bids',
          element:<PrivateRoutes><Mybids></Mybids></PrivateRoutes>
        },
        {
          path:'/bidRequest',
          element:<PrivateRoutes><BidRequest></BidRequest></PrivateRoutes>
        }
      ]
    },
  ]);

export default router;