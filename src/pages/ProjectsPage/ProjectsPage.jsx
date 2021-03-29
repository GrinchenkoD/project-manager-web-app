import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
// import { useDispatch } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ProjectsPageItem from '../ProjectsPageItem/ProjectsPageItem';
// import { addProject } from '/redux/projects/projects-operations';
import projects from './db.json';
import sprite from '../../icons/symbol-defs.svg';

import popTransition from './transitions/pop.module.css';
// import slideTransition from './transitions/slide.module.css';
import styles from './ProjectsPage.module.css';

export default function ProjectsPage() {
  // const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      {/* start of header draft */}
      <div className={styles.header}>
        <p className={styles.headerLogo}>GoIT </p>
        <p className={styles.headerTitle}>Username</p>
        <svg className={styles.iconExit}>
          <use href={sprite + '#icon-exit'} />
        </svg>
      </div>
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
                <li className={styles.projectsListItem} key={nanoid()}>
                  <ProjectsPageItem {...project} />
                </li>
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}

        <button
          type="button"
          // onClick={event => dispatch(addProject())}
          className={styles.btnAdd}
        >
          {/* <svg className={styles.btnAddIcon} width="24px" height="24px">
            <use href={sprite + '#icon-cross'} />
          </svg> */}
          <p className={styles.btnAddIcon}>+</p>
        </button>
      </div>
    </div>
  );
}
