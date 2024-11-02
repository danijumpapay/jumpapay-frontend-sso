import type { RouteObject } from "react-router";

// #region - IMPORTING PAGES
import Error from "@/pages/Error";
import Home from "@/pages/Home";
import Signin from "@/pages/Auth/Signin";
import Signup from "@/pages/Auth/Signup";
// #endregion - IMPORTING PAGES

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signin",
    element: <Signin/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "*",
    element: <Error />,
  },
];

export default routes;