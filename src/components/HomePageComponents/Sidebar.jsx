import React, { useContext, Fragment } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import {
  Dashboard,
  Assignment,
  Message,
  CalendarToday,
} from "@mui/icons-material";
import LabelIcon from "@mui/icons-material/Label";
import CreateTask from "../Buttons/CreateTask";
import AccountCustomSlotProps from "../sidebarComponents/Account";
import { AppContext } from "../../context/AppContext";
import taskify from "../assets/taskify.png";

// Extract reusable styles for efficiency
const disabledItemStyles = {
  color: "#c1bcbc",
};

const Sidebar = () => {
  const { selectedPriorities, togglePriority } = useContext(AppContext);

  // Toggle the priority filter and update AppContext's selectedPriorities
  const handleFilterToggle = (priority) => togglePriority(priority);

  return (
    <Fragment style={""}>
      <Drawer
        variant="permanent"
        sx={{
          width: 300,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 300,
            boxSizing: "border-box",
            bgcolor: "#091628", // Updated to your requested color
          },
        }}
      >
        <Typography variant="h6" sx={{ padding: 2 }}>
          <img
            src={taskify} // Make sure this is an SVG file now
            alt="Taskify Logo"
            width={200}
            style={{
              filter: "invert(1)", // This inverts the colors, turning dark colors to light (e.g., white)
            }}
          />
        </Typography>
        {/* <AccountCustomSlotProps /> */}
        <List>
          {/* Active List Items */}
          {[
            {
              text: "Dashboard",
              icon: <Dashboard sx={{ color: "white" }} />,
              style: "#2c3e50",
            },
            // { text: "Tasks", icon: <Assignment />, style: "#525b63" },
          ].map(({ text, icon, style }) => (
            <ListItem
              button
              key={text}
              sx={{
                bgcolor: "#021526", // Set background color here
                color: "white",
                "&:hover": { color: "white", bgcolor: "#021526" }, // Hover effect
              }}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}

          {/* Disabled List Items */}
          {[
            { text: "Comments", icon: <Message sx={{ color: "white" }} /> },
            { text: "Calendar", icon: <CalendarToday /> },
          ].map(({ text, icon }) => (
            <ListItem key={text} disabled sx={disabledItemStyles}>
              <ListItemIcon sx={disabledItemStyles}>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        {/* Priority Labels */}
        <List>
          {[
            { priority: "high", color: "#c0392b", labelColor: "#e74c3c" },
            { priority: "medium", color: "#d35400", labelColor: "#f39c12" },
            { priority: "low", color: "#229954", labelColor: "#27ae60" },
          ].map(({ priority, color, labelColor }) => (
            <ListItem
              button
              key={priority}
              onClick={() => handleFilterToggle(priority)}
              sx={{
                cursor: "pointer",
                bgcolor: selectedPriorities.includes(priority)
                  ? color
                  : "inherit",
              }}
            >
              <ListItemIcon>
                <LabelIcon sx={{ color: labelColor }} />
              </ListItemIcon>
              <ListItemText
                primary={`${priority.charAt(0).toUpperCase() + priority.slice(1)} Priority`}
                sx={{
                  color: "white",
                }}
              />
            </ListItem>
          ))}
        </List>
        <CreateTask hide={false} />
      </Drawer>
    </Fragment>
  );
};

export default React.memo(Sidebar);
