import { createBrowserRouter } from "react-router";
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