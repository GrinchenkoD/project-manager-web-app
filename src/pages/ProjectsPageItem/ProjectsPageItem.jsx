import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProject } from '../../redux/projects/project-operations';

import sprite from '../../icons/symbol-defs.svg';

import styles from './ProjectsPageItem.module.css';

export default function ProjectsPageItem({ _id, title, color, children }) {
  const dispatch = useDispatch();

  const onDeleteProject = e => {
    dispatch(deleteProject(_id));
  };

  return (
    <>
      <div className={styles.projectInfo}>
        <h4 className={styles.projectTitle}>{title}</h4>
        <p className={styles.projectDescription}>{children}</p>
        <button
          type="button"
          className={styles.btnDelete}
          onClick={onDeleteProject}
          data-process="delete"
        >
          <svg className={styles.btnDeleteIcon} style={{ fill: color }}>
            <use href={sprite + '#icon-bin'} />
          </svg>
        </button>
      </div>
    </>
  );
}
