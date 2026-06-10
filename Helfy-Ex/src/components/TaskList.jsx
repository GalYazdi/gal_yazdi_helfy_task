import { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import styles from "./TaskList.module.css";

const TaskList = ({ tasks, onUpdate }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [transitioning, setTransitioning] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const loopedTasks = [].concat(tasks.at(-1), tasks, tasks[0]);

  const nextItem = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTransitioning(true);
    setCurrentIndex((i) => i + 1);
  };

  const prevItem = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTransitioning(true);
    setCurrentIndex((i) => i - 1);
  };

  const handleTransitionEnd = () => {
    setIsAnimating(false);
    if (currentIndex <= 0) {
      setTransitioning(false);
      setCurrentIndex(tasks.length);
    } else if (currentIndex >= loopedTasks.length - 1) {
      setTransitioning(false);
      setCurrentIndex(1);
    }
  };

  useEffect(() => {
    if (!transitioning) {
      const t = setTimeout(() => setTransitioning(true), 50);
      return () => clearTimeout(t);
    }
  }, [transitioning]);

  if (tasks.length === 0) return <p>No tasks yet</p>;

  return (
    <div className={styles.carousel}>
      <button className={styles.navBtn} onClick={prevItem}>Prev</button>

      <div className={styles.carouselWrapper}>
        <div
          className={styles.carouselTrack}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: transitioning ? "transform 0.5s ease" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {loopedTasks.map((task, i) => (
            <div className={styles.carouselSlide} key={i}>
              <TaskItem task={task} onUpdate={onUpdate} />
            </div>
          ))}
        </div>
      </div>

      <button className={styles.navBtn} onClick={nextItem}>Next</button>
    </div>
  );
};

export default TaskList;
