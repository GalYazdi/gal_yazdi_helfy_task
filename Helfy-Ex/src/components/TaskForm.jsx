import { useState } from "react";
import { addTask } from "../services/api";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      setError("One or more field is missing");
      return;
    }

    await addTask({ title, description, priority });
    setTitle("");
    setDescription("");
    setPriority("");
    setError("");
    setSuccess(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      {error && <span>{error}</span>}
      {success && <span>Task added successfully!</span>}
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
