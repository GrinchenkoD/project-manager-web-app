import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router';
import { deleteSprint } from 'redux/sprints/sprint-operation';
import { getSprints } from 'redux/sprints/sprint-selectors';
import styles from '../../pages/sprintsPage/SprintsPage.module.css';

const SprintItem = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const sprints = useSelector(getSprints);
  const dispatch = useDispatch();
  const months = [
    'Янв',
    'Фев',
    'Мар',
    'Апр',
    'Май',
    'Июн',
    'Июл',
    'Авг',
    'Сен',
    'Окт',
    'Ноя',
    'Дек',
  ];

  const getNormalizedDate = date => {
    const myMonth = months[new Date(date).getMonth()];
    const myDay = new Date(date).getDate().toString().padStart(2, '0');
    return myDay + ' ' + myMonth;
  };

  const onHandleClick = e => {
    const isDelete = e.target.closest('[data-process="delete"]');
    if (isDelete) {
      return;
    } else {
      history.push(`${match.url}/sprints/${e.currentTarget.id}`);
    }
  };

  return (
    <ul className={styles.sprintsCont}>
      {sprints.length > 0 ? (
        sprints.map(({ title, startDate, endDate, duration, _id }) => (
          <li
            className={styles.sprintsItem}
            key={_id}
            id={_id}
            onClick={onHandleClick}
          >
            <p className={styles.sprintTitle}>{title}</p>
            <div className={styles.sprintItemText}>
              <div className={styles.textCont}>
                <p>Дата початку</p>
                <p>{getNormalizedDate(startDate)}</p>
              </div>
              <div className={styles.textCont}>
                <p>Дата закінчення</p>
                <p>{getNormalizedDate(endDate)}</p>
              </div>
              <div className={styles.textCont}>
                <p>Тривалість</p>
                <p>{duration}</p>
              </div>
            </div>
            <button
              type="button"
              className={styles.deleteButton}
              data-process="delete"
              onClick={() => dispatch(deleteSprint(_id))}
            ></button>
          </li>
        ))
      ) : (
        <p className={styles.messageNoSprints}>
          В вашому проекті відстуні спринти, скористайтесь конпкою "Створити
          спринт"{' '}
        </p>
      )}
    </ul>
  );
};

export default SprintItem;
