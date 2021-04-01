import React from 'react'
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import tasks from './db.json';

import sprite from '../../icons/symbol-defs.svg';
import addBtn from '../../icons/Buttons/addBtn.png';
import analytics from '../../icons/Buttons/analytics.png'
import styles from './TasksPage.module.css';
import TaskPageItem from 'pages/TaskPageItem/TaskPageItem';

export default function TasksPage() {
  // const sprints = useSelector(state => state.projects);
  // const tasks = useSelector(state => state.projects);
  // const { id, title } = tasks

  return (
    <div className={styles.tasksContainer}>
      
      <div className={styles.tasksPage}>
              
        <div className={styles.sprintsSideBar}>
          

          <div className={styles.showSprints}>
            <a href="/" className={styles.sprintsBackLink}>
              <svg className={styles.sprintsBackArrow} >
                <use href={sprite + '#arrow-left'} />
              </svg>
              <p className={styles.sprintsBackText}>Показати спринти</p>
            </a>
          </div>

          <div className={styles.sprintsList}>

            {/* <ul className={styles.sprintsList}>
                {sprints.map(sprint =>
                  <li className={styles.sprintListItem} key={nanoid()}>
                    <a href="/" className={styles.sprintsBackLink} >
                      <span className={styles.sprintBox}>Color Box</span>
                      <p className={styles.sprintTitle}>{sprint.title}</p>
                    </a>
                  </li>
               )}
            </ul> */}
            

          {/* <div className={styles.addSprintSection}>
            <button
              type="button"
              className={styles.btnAdd}
            >
            <p className={styles.btnAddIcon}>+</p>
            </button>
            <p className={styles.addProjectText}>Створити спринт</p> 
          </div> */}
          
          </div>
        </div>
        
        <div className={styles.navigation}>
          
          <div className={styles.datePicker}>
            <div className={styles.navDay}>
              <button type="button" className={styles.navLeft}>&lt;</button>
             <p className={styles.navCurrentDay}> 2 </p>
             <p className={styles.navTotalDays}>  / 12   </p>
              <button type="button" className={styles.navRight}>&gt;</button>
            </div>
            <p className={styles.navDate}>08.08.2020</p>
          </div>

          <div className={styles.search}>
            <button type="button" className={styles.searchBBtnMagnify} >
              <svg className={styles.searchMagnify} >
                <use href={sprite + '#magnify-glass'} />
              </svg>
            </button>

          </div>
        </div> 


        
        <div className={styles.tasks}>

          <div className={styles.tasksTitle}>
            <p className={styles.tasksTitleText}> Sprint Burndown Chart 1 </p>
            
             <button type="button" className={styles.tasksTitleEdit} >
              <svg className={styles.btnEdit} >
                <use href={sprite + '#icon-edit'} />
              </svg>
            </button>
          </div>

         
          {/* {tasks.length && ( */}
            <ul className={styles.tasksList}>
              {tasks.map(tasks => 
                <TaskPageItem {...tasks}/>
              )}
          </ul>
          {/* )} */}

          <div className={styles.addTaskSection}>
           <button
            type="button"
            className={styles.btnAdd}
          >
              {/* <p className={styles.btnAddIcon}>+</p> */}
              <img src={addBtn} alt="" className={styles.btnAddIcon} />
            </button> 
            {/* <p className={styles.addProjectText}>Створити задачу</p> */}
          </div>

          <div className={styles.showGraphSection}>
           <button
            type="button"
            className={styles.btnGraph}
            >
            <img src={analytics} alt="" className={styles.btnGraphIcon} />
            </button>
            {/* <p className={styles.showGraphText}>Створити задачу</p> */}
          </div>
        
        </div>
      </div>
    </div>
  )
}