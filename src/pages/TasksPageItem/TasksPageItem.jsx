import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from 'redux/tasks/task-operation';
import sprite from '../../icons/symbol-defs.svg';
import styles from './TasksPageItem.module.css';
export default function TaskPageItem(task) {
  const dispatch = useDispatch();
  return (
    <li className={styles.tasksListItem} key={task._id}>
      <h5 className={styles.taskTitle}>{task.title}</h5>
      <div className={styles.planned}>
        <p className={styles.plannedTitle}>Заплановано годин </p>
        <p className={styles.plannedHours}>{task.hoursPlanned}</p>
      </div>
      <div className={styles.used}>
        <p className={styles.usedTitle}>Витрачено год / день </p>
        <p className={styles.usedHours}>{task.hoursWasted}</p>
      </div>
      <div className={styles.total}>
        <p className={styles.totalTitle}>Витрачено годин (загал.)</p>
        <p className={styles.totalHours}>1</p>
      </div>
      <div className={styles.btnCont}>
        <button
          data-id={task._id}
          type="button"
          className={styles.btnDelete}
          onClick={() => dispatch(deleteTask(task._id))}
        >
          <svg className={styles.btnDeleteIcon}>
            <use href={sprite + '#icon-delete'} />
          </svg>
        </button>
      </div>
    </li>
  );
}
