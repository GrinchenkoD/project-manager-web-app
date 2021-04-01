import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import sideBarButton from '../../icons/Buttons/sidebarButton.png';
import styles from './SprintsPage.module.css';
import TemporaryModal from '../../components/TemporaryModal/TemporaryModal';
import SprintForm from '../../components/SprintForm/SprintForm';
import { getSprint } from '../../redux/sprints/sprint-operation';
import SprintItem from '../../components/SprintItem/SprintItem';
import { getProject } from 'redux/projects/project-operations';
import SprintFormPeople from '../../components/SprintFormPeople/SprintFormPeople';

export default function SprintsPage() {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAddPeople, setModalAddPeople] = useState(false);
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

  return (
    <div className={styles.sprintsContainer}>
      <div className={styles.sprintsSideBar}>
        <div className={styles.sprintsBackContainer}>
          <a href="" className={styles.sprintsBackButton}>
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
          <button className={styles.sprintsButton}>
            <img src={sideBarButton} alt="" />
          </button>
          <p className={styles.buttonText}>Создать проект</p>
        </div>
      </div>
      <div className={styles.sprintMainCont}>
        <div className={styles.sprintUpperCont}>
          <div className={styles.firstBlockLeft}>
            <h2 className={styles.mainblockTitle}>{project?.title}</h2>
            <button type="button" className={styles.changeNameButton}></button>
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
        <SprintItem />
      </div>
    </div>
  );
}
