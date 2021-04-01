import React, { useCallback, useState } from 'react';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addSprint } from '../../redux/sprints/sprint-operation';
import sprintsSchema from './sprintSchema';
import FormControl from '../formControl/FormControl';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SprintForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const { projectId } = useParams();
  const [startDate, setStartDate] = useState(new Date());

  const addNeWSprint = useCallback(
    values => {
      console.log(values);
      dispatch(addSprint(projectId, values));
      closeModal();
    },
    [dispatch, projectId, closeModal],
  );
  // const addNeWSprint = ( values) => dispatch(addSprint(`${projectId}`, values));
  return (
    <Formik
      initialValues={{
        title: '',
        endDate: `${startDate}`,
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

        {/* <FormControl
          label="Password"
          name="endDate"
          type="date"
          id="endDate"
          placeholder="Дата"
        /> */}
        <DatePicker
          name="endDate"
          id="endDate"
          selected={startDate}
          onChange={date => setStartDate(date)}
        />
        <FormControl
          //   label="Password"
          name="duration"
          type="text"
          id="duration"
          placeholder="Тривалість"
        />

        <button type="submit" className="">
          Готово
        </button>
      </Form>
    </Formik>
  );
};

export default SprintForm;
