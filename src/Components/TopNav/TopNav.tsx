import { Box, Button, TextField, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { useAppSelector } from "../../Data/reduxHooks";
import "./TopNav.scss";

export default function TopNav() {
  const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
  const userName = useAppSelector((state) => state.user.name);
  const drawerItems: string[] = ["Home", "Products", "About Us", "Contact"];

  return (
    <>
      <Box className="topnav">
        {/* Left */}
        <Box className="topnav__left">
          <Button
            onClick={() => setOpenDrawer(true)}
            className="icon-btn"
            aria-label="Open navigation menu"
          >
            <MenuIcon />
          </Button>

          <Button className="brand-btn" disableRipple>
            Amazon
          </Button>
        </Box>

        {/* Center */}
        <Box className="topnav__center">
          <TextField
            size="small"
            placeholder="Search..."
            className="search-input"
          />
          <Button className="nav-btn">Search</Button>
        </Box>

        {/* Right */}
        <Box className="topnav__right">
          <Button className="nav-btn">
            {isLoggedIn ? `Hello, ${userName}` : "Login"}
          </Button>
          <Button className="nav-btn">Cart</Button>
        </Box>
      </Box>

      {/* Drawer */}
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        classes={{ paper: "drawer-paper" }}
      >
        <Box className="drawer-content">
          {drawerItems.map((text) => (
            <Button key={text} className="drawer-btn">
              {text}
            </Button>
          ))}
        </Box>
      </Drawer>
    </>
  );
}
