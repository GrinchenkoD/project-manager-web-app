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
// import './picker.scss';

// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import format from 'date-fns/format';
import { getDay } from 'date-fns';
import uk from 'date-fns/locale/uk';

const SprintForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const { projectId } = useParams();

  const [startDate, setStartDate] = useState(null);

  const options = {
    month: 'long',
    day: 'numeric',
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
      console.log(values);
      console.log(startDate);
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
            name="title"
            type="text"
            id="title"
            placeholder="Назва спринта"
          />
          <FormControl
            //   label="Password"
            name="duration"
            type="text"
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

      <DatePicker
        selected={startDate}
        onChange={changeData}
        placeholderText="Дата закінчення"
        autoComplete="false"
        dateFormat={
          startDate ? startDate.toLocaleDateString('ua', options) : ''
        }
        filterDate={isWeekday}
        locale={uk}
        // calendarClassName="picker"
        // className="picker"
      />
    </>
  );
};

export default SprintForm;
