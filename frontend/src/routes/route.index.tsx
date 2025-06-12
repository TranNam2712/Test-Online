import { createBrowserRouter } from "react-router-dom";
import LayoutWrapper from "../layouts/layout.wrapper";
import LayoutClient from "../layouts/client/layout.index";
import Home from "../components/home/home.index";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Category from "../pages/category";
import SubCategory from "../pages/sub-category";
import Test from "../pages/test";

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

          //  CATEGORY ROUTES

          {
            path: ":categorySlug",
            element: <Category />,
          },
          {
            path: ":categorySlug/:subCategorySlug",
            element: <SubCategory />,
          },
          {
            path: ":categorySlug/:subCategorySlug/:testSlug",
            element: <Test />,
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
