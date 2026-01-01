import { Box, Button, TextField,Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { useAppSelector } from "../../Data/reduxHooks";

export default function TopNav() {
    const [OpenDrawer, setOpenDrawer] = React.useState<boolean>(false);
    const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
    const userName = useAppSelector((state) => state.user.name);
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 64,
          bgcolor: "#5c5c5cff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          zIndex: 1000,
        }}
      >
        {/* Left Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button onClick={() => setOpenDrawer(true)}>
            <MenuIcon sx={{ color: "white", cursor: "pointer" }} />
          </Button>

          <Button
            sx={{
              color: "white",
              boxShadow: "none",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
            }}
          >
            Amazon
          </Button>
        </Box>

        {/* Center Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <TextField
            size="small"
            placeholder="Search..."
            sx={{
              bgcolor: "white",
              borderRadius: 1,
              minWidth: 300,
            }}
          />
          <Button
            sx={{
              color: "white",
              boxShadow: "none",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
            }}
          >
            Search
          </Button>
        </Box>

        {/* Right Section */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            sx={{
              color: "white",
              boxShadow: "none",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
            }}
          >
            {isLoggedIn ? `Hello, ${userName}` : "Login"}
          </Button>
          <Button
            sx={{
              color: "white",
              boxShadow: "none",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
            }}
          >
            Cart
          </Button>
        </Box>
      </Box>

      <Drawer
        open={OpenDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
          sx: {
            width: 250,
            bgcolor: "#2c2c2c", // Drawer background
            color: "white",
          },
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", // center vertically
            alignItems: "center",
            gap: 2,
          }}
        >
          {["Home", "Products", "About", "Contact"].map((text) => (
            <Button
              key={text}
              sx={{
                width: "70%",
                color: "white",
                fontSize: "16px",
                textTransform: "none",
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.15)",
                },
              }}
            >
              {text}
            </Button>
          ))}
        </Box>
      </Drawer>
    </>
  );
}
