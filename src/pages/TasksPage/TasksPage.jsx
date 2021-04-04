import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import TemporaryModal from '../../components/TemporaryModal/TemporaryModal';
import TaskForm from '../../components/TaskForm/TaskForm';
import { getSprint } from '../../redux/sprints/sprint-operation';
// import { getProject } from '../../redux/projects/project-operations';
// import tasks from './db.json';
import sprite from '../../icons/symbol-defs.svg';
import addBtn from '../../icons/Buttons/addBtn.png';
import analytics from '../../icons/Buttons/analytics.png';
import sprintBox from '../../icons/Buttons/sprintBox.png';
import styles from './TasksPage.module.css';
import TaskPageItem from 'pages/TasksPageItem/TasksPageItem';
// import { nanoid } from '@reduxjs/toolkit';
import { getTask } from 'redux/tasks/task-operation';
import { getTasks } from 'redux/tasks/task-selectors';
import SprintForm from '../../components/SprintForm/SprintForm';
import { getProject } from 'redux/projects/project-operations';
import ChartModal from '../../components/ChartModal/ChartModal';

export default function TasksPage() {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [diagramModal, setDiagramModal] = useState(false);
  const { sprintId } = useParams();
  const [modalAddSprint, setModalAddSprint] = useState(false);
  const sprints = useSelector(state => state.sprints);
  const sprint = sprints.find(item => item._id === sprintId);
  const { projectId } = useParams();
  const projects = useSelector(state => state.projects);
  const project = projects.find(item => item._id === projectId);
  const { tasks } = useSelector(getTasks);

  useEffect(() => {
    dispatch(getTask(sprintId));
    dispatch(getProject());
    dispatch(getSprint(projectId));
  }, [dispatch, sprintId, projectId]);
  const onOpenModal = () => {
    setModalOpen(true);
  };
  const onCloseModal = () => {
    setModalOpen(false);
  };
  const onOpenModalSprint = () => {
    setModalAddSprint(true);
  };
  const onCloseModalSprint = () => {
    setModalAddSprint(false);
  };
  return (
    <div className={styles.tasksContainer}>
      <div className={styles.sprintsSideBar}>
        <div className={styles.showSprints}>
          <NavLink
            to={`/projects/${project?._id}`}
            className={styles.sprintsLink}
            activeClassName={styles.sprintLinkActive}
          >
            <svg className={styles.sprintsBackArrow}>
              <use href={sprite + '#arrow-left'} />
            </svg>
            <div className={styles.sprintsBack}>
              <p className={styles.sprintsBackText}>Показать спринты</p>
            </div>
          </NavLink>
          {/* <a href="/" className={styles.projectsBackLink}>
              <p className={styles.projectsBackText}>Все проекты</p>
            </a> */}
        </div>
        <div className={styles.sprintsListSection}>
          <ul className={styles.sprintsList}>
            {sprints.map(sprint => (
              <li className={styles.sprintListItem} key={sprint._id}>
                <NavLink
                  to={`/projects/${project._id}/sprints/${sprint._id}`}
                  className={styles.sprintsLink}
                  activeClassName={styles.sprintLinkActive}
                >
                  <img src={sprintBox} alt="" className={styles.sprintBox} />
                  <span className={styles.sprintTitle}>{sprint.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
          <div className={styles.addSprint}>
            <button
              type="button"
              className={styles.btnAddSprint}
              onClick={onOpenModalSprint}
            >
              {/* <p className={styles.btnAddIcon}>+</p> */}
              <img src={addBtn} alt="" className={styles.btnAddSprintIcon} />
            </button>
            <p className={styles.addSprintText}>Создать спринт</p>
          </div>
          <TemporaryModal
            onClose={onCloseModalSprint}
            onOpen={modalAddSprint}
            title="Створення проекту"
          >
            <SprintForm onClose={onCloseModalSprint} />
          </TemporaryModal>
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
            <svg className={styles.searchMagnify}>
              <use href={sprite + '#magnify-glass'} />
            </svg>
            <input
              name="filter"
              type="text"
              autoComplete="off"
              className={styles.searchInput}
              onChange={event => null}
              // value={filter}
            />
          </div>
        </div>
        <div className={styles.tasks}>
          <div className={styles.tasksTitle}>
            <p className={styles.tasksTitleText}>{sprint?.title}</p>
            <button type="button" className={styles.tasksTitleEdit}>
              <svg className={styles.btnEdit}>
                <use href={sprite + '#icon-edit'} />
              </svg>
            </button>
          </div>
          <div className={styles.tasksHeader}>
            <p className={styles.tasksHeaderTitle}>Задача </p>
            <p className={styles.tasksHeaderPlanned}>Запланировано часов </p>
            <p className={styles.tasksHeaderUsed}>Использовано час. / день </p>
            <p className={styles.tasksHeaderTotal}>Использовано часов (общ.)</p>
          </div>
          {!tasks.length ? (
            <h2 className={styles.tasksNone}>
              В спринте отсутствуют задачи, воспользуйтесь кнопкой "Создать
              задачу"
            </h2>
          ) : (
            <ul className={styles.tasksList}>
              {tasks.map(task => (
                <TaskPageItem {...task} key={task._id} />
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
            <p className={styles.addProjectText}>Создать задачу</p>
          </div>
          <TemporaryModal
            onClose={onCloseModal}
            onOpen={modalOpen}
            title="Створення задачi"
          >
            <TaskForm onClose={onCloseModal} />
          </TemporaryModal>
          <div className={styles.showGraphSection}>
            <button
              type="button"
              onClick={() => setDiagramModal(true)}
              className={styles.btnGraph}
            >
              <img src={analytics} alt="" className={styles.btnGraphIcon} />
            </button>
            {diagramModal && (
              <ChartModal onClose={() => setDiagramModal(false)} />
            )}
            {/* <p className={styles.showGraphText}>Створити задачу</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
