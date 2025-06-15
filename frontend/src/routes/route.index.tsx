import { createBrowserRouter } from "react-router-dom";
import LayoutWrapper from "../layouts/layout.wrapper";
import LayoutClient from "../layouts/client/layout.index";
import Home from "../components/home/home.index";
import Category from "../pages/category";
import SubCategory from "../pages/sub-category";
import Test from "../pages/test";
import { AuthRoutes } from "./auth.route";

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
          // SUB CATEGORY
          {
            path: ":categorySlug/:subCategorySlug",
            element: <SubCategory />,
          },
          // INFO TEST
          {
            path: ":categorySlug/:subCategorySlug/:testSlug",
            element: <Test />,
          },
          // DOING TEST
          {
            path: ":categorySlug/:subCategorySlug/:testSlug/:doTest",
            element: <Test />,
          },
          // AUTH ROUTES
          ...AuthRoutes,
        ],
      },

      // ADMIN ROUTES
    ],
  },
]);

export default router;
