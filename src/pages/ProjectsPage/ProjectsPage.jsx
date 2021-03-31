import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ProjectsPageItem from '../ProjectsPageItem/ProjectsPageItem';
import popTransition from './transitions/pop.module.css';
import styles from './ProjectsPage.module.css';
import TemporaryModal from 'components/TemporaryModal/TemporaryModal';
import ProjectForm from 'components/ProjectForm/ProjectForm';
import { getProject } from 'redux/projects/project-operations';
import { projectsSelector } from 'redux/projects/project-selectors';
import { useHistory, useRouteMatch } from 'react-router-dom';

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
  const history = useHistory();
  const dispatch = useDispatch();
  const match = useRouteMatch();

  useEffect(() => {
    dispatch(getProject());
  }, [dispatch]);

  const onOpenModal = () => {
    setModalOpen(true);
  };

  const onCloseModal = () => {
    setModalOpen(false);
  };

  const onHandleClick = e => {
    history.push(`${match.url}/${e.target.id}`);
  };

  const projects = useSelector(projectsSelector);

  return (
    <div className={styles.container}>
      <div className="projects">
        <h2 className={styles.title}>Проекти</h2>
        {projects.length && (
          <TransitionGroup component="ul" className={styles.projectsList}>
            {projects.map(project => (
              <CSSTransition
                key={project._id}
                timeout={200}
                classNames={popTransition}
              >
                <li
                  className={styles.projectsListItem}
                  id={project._id}
                  key={project._id}
                  style={{ backgroundColor: getCurrentColor() }}
                  onClick={onHandleClick}
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
          <button type="button" className={styles.btnAdd} onClick={onOpenModal}>
            <p className={styles.btnAddIcon}>+</p>
          </button>
          <p className={styles.addProjectText}>Створити проект</p>
        </div>
        {modalOpen && (
          <TemporaryModal onClose={onCloseModal} title="Створення проекту">
            <ProjectForm />
          </TemporaryModal>
        )}
        ()
      </div>
    </div>
  );
}
