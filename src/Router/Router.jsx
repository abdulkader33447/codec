import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Home/Home";
import About from "../Home/Sections/About/About";
import Services from "../Home/Sections/Services/Services";
import Resume from "../Home/Sections/Resume/Resume";
import Portfolio from "../Home/Sections/Portfolio/Portfolio";
import Blogs from "../Home/Sections/Blogs/Blogs";
import Contact from "../Home/Sections/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/services",
        Component: Services,
      },
      {
        path: "/resume",
        Component: Resume,
      },
      {
        path: "/portfolio",
        Component: Portfolio,
      },
      {
        path: "/blog",
        Component: Blogs,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
]);
