import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import TaskColumn from "../TaskBoardComponents/TaskColumn";
import { AppContext } from "../../context/AppContext";

const TaskBoardContainer = () => {
  const { state } = useContext(AppContext);

  // Configuration for task columns
  const taskColumns = [
    { title: "UPCOMING TASKS", titleColor: "#11c7df", tasks: state.upcomingTasks },
    { title: "OVERDUE TASKS", titleColor: "#e78f2c", tasks: state.overdueTasks },
    { title: "COMPLETED TASKS", titleColor: "#18e047", tasks: state.completedTasks },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 0, md: 0 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {taskColumns.map(({ title, titleColor, tasks }, index) => (
          <Grid
            key={index}
            size={{ xs:4, sm:4, md:4}}
          >
            <TaskColumn title={title} titleColor={titleColor} tasks={tasks} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default React.memo(TaskBoardContainer);
