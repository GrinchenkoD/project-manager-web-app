import React from 'react'
import styles from '../../pages/sprintsPage/SprintsPage.module.css';

const SprintItem = ({title, startDate, endDate, duration}) => {
    return (
        <ul className={styles.sprintsCont}>
          <li className={styles.sprintsItem}>
          <p className={styles.sprintTitle}>{ title }</p>
            <div className={styles.sprintItemText}>
              <div className={styles.textCont}>
                <p>Дата начала</p>
                <p>{startDate}</p>
              </div>
              <div className={styles.textCont}>
                <p>Дата оконч.</p>
                <p>{endDate}</p>
              </div>
              <div className={styles.textCont}>
                <p>Длительность</p>
              <p>{ duration }</p>
              </div>
            </div>
            <button type="button" className={styles.deleteButton}></button>
          </li>
        </ul>
    )
}

export default SprintItem;