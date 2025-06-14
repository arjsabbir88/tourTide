import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import ErrorPage from "../pages/404-pages/ErrorPage";
import Home from "../pages/Home/Home";



export const Router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        errorElement: <ErrorPage/>,
        children:[
            {
                index: true,
                Component: Home
            }
        ]
    }
])