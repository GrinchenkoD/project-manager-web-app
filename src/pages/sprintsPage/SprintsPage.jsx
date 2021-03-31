import React from 'react';
import sideBarButton from '../../icons/Buttons/sidebarButton.png';
import styles from './SprintsPage.module.css';

export default function SprintsPage() {
  return (
    <div className="sprintsContainer">
      <div className={styles.sprintsSideBar}>
        <div className={styles.sprintsBackContainer}>
          <a href="" className={styles.sprintsBackButton}>
            Показать
            <div>проекты</div>
          </a>
        </div>
        <ul className={styles.sprintsProjectList}>
          <li className={styles.sprintsProjectItem}>
            <a className={styles.sprintsBackButton} href="">
              Проект 1
            </a>
          </li>
          <li className={styles.sprintsProjectItem}>
            <a className={styles.sprintsBackButton} href="">
              Проект 2
            </a>
          </li>
          <li className={styles.sprintsProjectItem}>
            <a className={styles.sprintsBackButton} href="">
              Проект 3
            </a>
          </li>
          <li className={styles.sprintsProjectItem}>
            <a className={styles.sprintsBackButton} href="">
              Проект 4
            </a>
          </li>
        </ul>
        <div className={styles.buttonCont}>
          <button className={styles.sprintsButton}>
            <img className="sprintsButtonImg" src={sideBarButton} alt="" />
          </button>
          <p className={styles.buttonText}>Создать проект</p>
        </div>
      </div>
      <div></div>
    </div>
  );
}
