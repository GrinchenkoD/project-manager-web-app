import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import TemporaryModal from '../../components/TemporaryModal/TemporaryModal';
import TaskForm from '../../components/TaskForm/TaskForm';
// import { getSprint } from '../../redux/sprints/sprint-operation';
// import { getProject } from '../../redux/projects/project-operations';
// import tasks from './db.json';
import sprite from '../../icons/symbol-defs.svg';
import addBtn from '../../icons/Buttons/addBtn.png';
import analytics from '../../icons/Buttons/analytics.png';
import sprintBox from '../../icons/Buttons/sprintBox.png';
import styles from './TasksPage.module.css';
import TaskPageItem from 'pages/TasksPageItem/TasksPageItem';
import { nanoid } from '@reduxjs/toolkit';
import { getTask } from 'redux/tasks/task-operation';
import { getTasks } from 'redux/tasks/task-selectors';

export default function TasksPage() {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  // const [modalAddPeople, setModalAddPeople] = useState(false);
  const { sprintId } = useParams();
  // const projects = useSelector(state => state.projects);
  // const project = projects.find(item => item._id === projectId);

  const { tasks } = useSelector(getTasks);

  useEffect(() => {
    dispatch(getTask(sprintId));
  }, [dispatch, sprintId]);

  const onOpenModal = () => {
    setModalOpen(true);
  };

  const onCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.tasksContainer}>
      <div className={styles.tasksPage}>
        <div className={styles.sprintsSideBar}>
          <div className={styles.showSprints}>
            <a href="/" className={styles.sprintsBackLink}>
              <svg className={styles.sprintsBackArrow}>
                <use href={sprite + '#arrow-left'} />
              </svg>
              <div className={styles.sprintsBack}>
                <p className={styles.sprintsBackText}>Показати спринти</p>
              </div>
            </a>
          </div>

          <div className={styles.sprintsListSection}>
            <ul className={styles.sprintsList}>
              {/* {sprints.map(sprint => */}
              <li className={styles.sprintListItem} key={nanoid()}>
                <a href="/" className={styles.sprintsBackLink}>
                  <img src={sprintBox} alt="" className={styles.sprintBox} />
                  {/* <span className={styles.sprintBox}>Color Box</span> */}
                  <p className={styles.sprintTitleActive}>
                    Sprint Burndown Chart 1
                  </p>
                </a>
              </li>

              <li className={styles.sprintListItem} key={nanoid()}>
                <a href="/" className={styles.sprintsBackLink}>
                  <img src={sprintBox} alt="" className={styles.sprintBox} />
                  {/* <span className={styles.sprintBox}>Color Box</span> */}
                  <p className={styles.sprintTitle}>Sprint Burndown Chart 2</p>
                </a>
              </li>
              {/* )} */}
            </ul>

            <div className={styles.addSprint}>
              <button type="button" className={styles.btnAddSprint}>
                {/* <p className={styles.btnAddIcon}>+</p> */}
                <img src={addBtn} alt="" className={styles.btnAddSprintIcon} />
              </button>
              <p className={styles.addSprintText}>Створити спринт</p>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.navigation}>
            <div className={styles.datePicker}>
              <div className={styles.navDay}>
                <button type="button" className={styles.navLeft}>
                  &lt;
                </button>
                <p className={styles.navCurrentDay}> 2 </p>
                <p className={styles.navTotalDays}> / 12 </p>
                <button type="button" className={styles.navRight}>
                  &gt;
                </button>
              </div>
              <p className={styles.navDate}>08.08.2020</p>
            </div>

            <div className={styles.search}>
              <button type="button" className={styles.searchBBtnMagnify}>
                <svg className={styles.searchMagnify}>
                  <use href={sprite + '#magnify-glass'} />
                </svg>
              </button>
            </div>
          </div>

          <div className={styles.tasks}>
            <div className={styles.tasksTitle}>
              <p className={styles.tasksTitleText}> Sprint Burndown Chart 1 </p>

              <button type="button" className={styles.tasksTitleEdit}>
                <svg className={styles.btnEdit}>
                  <use href={sprite + '#icon-edit'} />
                </svg>
              </button>
            </div>

            <div className={styles.tasksHeader}>
              <p className={styles.tasksHeaderTitle}>Задача </p>
              <p className={styles.tasksHeaderPlanned}>Заплановано годин </p>
              <p className={styles.tasksHeaderUsed}>Витрачено год / день </p>
              <p className={styles.tasksHeaderTotal}>
                Витрачено годин (загал.)
              </p>
            </div>

            {!tasks.length ? (
              <h2>ljkoiuhiuhiuh</h2>
            ) : (
              <ul className={styles.tasksList}>
                {tasks.map(tasks => (
                  <TaskPageItem {...tasks} key={tasks._id} />
                ))}
              </ul>
            )}

            <div className={styles.addTaskSection}>
              <button
                type="button"
                className={styles.btnAdd}
                onClick={onOpenModal}
              >
                {/* <p className={styles.btnAddIcon}>+</p> */}
                <img src={addBtn} alt="" className={styles.btnAddIcon} />
              </button>
              <p className={styles.addProjectText}>Створити задачу</p>
            </div>
            <TemporaryModal
              onClose={onCloseModal}
              onOpen={modalOpen}
              title="Створення задачi"
            >
              <TaskForm closeModal={onCloseModal} />
            </TemporaryModal>

            <div className={styles.showGraphSection}>
              <button type="button" className={styles.btnGraph}>
                <img src={analytics} alt="" className={styles.btnGraphIcon} />
              </button>
              {/* <p className={styles.showGraphText}>Створити задачу</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
