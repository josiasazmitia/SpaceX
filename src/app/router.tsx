import { createBrowserRouter } from "react-router";
import { Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import DetailPage from "../pages/DetailPage";
import ListPage from "../pages/ListPage";
import AboutPage from "../pages/AboutPage";
import Home from "../pages/Home";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "launches",
                element: <ListPage />,
            },
            {
                path: "detail/:id",
                element: <DetailPage />,
            },
            {
                path: "detail",
                element: <Navigate to="/launches" replace />,
            },
            {
                path: "details/:id",
                element: <DetailPage />,
            },
            {
                path: "about",
                element: <AboutPage />,
            }
        ],
    },
]);