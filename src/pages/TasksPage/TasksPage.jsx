import React from 'react'
import { nanoid } from '@reduxjs/toolkit';

import tasks from './db.json';

import sprite from '../../icons/symbol-defs.svg';
import styles from './TasksPage.module.css';

export default function TasksPage(tasks, sprints) {
    const { id, title } = tasks

  return (
    <div className={styles.container}>
      
      <div className={styles.tasksPage}>
        
      
        <div className={styles.sprints}> 
          <div  className={styles.showSprints}> 
            <span>arrow left</span>
            <p>Показати спринти</p>
          </div>
          
          <div className={styles.sprintsList}>
            {sprints.length && (
            <ul className={styles.sprintsList}>
                {sprints.map(sprint =>
                  
                  <li className={styles.sprintListItem} key={nanoid()}>
                    <span className={styles.sprintBox}>Color Box</span>
                    <p className={styles.sprintTitle}>{sprint.title}</p>
                  </li>
               )}
            </ul>
            )}

            <div className={styles.addSprintSection}>
           <button
            type="button"
            className={styles.btnAdd}
          >
            <p className={styles.btnAddIcon}>+</p>
            </button>
            {/* <p className={styles.addProjectText}>Створити спринт</p> */}
          </div>
          
          </div>
        </div>


        <div  className={styles.datePicker}> 
          <p> lessThan  2 / 12   greaterThan </p>
          <p>date</p>
          <p>magnify glass</p>
        </div>
        
        <div className={styles.tasks}>
          <p className={styles.tasksTitle}> Sprint Burndown Chart 1 </p>
          <button type="button" className={styles.btnEdit}>Edit</button>

          {tasks.length && (
            <ul className={styles.tasksList}>
              {tasks.map(task => 
                
                 <li className={styles.tasksListItem} key={nanoid()}>
                  <h5 className={styles.taskTitle}>{title}</h5>

                  <div className={styles.planned}>
                    <p className={styles.plannedTitle}>Заплановано годин
                    <p className={styles.plannedHours}>8</p>
                    </p>
                  </div>

                  <div className={styles.used}>
                    <p className={styles.usedTitle}>Витрачено год СЛЕШ день
                    <p className={styles.usedHours}>6</p>
                    </p>
                  </div>

                   <div className={styles.total}>
                    <p className={styles.totalTitle}>Витрачено год СЛЕШ день
                    <p className={styles.totalHours}>6</p>
                    </p>
                  </div>

                  <button
                    data-id={id}
                    type="button"
                    className={styles.btnDelete}
                    >
                    <svg className={styles.btnDeleteIcon} >
                      <use href={sprite + '#icon-bin'} />
                    </svg>
                    </button>

                </li>
              )}
          </ul>
          )}

          <div className={styles.addTaskSection}>
           <button
            type="button"
            className={styles.btnAdd}
          >
            <p className={styles.btnAddIcon}>+</p>
            </button>
            {/* <p className={styles.addProjectText}>Створити задачу</p> */}
          </div>

          <div className={styles.showGraphSection}>
           <button
            type="button"
            className={styles.btnGraph}
          >
            <p className={styles.btnGraphIcon}>XXX</p>
            </button>
            {/* <p className={styles.showGraphText}>Створити задачу</p> */}
          </div>
          

        
        
        
        </div>
      </div>
    </div>
  )
}