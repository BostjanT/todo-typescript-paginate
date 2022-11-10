import React from "react";

type Task = {
  id: string;
  title: string;
  done: boolean;
};

const App: React.FC = () => {
  // Data State
  const [data, setData] = React.useState([] as any);
  // Input State
  const [newTask, setNewTask] = React.useState("");
  // Edited task id
  const [editedTaskId, setEditedTaskId] = React.useState("");

  // Add Task Function
  const addTask = (id?: string) => {
    if (newTask === "") return;
    if (!id) {
      setData([
        ...data,
        {
          id: Math.random().toString(36).substr(2, 9),
          title: newTask,
          done: false,
        },
      ]);
    }
    setNewTask("");
  };

  // Delete Task Function
  const deleteTask = (id: string) => {
    setData(data.filter((task: Task) => task.id !== id));
  };

  // Set Task for Edit Function
  const setTaskForEdit = (id: string) => {
    const task = data.find((task: Task) => task.id === id);
    if (task) {
      setNewTask(task.title);
      setEditedTaskId(task.id);
    }
  };

  // Edit Task Function
  const editTask = () => {
    if (newTask === "") return;
    const task = data.find((task: Task) => task.id === editedTaskId);
    if (task) {
      task.title = newTask;
      setData([...data]);
      setEditedTaskId("");
    }
    setNewTask("");
  };

  // Done Task Function
  const doneTask = (id: string) => {
    const task = data.find((task: Task) => task.id === id);
    if (task) task.done = !task.done;
    setData([...data]);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Add Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={() => (editedTaskId === "" ? addTask() : editTask())}>
        {editedTaskId === "" ? "Add task" : "Confirm edit"}
      </button>

      <div>
        {data.map((task: Task) => {
          return (
            <div
              style={{
                border: "1px solid black",
                textDecoration: `${task.done ? "line-through" : "none"}`,
              }}>
              {task.title}
              <button onClick={() => doneTask(task.id)}>Done</button>
              <button onClick={() => setTaskForEdit(task.id)}>Edit</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
