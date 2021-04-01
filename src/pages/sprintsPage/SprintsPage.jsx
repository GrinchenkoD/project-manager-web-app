import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import sideBarButton from '../../icons/Buttons/sidebarButton.png';
import styles from './SprintsPage.module.css';
import TemporaryModal from '../../components/TemporaryModal/TemporaryModal';
import SprintForm from '../../components/SprintForm/SprintForm';
import { getSprint } from '../../redux/sprints/sprint-operation';
import SprintItem from '../../components/SprintItem/SprintItem';
import { getProject, patchTitle } from 'redux/projects/project-operations';
import SprintFormPeople from '../../components/SprintFormPeople/SprintFormPeople';
import ProjectForm from 'components/ProjectForm/ProjectForm';
import { CSSTransition } from 'react-transition-group';
import alert from './alert.module.css';

export default function SprintsPage() {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAddPeople, setModalAddPeople] = useState(false);
  const [modalAddProject, setModalAddProject] = useState(false);
  const [isUpdate, setUpdate] = useState(true);
  const [active, setActive] = useState(false);
  const [input, setInput] = useState();
  const { projectId } = useParams();
  const projects = useSelector(state => state.projects);
  const project = projects.find(item => item._id === projectId);

  useEffect(() => {
    dispatch(getSprint(projectId));
    dispatch(getProject());
  }, [dispatch, projectId]);

  const onOpenModal = () => {
    setModalOpen(true);
  };

  const onCloseModal = () => {
    setModalOpen(false);
  };

  const onOpenModalPeople = () => {
    setModalAddPeople(true);
  };

  const onCloseModalPeople = () => {
    setModalAddPeople(false);
  };

  const onOpenModalProject = () => {
    setModalAddProject(true);
  };

  const onCloseModalProject = () => {
    setModalAddProject(false);
  };

  const onChangeTitle = e => {
    setUpdate(!isUpdate);
    setInput(project.title);
  };
  const onHandleChange = e => {
    setInput(e.target.value);
  };
  const onFormSubmit = e => {
    e.preventDefault();
    dispatch(patchTitle(projectId, input));
    setUpdate(!isUpdate);
  };

  return (
    <div className={styles.sprintsContainer}>
      <div className={styles.sprintsSideBar}>
        <div className={styles.sprintsBackContainer}>
          <a href="/" className={styles.sprintsBackButton}>
            Показать проекты
          </a>
        </div>
        <ul className={styles.sprintsProjectList}>
          {projects.map(project => (
            <li className={styles.sprintsProjectItem} key={project._id}>
              <NavLink
                to={`/projects/${project._id}`}
                className={styles.projectsLink}
                activeClassName={styles.projectsLinkActive}
              >
                {project.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className={styles.buttonCont}>
          <button className={styles.sprintsButton} onClick={onOpenModalProject}>
            <img src={sideBarButton} alt="" />
          </button>
          <p className={styles.buttonText}>Создать проект</p>
        </div>
      </div>
      <div className={styles.sprintMainCont}>
        <div className={styles.sprintUpperCont}>
          <div className={styles.firstBlockLeft}>
            <CSSTransition
              in={active}
              unmountOnExit
              mountOnEnter
              timeout={300}
              classNames={alert}
            >
              <form onSubmit={onFormSubmit} className={styles.changeForm}>
                <input
                  type="text"
                  name="edit"
                  value={input}
                  onChange={onHandleChange}
                  className={styles.changeFormInput}
                />{' '}
                <button
                  type="submit"
                  className={styles.saveButtonIcon}
                ></button>{' '}
              </form>
            </CSSTransition>
            <CSSTransition
              classNames={alert}
              in={isUpdate}
              timeout={300}
              unmountOnExit
              mountOnEnter
              onExited={() => setActive(true)}
              onEnter={() => setActive(false)}
            >
              <>
                <h2 className={styles.mainblockTitle}>{project?.title}</h2>
                <button
                  type="button"
                  className={styles.changeNameButton}
                  onClick={onChangeTitle}
                ></button>
              </>
            </CSSTransition>
          </div>
          <div className={styles.sprintSecondBlock}>
            <button className={styles.sprintsButton} onClick={onOpenModal}>
              <img className="sprintsButtonImg" src={sideBarButton} alt="" />
            </button>
            <p className={styles.sprintUpperText}>Создать спринт</p>
          </div>
        </div>
        <div className={styles.addPeopleCont}>
          <button
            type="button"
            className={styles.addButon}
            onClick={onOpenModalPeople}
          >
            Добавить людей
          </button>
        </div>
        {modalOpen && (
          <TemporaryModal onClose={onCloseModal} title="Створення спринта">
            <SprintForm closeModal={onCloseModal} />
          </TemporaryModal>
        )}
        {modalAddPeople && (
          <TemporaryModal onClose={onCloseModalPeople} title="Добавить людей">
            <SprintFormPeople closeModal={onCloseModalPeople} />
          </TemporaryModal>
        )}
        {modalAddProject && (
          <TemporaryModal
            onClose={onCloseModalProject}
            title="Створення проекту"
          >
            <ProjectForm onClose={onCloseModalProject} />
          </TemporaryModal>
        )}
        <SprintItem />
      </div>
    </div>
  );
}
