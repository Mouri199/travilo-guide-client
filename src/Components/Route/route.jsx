import {
    createBrowserRouter
} from "react-router-dom";
import MainBody from "../MainBody/MainBody";
import Login from "../Login/Login";
import Register from "../Register/Register";

import Home from "../HomePage/Home";
import ServiceDetails from "../HomePage/ServiceDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Details from "../HomePage/Details";
import AddServices from "../Add/AddServices";
import Services from "../Services/Services";
import MyBooking from "../Navbar/MyBooking";
import ManageService from "../ManageService/ManageService";
import Update from "../Update/Update";
import Error from "../Error/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainBody></MainBody>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://travilo-guide-server.vercel.app/allservices')
            },
            {
                path: '/serviceDetails/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://travilo-guide-server.vercel.app/allservices/${params.id}`)
            },
            {
                path: '/addservices',
                element: <AddServices></AddServices>
            },
            {
                path: '/manageservice',
                element:<ManageService></ManageService>
            },
            {
                path:'/update/:id',
                element: <Update></Update>,
                loader: ({params}) => fetch(`https://travilo-guide-server.vercel.app/Details/${params.id}`)
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('https://travilo-guide-server.vercel.app/allservices')
            },
            {
                path: '/mybooking',
                element:<MyBooking></MyBooking>,
                loader: () => fetch('https://travilo-guide-server.vercel.app/mybooking')
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`https://travilo-guide-server.vercel.app/Details/${params.id}`)
            },
            {
                
            }
        ]
    },
]);

export default router