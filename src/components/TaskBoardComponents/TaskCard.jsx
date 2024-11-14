import React, { useState, useContext } from "react";
import {
  Box,
  Typography,
  Chip,
  IconButton,
  Divider,
  Stack,
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AppContext } from "../../context/AppContext";
import TaskDone from "../Buttons/TaskDone";
import DeleteTask from "../Buttons/DeleteTask";
import EditTask from "../Buttons/EditTask";

const TaskCard = ({ task, title }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const { state, addComment, deleteTask, editTask } = useContext(AppContext);

  const words = task.description.split(" ");
  const truncatedDescription =
    words.slice(0, 15).join(" ") + (words.length > 15 ? "..." : "");

  const handleCommentClick = () => {
    setShowComments((prev) => !prev);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  const handleDelete = () => {
    handleMenuClose();
    deleteTask(task.id); // Call delete function here
  };

  const formattedDate = new Date(task.dueDate).toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const handleAddComment = () => {
    if (newComment.trim()) {
      addComment(task.id, newComment);
      setNewComment("");
    }
  };

  return (
    <Box
      sx={{
        bgcolor: "#2c2f33",
        color: "#ffffff",
        borderRadius: 2,
        padding: 2,
        marginBottom: 2,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Header Row: Category, Title, Priority Chip, and More Icon */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={1}
      >
        <Box>
          <Typography variant="body2" color="gray">
            {/* Category */}
          </Typography>
          <Typography variant="h6" sx={{ fontSize: 16, fontWeight: "bold" }}>
            {task.title}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <Chip
            label={task.priority}
            size="small"
            sx={{
              bgcolor:
                task.priority === "High"
                  ? "#e74c3c"
                  : task.priority === "Medium"
                    ? "#f39c12"
                    : "#27ae60",
              color: "white",
              fontWeight: "bold",
              height: 24,
            }}
          />
          <IconButton sx={{ color: "white" }} onClick={handleMenuOpen}>
            <MoreVertIcon fontSize="small" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            sx={{
              "& .MuiPaper-root": {
                bgcolor: "#2c2f33",
                color: "white",
              },
            }}
          >
            <MenuItem
              sx={{
                bgcolor: "#2c2f33",
                color: "white",
                "&:hover": {
                  bgcolor: "#3b3e42",
                },
              }}
            >
              <EditTask task={task}/>
            </MenuItem>
            <MenuItem
              onClick={handleDelete}
              sx={{
                bgcolor: "#2c2f33",
                color: "white",
                "&:hover": {
                  bgcolor: "#3b3e42",
                },
              }}
            >
              <DeleteTask id={task.id} />
            </MenuItem>
          </Menu>
        </Box>
      </Box>

      {/* Description */}
      <Typography variant="body2" color="white">
        {showFullDescription ? task.description : truncatedDescription}
        {words.length > 15 && (
          <Button
            variant="text"
            size="small"
            sx={{ color: "#27ae60", textTransform: "none" }}
            onClick={() => setShowFullDescription(!showFullDescription)}
          >
            {showFullDescription ? "show less" : "show more"}
          </Button>
        )}
      </Typography>

      {/* Divider */}
      <Divider sx={{ bgcolor: "gray", my: 1 }} />

      {/* Bottom Row: Date, Comments, Files */}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="caption" color="gray">
          {formattedDate}
        </Typography>
        <Box display="flex" alignItems="center" gap={1}>
          <Box
            display="flex"
            alignItems="center"
            gap={0.5}
            onClick={handleCommentClick}
            sx={{ cursor: "pointer" }}
          >
            <ChatBubbleOutlineIcon fontSize="small" color="inherit" />
            <Typography variant="caption">
              {task.comments.length} comments
            </Typography>
          </Box>
          {task.status !== "completed" && <TaskDone task={task} />}
        </Box>
      </Stack>

      {/* Comments Section */}
      {showComments && (
        <Box mt={2} sx={{ bgcolor: "#3b3e42", borderRadius: 1, padding: 2 }}>
          <Typography variant="body2" color="white" mb={1}>
            Comments
          </Typography>
          {task.comments.length === 0 ? (
            <Typography variant="body2" color="gray">
              - No comments
            </Typography>
          ) : (
            <List dense>
              {task.comments.map((comment) => (
                <ListItem key={comment.id} disablePadding>
                  <ListItemText primary={comment.text} />
                </ListItem>
              ))}
            </List>
          )}
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            placeholder="Add a comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            sx={{ bgcolor: "#2c2f33", borderRadius: 1, mt: 1 }}
          />
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleAddComment}
            sx={{ mt: 1 }}
          >
            Add Comment
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default TaskCard;
