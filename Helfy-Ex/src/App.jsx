import { useState, useEffect } from "react";
import { getAllTasks } from "./services/api";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskFilter from "./components/TaskFilter";
import "./index.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchTasks = async () => {
    try {
      const res = await getAllTasks();
      setTasks(res.data);
    } catch {
      setError("Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const load = async () => {
      try {
        const res = await getAllTasks();
        setTasks(res.data);
      } catch {
        setError("Failed to load tasks");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div>Task Manager</div>
      <TaskForm onClose={fetchTasks} />
      <TaskFilter currentFilter={filter} onChange={setFilter} />
      <TaskList tasks={filteredTasks} onUpdate={fetchTasks} />
    </div>
  );
}

export default App;
