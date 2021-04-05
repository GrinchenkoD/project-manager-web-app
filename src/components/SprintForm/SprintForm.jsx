import React, { useCallback, useState } from 'react';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addSprint } from '../../redux/sprints/sprint-operation';
import sprintsSchema from './sprintSchema';
import FormControl from '../formControl/FormControl';
import styles from '../ProjectForm/ProjectForm.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './picker.css';
import format from 'date-fns/format';
import { getDay } from 'date-fns';
import uk from 'date-fns/locale/uk';

const SprintForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const { projectId } = useParams();
  const [startDate, setStartDate] = useState(null);
  const [checkedBeforeDay, setcheckedBeforeDay] = useState(false);

  const options = {
    month: 'long',
    day: 'numeric',
  };

  const onChecked = () => {
    setcheckedBeforeDay(!checkedBeforeDay);
  };

  const isWeekday = date => {
    const day = getDay(date);
    return day !== 0 && day !== 6;
  };

  const changeData = date => {
    setStartDate(date);
  };

  const addNeWSprint = useCallback(
    values => {
      const data = { ...values, endDate: format(startDate, 'yyyy-M-d') };
      dispatch(addSprint(projectId, data));
      onClose();
    },
    [dispatch, projectId, onClose, startDate],
  );

  return (
    <>
      <Formik
        initialValues={{
          title: '',
          duration: '',
        }}
        validationSchema={sprintsSchema}
        onSubmit={addNeWSprint}
      >
        <Form>
          <FormControl
            label="Назва спринта"
            name="title"
            type="text"
            id="title"
            placeholder="Назва спринта"
          />
          <div className="div-datepicker">
            <input
              type="checkbox"
              className="custom-checkbox"
              id="beforeDays"
              onClick={onChecked}
            />
            <label htmlFor="beforeDays" className="label-checkbox">
              Попередні дні
            </label>
            <DatePicker
              selected={startDate}
              onChange={changeData}
              placeholderText="Дата завершення"
              autoComplete="false"
              dateFormat={
                startDate ? startDate.toLocaleDateString('ua', options) : ''
              }
              filterDate={isWeekday}
              locale={uk}
              minDate={checkedBeforeDay ? new Date() : ''}
              showDisabledMonthNavigation
            />
          </div>
          <FormControl
            label="Тривалість"
            name="duration"
            type="number"
            id="duration"
            placeholder="Тривалість"
          />
          <div className={styles.btnThumb}>
            <button
              type="submit"
              // onSubmit={addNeWSprint}
              className={styles.acceptBtn}
            >
              Готово
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default SprintForm;
