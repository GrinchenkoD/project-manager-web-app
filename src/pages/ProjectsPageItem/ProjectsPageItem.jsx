import React from 'react';
// import { useDispatch } from 'react-redux';
// import { deleteProject } from '/redux/projects/projects-operations';

import sprite from '../../icons/symbol-defs.svg';

import styles from './ProjectsPageItem.module.css';

export default function ProjectsPageItem({ id, title, description }) {
  // const dispatch = useDispatch();



  return (
    <>
      {/* <div className={styles.project}> */}
      <div className={styles.projectInfo}>
        <h4 className={styles.projectTitle}>{title}</h4>
        <p className={styles.projectDescription}>{description}</p>

        <button
          data-id={id}
          // onClick={event => dispatch(deleteProject(id))}
          type="button"
          className={styles.btnDelete}
        >
          {/* Delete */}
          <svg className={styles.btnDeleteIcon}>
            <use href={sprite + '#icon-bin'} />
          </svg>
        </button>
      </div>
      {/* </div> */}
    </>
  );
}
