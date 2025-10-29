import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";
import DetailPage from "../pages/DetailPage";
import ListPage from "../pages/ListPage";
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
                path: "about",
                element: <DetailPage />,
            }
        ],
    },
]);