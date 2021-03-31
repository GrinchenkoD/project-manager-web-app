import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import sideBarButton from '../../icons/Buttons/sidebarButton.png';
import styles from './SprintsPage.module.css';
import TemporaryModal from '../../components/TemporaryModal/TemporaryModal';
import SprintForm from '../../components/SprintForm/SprintForm';

export default function SprintsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const projects = useSelector(state => state.projects);

  // const handleModal = (e) => {
  //   console.log('hello')
  // }

  
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
            Показать
            <div>проекты</div>
          </a>
        </div>
        <ul className={styles.sprintsProjectList}>
          {projects.map(project => (
            <li className={styles.sprintsProjectItem} key={project._id}>
              <a className={styles.sprintsBackButton} href="">
                {project.title}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.buttonCont}>
          <button className={styles.sprintsButton}>
            <img className="sprintsButtonImg" src={sideBarButton} alt="" />
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
            <SprintForm />
          </TemporaryModal>
        )}

        {/* <ul className={styles.sprintsCont}>
          <li className={styles.sprintsItem}>
            <p className={styles.sprintTitle}>Sprint Burndown Chart 1</p>
            <div className={styles.sprintItemText}>
              <div className={styles.textCont}>
                <p>Дата начала</p>
                <p>31 марта</p>
              </div>
              <div className={styles.textCont}>
                <p>Дата оконч.</p>
                <p>07 апреля</p>
              </div>
              <div className={styles.textCont}>
                <p>Длительность</p>
                <p>1 час</p>
              </div>
            </div>
            <button type="button" className={styles.deleteButton}></button>
          </li>
          <li className={styles.sprintsItem}>
            <p className={styles.sprintTitle}>Sprint Burndown Chart 1</p>
            <div className={styles.sprintItemText}>
              <div className={styles.textCont}>
                <p>Дата начала</p>
                <p>31 марта</p>
              </div>
              <div className={styles.textCont}>
                <p>Дата оконч.</p>
                <p>07 апреля</p>
              </div>
              <div className={styles.textCont}>
                <p>Длительность</p>
                <p>1 час</p>
              </div>
            </div>
            <button type="button" className={styles.deleteButton}></button>
          </li>
          <li className={styles.sprintsItem}>
            <p className={styles.sprintTitle}>Sprint Burndown Chart 1</p>
            <div className={styles.sprintItemText}>
              <div className={styles.textCont}>
                <p>Дата начала</p>
                <p>31 марта</p>
              </div>
              <div className={styles.textCont}>
                <p>Дата оконч.</p>
                <p>07 апреля</p>
              </div>
              <div className={styles.textCont}>
                <p>Длительность</p>
                <p>1 час</p>
              </div>
            </div>
            <button type="button" className={styles.deleteButton}></button>
          </li>
        </ul> */}
      </div>
    </div>
  );
}
