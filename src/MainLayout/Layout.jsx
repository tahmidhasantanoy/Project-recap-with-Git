import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <Box height={"100vh"}>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Layout;
