import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Home/Home";

export const router = createBrowserRouter([
{
    path: "/",
    Component:RootLayout,
    children:[
        {
            path:"/",
            Component:Home,
        }
    ]
}
]);