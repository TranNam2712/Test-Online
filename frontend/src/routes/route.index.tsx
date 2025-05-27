import { createBrowserRouter } from "react-router-dom";
import LayoutWrapper from "../layouts/layout.wrapper";
import LayoutClient from "../layouts/client/layout.index";
import Home from "../pages/home";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";

const router = createBrowserRouter([
  {
    element: <LayoutWrapper />,
    children: [
      // CLIENT ROUTES
      {
        element: <LayoutClient />,
        children: [
          {
            path: "/",
            element: <Home />,
          },

          // AUTH ROUTES
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/register",
            element: <Register />,
          },
        ],
      },

      // ADMIN ROUTES
    ],
  },
]);

export default router;
