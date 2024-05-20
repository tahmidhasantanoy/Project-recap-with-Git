import { createBrowserRouter } from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Login from "../Login/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
