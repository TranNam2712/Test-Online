import type { RouteObject } from "react-router-dom";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";

export const AuthRoutes: RouteObject[] = [
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
];
