import {
    createBrowserRouter
} from "react-router-dom";
import MainBody from "../MainBody/MainBody";
import Home from "../HomePage/Home";
import Orders from "../Orders/Orders";
import Login from "../Login/Login";
import Register from "../Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainBody></MainBody>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/orders',
                element: <Orders></Orders>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    },
]);

export default router