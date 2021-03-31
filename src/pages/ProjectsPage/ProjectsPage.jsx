import React, {useState, useEffect} from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ProjectsPageItem from '../ProjectsPageItem/ProjectsPageItem';
// import { addProject } from '/redux/projects/projects-operations';
import projects from './db.json';
import sprite from '../../icons/symbol-defs.svg';

import popTransition from './transitions/pop.module.css';
// import slideTransition from './transitions/slide.module.css';
import styles from './ProjectsPage.module.css';
import TemporaryModal from 'components/TemporaryModal/TemporaryModal';
import ProjectForm from 'components/ProjectForm/ProjectForm';
import { getProject } from 'redux/projects/project-operations';

const colors = ['#8c72df', '#FF765F', '#71DF87'];
let currentColor = colors[0];
let idx = 0;

const getCurrentColor = () => {
  if (idx < colors.length) {
    currentColor = colors[idx];
    idx += 1;
    return currentColor;
  } else {
    currentColor = colors[0];
    idx = 0;
    return currentColor;
  }
};

export default function ProjectsPage() {

  
  const [modalOpen, setModalOpen] = useState(false);
  
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(getProject())
  }, [dispatch])
  
  const onOpenModal = () => {
    setModalOpen(true)
  };
  
const onCloseModal = () => {
    setModalOpen(false)
  };



  // const generateColor = () => {
  //   return '#' + Math.floor(Math.random() * 16777215).toString(16);
  // };

  return (
    <div className={styles.container}>
      {/* start of header draft */}
      {/* <div className={styles.header}>
        <p className={styles.headerLogo}>GoIT </p>
        <p className={styles.headerTitle}>Username</p>
        <svg className={styles.iconExit}>
          <use href={sprite + '#icon-exit'} />
        </svg>
      </div> */}
      {/* end of header draft */}

      <div className="projects">
        <h2 className={styles.title}>Проекти</h2>

        {projects.length && (
          <TransitionGroup component="ul" className={styles.projectsList}>
            {projects.map(project => (
              <CSSTransition
                key={nanoid()}
                timeout={200}
                classNames={popTransition}
              >
                <li
                  className={styles.projectsListItem}
                  key={nanoid()}
                  style={{ backgroundColor: getCurrentColor() }}
                >
                  <ProjectsPageItem {...project} color={currentColor}>
                    <span className={styles.projectDescription}>
                      {project.description}
                    </span>
                  </ProjectsPageItem>
                </li>
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}

        <div className="addProjectSection">
          <button
            type="button"
            // onClick={event => dispatch(addProject())}
            className={styles.btnAdd}
            onClick={onOpenModal}
          >
            {/* <svg className={styles.btnAddIcon} width="32px" height="32px">
            <use href={sprite + '#icon-plus'} />
          </svg> */}
            <p className={styles.btnAddIcon}>+</p>
          </button>
          <p className={styles.addProjectText}>Створити проект</p>
        </div>
        {modalOpen&& <TemporaryModal onClose={onCloseModal} title="Створення проекту">
          <ProjectForm/>
        </TemporaryModal>}
       ()
      </div>
    </div>
  );
}
