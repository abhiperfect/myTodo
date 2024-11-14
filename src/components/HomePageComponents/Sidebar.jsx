import React, { useContext } from "react";
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
  People,
  Message,
  CalendarToday,
} from "@mui/icons-material";
import LabelIcon from "@mui/icons-material/Label";
import CreateTask from "../Buttons/CreateTask";
import AccountCustomSlotProps from "../sidebarComponents/Account";
import { AppContext } from "../../context/AppContext";

const Sidebar = () => {
  const { selectedPriorities, togglePriority } = useContext(AppContext);

  // Toggle the priority filter and update AppContext's selectedPriorities
  const handleFilterToggle = (priority) => {
    togglePriority(priority);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 300,
        flexShrink: 0,
        "& .MuiDrawer-paper": { width: 300, boxSizing: "border-box" },
      }}
    >
      <Typography variant="h6" sx={{ padding: 2 }}>
        MyTodo
      </Typography>
      <AccountCustomSlotProps />
      <List>
        <ListItem
          button
          sx={{
            bgcolor: "#2c3e50",
            color: "white",
            "&:hover": { bgcolor: "#34495e" },
          }}
        >
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem
          button
          sx={{
            bgcolor: "#525b63",
            color: "white",
            "&:hover": { color: "white", bgcolor: "#525b63" },
          }}
        >
          <ListItemIcon>
            <Assignment />
          </ListItemIcon>
          <ListItemText primary="Tasks" />
        </ListItem>
        <ListItem
          disabled
          sx={{
            color: "#c1bcbc",
          }}
        >
          <ListItemIcon>
            <Message
              sx={{
                color: "#c1bcbc",
              }}
            />
          </ListItemIcon>
          <ListItemText primary="Comments" />
        </ListItem>
        <ListItem
          disabled
          sx={{
            color: "#c1bcbc",
          }}
        >
          <ListItemIcon>
            <CalendarToday
              sx={{
                color: "#c1bcbc",
              }}
            />
          </ListItemIcon>
          <ListItemText primary="Calendar" />
        </ListItem>
      </List>
      <Divider />
      {/* Priority Labels */}
      <List>
        <ListItem
          button
          onClick={() => handleFilterToggle("high")}
          sx={{
            cursor: "pointer",
            bgcolor: selectedPriorities.includes("high")
              ? "#c0392b"
              : "inherit",
          }}
        >
          <ListItemIcon>
            <LabelIcon sx={{ color: "#e74c3c" }} />
          </ListItemIcon>
          <ListItemText primary="High Priority" />
        </ListItem>
        <ListItem
          button
          onClick={() => handleFilterToggle("medium")}
          sx={{
            cursor: "pointer",
            bgcolor: selectedPriorities.includes("medium")
              ? "#d35400"
              : "inherit",
          }}
        >
          <ListItemIcon>
            <LabelIcon sx={{ color: "#f39c12" }} />
          </ListItemIcon>
          <ListItemText primary="Medium Priority" />
        </ListItem>
        <ListItem
          button
          onClick={() => handleFilterToggle("low")}
          sx={{
            cursor: "pointer",
            bgcolor: selectedPriorities.includes("low") ? "#229954" : "inherit",
          }}
        >
          <ListItemIcon>
            <LabelIcon sx={{ color: "#27ae60" }} />
          </ListItemIcon>
          <ListItemText primary="Low Priority" />
        </ListItem>
      </List>
      <CreateTask hide={false} />
    </Drawer>
  );
};

export default Sidebar;
