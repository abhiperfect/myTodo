import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Divider } from '@mui/material';
import { Dashboard, Assignment, People, Message, CalendarToday } from '@mui/icons-material';
import AccountCustomSlotProps from './sidebarComponents/Account';
const Sidebar = () => (
  <Drawer
    variant="permanent"
    sx={{ width: 300, flexShrink: 0, '& .MuiDrawer-paper': { width: 300, boxSizing: 'border-box' } }}
  >
    <Typography variant="h6" sx={{ padding: 2 }}>MyTodo</Typography>
    <AccountCustomSlotProps />
    <List>
      <ListItem button="true">
        <ListItemIcon><Dashboard /></ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button="true">
        <ListItemIcon><Assignment /></ListItemIcon>
        <ListItemText primary="Tasks" />
      </ListItem>
      <ListItem button="true">
        <ListItemIcon><People /></ListItemIcon>
        <ListItemText primary="Teams" />
      </ListItem>
      <ListItem button="true">
        <ListItemIcon><Message /></ListItemIcon>
        <ListItemText primary="Messages" />
      </ListItem>
      <ListItem button="true">
        <ListItemIcon><CalendarToday /></ListItemIcon>
        <ListItemText primary="Calendar" />
      </ListItem>
    </List>
    <Divider />
    {/* Priority Labels */}
    <List>
      <ListItem button="true">
        <ListItemText primary="High Priority" />
      </ListItem>
      <ListItem button="true">
        <ListItemText primary="Medium Priority" />
      </ListItem>
      <ListItem button="true">
        <ListItemText primary="Low Priority" />
      </ListItem>
      <ListItem button="true">
        <ListItemText primary="On Standby" />
      </ListItem>
    </List>
  </Drawer>
);

export default Sidebar;
