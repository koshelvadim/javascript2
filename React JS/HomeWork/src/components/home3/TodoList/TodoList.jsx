import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';

function ToDoList() {
  const [tasksList, setTasksList] = useState([]); //хранилище Списка Задач
  const [task, setTask] = useState(""); //хранилище Задачи


  const addTask = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    setTasksList([...tasksList, { id: Date.now(), text: task }]);
    setTask("");
  };

  const deleteTask = (task) => {
    setTasksList(tasksList.filter((item) => item.id !== task.id)); 
    };

  return (
    <div>
      <div>
        <TextField
          label="Введите новую задачу"
          variant="outlined"
          fullWidth
          margin="normal"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        ></TextField>
        <Button
          variant="contained"
          color="primary"
          onClick={addTask}
          style={{ marginBottom: 20 }}
        >
          Добавить задачу
        </Button>
      </div>
      <Box sx={{ minWidth: 250, gap: "20px", display: "flex", flexWrap: "wrap" }}>
        <h3>Список задач:</h3>
        {tasksList
          .map((task) => (
            <Card
              sx={{ maxWidth: 275, wordWrap: "break-word" }}
              variant="outlined"
              key={task.id}
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {task.text}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton
                  aria-label="delete"
                  onClick={() => deleteTask(task)}
                >
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          ))}
      </Box>
    </div>
  );
}

export default ToDoList;