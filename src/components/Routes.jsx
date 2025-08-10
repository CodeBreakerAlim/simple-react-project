import {createBrowserRouter, Routes} from"react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Setting from "./pages/Setting";
import Product from "./pages/Product";
import Login from "./auth/Login";
import Register from "./auth/Register";
const router=createBrowserRouter([
    {
        path:"/",
        Component: Root,
        children:[{
            index: true,
            Component: Home
        },
        {
            path:"about",
            Component: About
        },
        {
            path:"menu",
            Component: Menu
        },
        {
            path:"setting",
            Component: Setting
        },
        {
            path:"product",
            Component: Product
        },
        {
            path:"login",
            Component:Login
        },
        {
            path:"register",
            Component:Register
        }
    ]
    },
]);
export default router