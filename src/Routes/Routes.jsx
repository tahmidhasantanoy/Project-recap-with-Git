import { createBrowserRouter } from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
