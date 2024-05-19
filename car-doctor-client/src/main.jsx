import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './routes/root';
import ErrorPage from "./error-page";
import Home from './components/home/home';
import Login from './components/login';
import Signup from './components/signup';
import AuthProviders from './components/Providers/authProvides';
import Checkout from './components/home/Checkout/checkout';
import { url_default } from './routes/url_main';
import CheckoutPage from './components/home/Checkout/checkoutPage';
import Bookings from './components/home/Bookings/bookings';
import PrivateRoute from './routes/privateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "checkout/",
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
        // loader: ({ params }) => fetch(`${url_default}/services/${params.id}`)
      },
      {
        path: "checkout/:id",
        element: <PrivateRoute><CheckoutPage></CheckoutPage></PrivateRoute>,
        loader: ({ params }) => fetch(`${url_default}/services/${params.id}`)
      },
      {
        path: "bookings/",
        element: <PrivateRoute><Bookings></Bookings></PrivateRoute>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
