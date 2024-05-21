import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../assets/Icons/icons8-learning-50.png";
import { Link } from "react-router-dom";

const navItems = (
  <>
    <List
      style={{ padding: 0, margin: 0, listStyleType: "none", display: "flex" }}
    >
      <ListItem style={{ padding: 0 }}>
        <Link
          to="/home"
          style={{
            textDecoration: "none",
            color: "inherit",
            padding: "8px 16px",
            display: "block",
          }}
        >
          Home
        </Link>
      </ListItem>
      <ListItem style={{ padding: 0 }}>
        <Link
          href="/about"
          style={{
            textDecoration: "none",
            color: "inherit",
            padding: "8px 16px",
          }}
        >
          About
        </Link>
      </ListItem>
      <ListItem style={{ padding: 0 }}>
        <Link
          href="/services"
          style={{
            textDecoration: "none",
            color: "inherit",
            padding: "8px 16px",
            display: "block",
          }}
        >
          Services
        </Link>
      </ListItem>
      <ListItem style={{ padding: 0 }}>
        <Link
          to="/login"
          style={{
            textDecoration: "none",
            color: "inherit",
            padding: "8px 16px",
            display: "block",
          }}
        >
          Login
        </Link>
      </ListItem>
    </List>
  </>
);

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <div>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            edge="start"
            // color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img width={50} height={40} src={logo} />
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* {navItems.map((item) => (
              <Button
                key={item}
              >
                {item}
              </Button>
            ))} */}

            {navItems}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
          <List>
            {/* {navItems.map((item) => (
              <ListItem button key={item}>
                <ListItemText primary={item} />
              </ListItem>
            ))} */}
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default Header;
