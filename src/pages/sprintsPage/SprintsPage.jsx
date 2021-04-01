import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import sideBarButton from '../../icons/Buttons/sidebarButton.png';
import styles from './SprintsPage.module.css';
import TemporaryModal from '../../components/TemporaryModal/TemporaryModal';
import SprintForm from '../../components/SprintForm/SprintForm';
import { getSprint } from '../../redux/sprints/sprint-operation';
import SprintItem from '../../components/SprintItem/SprintItem';

export default function SprintsPage() {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const { projectId } = useParams();
  // const projects = useSelector(state => state.projects);
  console.log(projectId);
  useEffect(() => {
    dispatch(getSprint(projectId));
  }, [dispatch, projectId]);

  const onOpenModal = () => {
    setModalOpen(true);
  };

  const onCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.sprintsContainer}>
      <div className={styles.sprintsSideBar}>
        <div className={styles.sprintsBackContainer}>
          <a href="" className={styles.sprintsBackButton}>
            Показать проекты
          </a>
        </div>
        {/* <ul className={styles.sprintsProjectList}>
          {projects.map(project => (
            <li className={styles.sprintsProjectItem} key={project._id}>
              <a className={styles.projectsLink} href="">
                {project.title}
              </a>
            </li>
          ))}
        </ul> */}
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
            <h2 className={styles.mainblockTitle}>Project</h2>
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
          <button type="button" className={styles.addButon}>
            Добавить людей
          </button>
        </div>
        {modalOpen && (
          <TemporaryModal onClose={onCloseModal} title="Створення спринта">
            <SprintForm closeModal={onCloseModal} />
          </TemporaryModal>
        )}
        {}
        <SprintItem />
      </div>
    </div>
  );
}
