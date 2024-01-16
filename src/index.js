import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ErrorPage from "./Components/Pages/ErrorPage";
import LandingPage from "./Components/Pages/LandingPage";
import Info from "./Components/Pages/Info";

import Ceramics from "./Components/Pages/Ceramics";
import Urchinware from "./Components/Pages/Urchinware";
import OpenRoad from "./Components/Pages/OpenRoad";
import TrashKiln from "./Components/Pages/TrashKiln";

import Programming from "./Components/Pages/Programming";
import UbiSMART from "./Components/Pages/UbiSMART";
import MaterialsLibrary from "./Components/Pages/MaterialsLibrary";

import reportWebVitals from "./reportWebVitals";
import { createHashRouter, RouterProvider } from "react-router-dom"; // Updated import

const router = createHashRouter([ // Updated: Switched to createHashRouter
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />
      },
      {
        path: "info",
        element: <Info />,
      },
      {
        path: "ceramics",
        element: <Ceramics />,
      },
      {
        path: "urchinware",
        element: <Urchinware/>,
      },
      {
        path: "trashkiln",
        element: <TrashKiln />,
      },
      {
        path: "openroadpottery",
        element: <OpenRoad />,
      },
      {
        path: "programming",
        element: <Programming />,
      },
      {
        path: "ubismart",
        element: <UbiSMART />,
      },
      {
        path: "materialslibrary",
        element: <MaterialsLibrary />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
