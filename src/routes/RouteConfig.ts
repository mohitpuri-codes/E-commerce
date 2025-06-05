import Login from "../components/Login";
import Signup from "../components/Signup";
import HomePageLayout from "../Layout/HomePageLayout";
import Layout from "../Layout/Layout";
import AboutPage from "../pages/AboutPage";
import ErrorBoundary from "../pages/TriggerErrorBoundaryPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import UserPage from "../pages/UserPage";
import SidebarLayout from "../Layout/SidebarLayout";

export interface RouteConfig {
  path: string;
  element: React.FC;
  children?: RouteConfig[];
  index?: boolean;
  isAuth?: boolean;
}

export const routes: RouteConfig[] = [
  {
    path: "/",
    element: Layout,
    children: [
      {
        index: true,
        path: "/",
        element: HomePageLayout,
        isAuth: true,
        children: [
          {
            path: "/",
            element: SidebarLayout,
            isAuth: true,
            children: [
              { path: "/", element: HomePage },
              {
                path: ":id",
                element: UserPage,
                isAuth: true,
              },
            ],
          },
        ],
      },
      {
        path: "about",
        element: AboutPage,
        isAuth: true,
      },
    ],
  },
  {
    path: "login",
    element: Login,
  },
  {
    path: "signup",
    element: Signup,
  },
  {
    path: "error-boundary",
    element: ErrorBoundary,
  },
  {
    path: "*",
    element: NotFoundPage,
  },
];
