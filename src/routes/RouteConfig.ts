import Login from "../components/Login";
import Signup from "../components/Signup";
import Layout from "../Layout/Layout";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

export interface RouteConfig {
  path?: string;
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
        path: "",
        element: HomePage,
        isAuth: true,
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
    path: "*",
    element: NotFoundPage,
  },
];
