import styles from "./TaskFilter.module.css";

const filters = ["all", "completed", "pending"];

const TaskFilter = ({ currentFilter, onChange }) => {
  return (
    <div className={styles.filters}>
      {filters.map((filter) => (
        <button
          key={filter}
          className={currentFilter === filter ? styles.active : ""}
          onClick={() => onChange(filter)}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default TaskFilter;
