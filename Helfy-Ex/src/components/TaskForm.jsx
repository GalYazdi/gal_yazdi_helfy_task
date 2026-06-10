import { useState } from "react";
import { addTask, updateTask } from "../services/api";
import styles from "./TaskForm.module.css";

const TaskForm = ({ task, onClose }) => {
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const [priority, setPriority] = useState(task?.priority || "low");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      setError("One or more field is missing");
      setTimeout(() => setError(""), 3000);
      return;
    }

    if (task) {
      await updateTask(task.id, { title, description, priority });
    } else {
      await addTask({ title, description, priority });
      setTitle("");
      setDescription("");
      setPriority("low");
    }

    setError("");
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
    
    if (onClose) onClose();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
      {error && <span className={styles.error}>{error}</span>}
      {success && <span className={styles.success}>{task ? "Task updated!" : "Task added!"}</span>}
      <button type="submit" className={styles.submitBtn}>{task ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
