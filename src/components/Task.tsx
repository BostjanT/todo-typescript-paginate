import { nanoid } from "nanoid";
import React, { useState } from "react";
import Pagination from "./Pagination";
import {
  Button,
  Input,
  InputDiv,
  Section,
  SingleTask,
  TaskDisplay,
} from "./styled.list";

type Tasks = {
  id: string;
  task: string;
  isDone: boolean;
};

const Task: React.FC = () => {
  const [tasks, setTasks] = useState([] as any);
  const [newTask, setNewTask] = useState("");
  const [taskId, setTaskId] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const addTask = () => {
    if (newTask === "") return;
    setTasks([
      ...tasks,
      {
        id: nanoid(),
        task: newTask,
        isDone: false,
      },
    ]);
    setNewTask("");
  };

  const setTaskEdit = (id: string) => {
    const task = tasks.find((task: Tasks) => task.id === id);
    if (task) {
      setNewTask(task.task);
      setTaskId(task.id);
    }
  };

  const editTask = () => {
    const edTask = tasks.find((task: Tasks) => task.id === taskId);
    if (edTask) {
      edTask.task = newTask;
      setTasks([...tasks]);
      setTaskId("");
    }
    setNewTask("");
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task: Tasks) => task.id !== id));
  };

  const doneTask = (id: string) => {
    const done = tasks.find((task: Tasks) => task.id === id);
    if (done) done.isDone = !done.isDone;
    setTasks([...tasks]);
  };

  // Get current posts
  const indexOfLastTask = currentPage * postsPerPage;
  const indexOfFirstTask = indexOfLastTask - postsPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Section>
      <div>
        <h2>This is where tasks will be</h2>

        <InputDiv>
          <Input
            type="text"
            name="task"
            value={newTask}
            placeholder={"Enter your task..."}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button
            type="submit"
            onClick={() => (taskId === "" ? addTask() : editTask())}>
            {taskId === "" ? "Add Task" : "Edit Task"}
          </Button>
        </InputDiv>
      </div>
      <TaskDisplay>
        {currentTasks.map((task: Tasks) => {
          return (
            <SingleTask key={task.id}>
              <h4 className={task.isDone ? "done" : ""}>{task.task}</h4>
              <div>
                <Button
                  className={task.isDone ? "hidden" : ""}
                  onClick={() => setTaskEdit(task.id)}>
                  EDIT
                </Button>
                <Button onClick={() => deleteTask(task.id)}>DELETE</Button>
                <Button onClick={() => doneTask(task.id)}>DONE</Button>
              </div>
            </SingleTask>
          );
        })}
      </TaskDisplay>
      <Pagination
        totalPosts={tasks.length}
        postsPerPage={postsPerPage}
        paginate={paginate}
      />
    </Section>
  );
};

export default Task;
