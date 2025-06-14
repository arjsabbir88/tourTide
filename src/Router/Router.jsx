import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import ErrorPage from "../pages/404-pages/ErrorPage";
import Home from "../pages/Home/Home";
import AllPackages from "../pages/AllPackages/AllPackages";
import MyBooking from "../pages/MyBooking/MyBooking";
import AboutUs from "../pages/AboutUs/AboutUs";
import AddPackages from "../pages/AddPackages/AddPackages";
import ManagePackages from "../pages/ManagePackages/ManagePackages";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";



export const Router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        errorElement: <ErrorPage/>,
        children:[
            {
                index: true,
                Component: Home
            },
            {
                path: '/all-packages',
                Component: AllPackages
            },
            {
                path: '/my-bookings',
                Component: MyBooking
            },
            {
                path: '/about-us',
                Component: AboutUs
            },
            {
                path: '/add-package',
                Component: AddPackages
            },
            {
                path: '/managePackages',
                Component: ManagePackages
            },
            {
                path: '/auth/login',
                Component: Login
            },
            {
                path: '/auth/register',
                Component: Register
            }
        ]
    }
])