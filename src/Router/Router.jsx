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
import PrivetRoute from "../Component/PrivetRoute/PrivetRoute";
import Loader from "../Component/Loader/Loader";
import HomeCardDetails from "../pages/HomeCardDetails/HomeCardDetails";
import AllPackageDetails from "../pages/AllPackageDetails/AllPackageDetails";
import UpdatePackage from "../pages/UpdatePackage/UpdatePackage";

export const Router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("http://localhost:3000/tour-card-data"),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "/package/details/:id",
        element: (
          <PrivetRoute>
            <HomeCardDetails></HomeCardDetails>
          </PrivetRoute>
        ),
        loader: async ({ params }) => {
          const token = localStorage.getItem("access_token");
          if (!token) {
            console.log('No token found');
            throw new Error("No token found");
          }
          const response = await fetch(
            `http://localhost:3000/tour-card-data/details/${params.id}`,
            {
              headers: {
                authorization: `Bearer ${token}`,
              },
            }
          );

          // console.log('Fetch response status:', response.status);
          if (!response.ok) {
            if (response.status === 401 || response.status === 403) {
                console.log('Unauthorized or Forbidden, removing token');
              localStorage.removeItem("access_token");
              return <Navigate to="/auth/login" />;
            }
            throw new Error("Failed to fetch tour card details");
          }

          const data = await response.json();
          console.log('Fetched data:', data);
          return data;
        },
        hydrateFallbackElement: <Loader />,
      },
      {
        path: "/all-packages",
        Component: AllPackages,
        loader: () => fetch("http://localhost:3000/all-packages"),
        hydrateFallbackElement: <Loader />,
      },
      {
        path: "/all-packages/details/:id",
        element: (
          <PrivetRoute>
            <AllPackageDetails />
          </PrivetRoute>
        ),
        // loader: async({ params }) =>{

        //   const token = localStorage.getItem('access_token');

        //   if(!token){
        //     throw new Error("No token found");
        //   }

        //   const response = fetch(`http://localhost:3000/tour-card-data/details/${params.id}`,{
        //     headers: {
        //         authorization: `Bearer ${token}`,
        //       },
        //   })

        //   if (!response.ok) {
        //     if (response.status === 401 || response.status === 403) {
        //         console.log('Unauthorized or Forbidden, removing token');
        //       localStorage.removeItem("access_token");
        //       return <Navigate to="/auth/login" />;
        //     }
        //     throw new Error("Failed to fetch tour card details");
        //   }
        //   const data = await response.json();
        //   console.log('Fetched data:', data);
        //   return data;
        // },
        loader: async ({ params }) => {
          const token = localStorage.getItem("access_token");
          if (!token) {
            console.log('No token found');
            throw new Error("No token found");
          }
          const response = await fetch(
            `http://localhost:3000/tour-card-data/details/${params.id}`,
            {
              headers: {
                authorization: `Bearer ${token}`,
              },
            }
          );

          // console.log('Fetch response status:', response.status);
          if (!response.ok) {
            if (response.status === 401 || response.status === 403) {
                console.log('Unauthorized or Forbidden, removing token');
              localStorage.removeItem("access_token");
              return <Navigate to="/auth/login" />;
            }
            throw new Error("Failed to fetch tour card details");
          }

          const data = await response.json();
          // console.log('Fetched data:', data);
          return data;
        },
        hydrateFallbackElement: <Loader />,
      },
      {
        path: "/my-bookings",
        element: (
          <PrivetRoute>
            <MyBooking></MyBooking>
          </PrivetRoute>
        ),
      },
      {
        path: "/about-us",
        Component: AboutUs,
      },
      {
        path: "/add-package",
        Component: AddPackages,
      },
      {
        path: "/managePackages",
        element: (
          <PrivetRoute>
            <ManagePackages></ManagePackages>
          </PrivetRoute>
        ),
      },
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
      {
        path: "/update-package/:id",
        element: (
          <PrivetRoute>
            <UpdatePackage></UpdatePackage>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/package/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: '/error-404-page',
        Component: ErrorPage
      }
    ],
  },
]);
