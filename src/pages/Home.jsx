import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Navbar from "../components/HomePageComponents/Navbar";
import Sidebar from "../components/HomePageComponents/Sidebar";
import TaskBoardContainer from "../components/HomePageComponents/TaskBoardContainer";

export default function Home() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box display="flex">
      {/* Sidebar for Desktop */}
      {!isMobile && <Sidebar />}

      {/* Sidebar Drawer for Mobile */}
      {isMobile && (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 300,
            },
          }}
        >
          <Sidebar />
        </Drawer>
      )}

      <Box flexGrow={1} sx={{ backgroundColor: "#1c2833", color: "white" }}>
        {/* Pass handleDrawerToggle to Navbar */}
        <Navbar handleDrawerToggle={handleDrawerToggle} isMobile={isMobile} />
        {/* <TaskBoard /> */}
        <TaskBoardContainer />
      </Box>
    </Box>
  );
}
