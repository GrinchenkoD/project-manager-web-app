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
import { CSSTransition } from 'react-transition-group';
import alert from './alert.module.css';
import { patchTitle } from 'redux/sprints/sprint-operation';

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
  const [isUpdate, setUpdate] = useState(true);
  const [input, setInput] = useState();
  const [active, setActive] = useState(false);

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

  const onChangeTitle = e => {
    setUpdate(!isUpdate);
    setInput(sprint.title);
  };
  const onHandleChange = e => {
    setInput(e.target.value);
  };
  const onFormSubmit = e => {
    e.preventDefault();
    dispatch(patchTitle(sprintId, input));
    setUpdate(!isUpdate);
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
              <p className={styles.sprintsBackText}>Показати спринти</p>
            </div>
          </NavLink>
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
            <p className={styles.addSprintText}>Створити спринт</p>
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
                &#5176;
              </button>
              <p className={styles.navCurrentDay}> 2 </p>
              <p className={styles.navTotalDays}> / 12 </p>
              <button type="button" className={styles.navRight}>
                &#5171;
              </button>
            </div>
            <p className={styles.navDate}>08.08.2020</p>
          </div>
          <div className={styles.search}>
            <input
              name="filter"
              type="text"
              autoComplete="off"
              placeholder="пошук..."
              className={styles.searchInput}
              onChange={event => null}
              // value={filter}
            />
            <svg className={styles.searchMagnify}>
              <use href={sprite + '#magnify-glass'} />
            </svg>
          </div>
        </div>
        <div className={styles.tasks}>
          <div className={styles.tasksTitle}>
            <CSSTransition
              in={active}
              unmountOnExit
              mountOnEnter
              timeout={200}
              classNames={alert}
            >
              <form onSubmit={onFormSubmit} className={styles.changeForm}>
                <input
                  type="text"
                  name="edit"
                  autoComplete="off"
                  value={input}
                  onChange={onHandleChange}
                  className={styles.changeFormInput}
                />
                <button
                  type="submit"
                  className={styles.saveButtonIcon}
                ></button>
              </form>
            </CSSTransition>
            <CSSTransition
              classNames={alert}
              in={isUpdate}
              timeout={200}
              unmountOnExit
              mountOnEnter
              onExited={() => setActive(true)}
              onEnter={() => setActive(false)}
            >
              <>
                <p className={styles.tasksTitleText}>{sprint?.title}</p>
                <button
                  type="button"
                  className={styles.tasksTitleEdit}
                  onClick={onChangeTitle}
                >
                  <svg className={styles.btnEdit}>
                    <use href={sprite + '#icon-edit'} />
                  </svg>
                </button>
              </>
            </CSSTransition>
          </div>
          <div className={styles.tasksHeader}>
            <p className={styles.tasksHeaderTitle}>Задача </p>
            <p className={styles.tasksHeaderPlanned}>Заплановано годин</p>
            <p className={styles.tasksHeaderUsed}>Використано год / день </p>
            <p className={styles.tasksHeaderTotal}>
              Використано годин (загал.)
            </p>
          </div>
          {!tasks.length ? (
            <h2 className={styles.tasksNone}>
              В спринті відсутні задачі, скористайтеся кнопкою "Створити задачу"
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
            <p className={styles.addProjectText}>Створити задачу</p>
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
