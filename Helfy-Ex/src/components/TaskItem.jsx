import { useState } from "react";
import { deleteTask, toggleTask } from "../services/api";
import TaskForm from "./TaskForm";
import styles from "./TaskItem.module.css";

const priorityClass = {
  low: styles.priorityLow,
  medium: styles.priorityMedium,
  high: styles.priorityHigh,
};

const TaskItem = ({ task, onUpdate }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleDelete = async () => {
    await deleteTask(task.id);
    setConfirmDelete(false);
    onUpdate();
  };

  const handleToggle = async () => {
    await toggleTask(task.id);
    onUpdate();
  };

  return (
    <div className={styles.card}>
      <span className={`${styles.priority} ${priorityClass[task.priority]}`}>
        {task.priority}
      </span>
      <div className={`${styles.title} ${task.completed ? styles.completed : ""}`}>
        {task.title}
      </div>
      <p className={styles.description}>{task.description}</p>
      <div className={styles.date}>{new Date(task.createdAt).toLocaleDateString()}</div>

      <div className={styles.actions}>
        <button onClick={handleToggle}>
          {task.completed ? "Mark Incomplete" : "Mark Complete"}
        </button>
        <button onClick={() => setShowEdit(!showEdit)}>Edit</button>
        <button onClick={() => setConfirmDelete(true)}>Delete</button>
      </div>

      {confirmDelete && (
        <div className={styles.confirm}>
          <span>Are you sure?</span>
          <button className={styles.confirmBtns} onClick={handleDelete}>Yes</button>
          <button className={styles.confirmBtns} onClick={() => setConfirmDelete(false)}>No</button>
        </div>
      )}

      {showEdit && (
        <TaskForm task={task} onClose={() => { setShowEdit(false); onUpdate(); }} />
      )}
    </div>
  );
};

export default TaskItem;
