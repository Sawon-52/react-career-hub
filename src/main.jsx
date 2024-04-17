import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import Applied from "./Components/Applied/Applied.jsx";
import Blogs from "./Components/Blogs/Blogs.jsx";
import Jobdetails from "./Components/JobDetails/Jobdetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/applied",
        element: <Applied></Applied>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },

      {
        path: "/job/:id",
        element: <Jobdetails></Jobdetails>,
        loader: () => fetch("../jobs.json"), //dont load all data. load data only what you need
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
