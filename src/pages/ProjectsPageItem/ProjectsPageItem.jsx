import React from 'react';
import { useDispatch } from 'react-redux';
// import { deleteProject } from '/redux/projects/projects-operations';

import sprite from '../../icons/symbol-defs.svg';

import styles from './ProjectsPageItem.module.css';

export default function ProjectsPageItem({
  id,
  title,
  // description,
  color,
  children,
}) {
  const dispatch = useDispatch();

  const onDeleteProject = e => {
    // dispatch(deleteProject());
    console.log(e);
  };

  return (
    <>
      {/* <div className={styles.project}> */}
      <div className={styles.projectInfo}>
        <h4
          // className={styles.projectTitle} style={ title.length > 10 ? { lineHeight: '18px' } : { lineHeight: '20px' } }
          className={styles.projectTitle}
        >
          {title}
        </h4>
        {/* <p className={styles.projectDescription}>{description}</p> */}
        <p className={styles.projectDescription}>{children}</p>

        {/* {children} */}

        <button
          data-id={id}
          onClick={onDeleteProject}
          type="button"
          className={styles.btnDelete}
        >
          {/* Delete */}
          {/* <svg className={styles.btnDeleteIcon}> */}
          <svg className={styles.btnDeleteIcon} style={{ fill: color }}>
            <use href={sprite + '#icon-bin'} />
          </svg>
        </button>
      </div>
      {/* </div> */}
    </>
  );
}
