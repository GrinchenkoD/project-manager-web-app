import React, { useCallback } from 'react';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addSprint } from '../../redux/sprints/sprint-operation';
import sprintsSchema from './sprintSchema';
import FormControl from '../formControl/FormControl';

const SprintForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const { projectId } = useParams();

  const addNeWSprint = useCallback(
    values => {
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
        endDate: '',
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
          name="endDate"
          type="text"
          id="endDate"
          placeholder="Дата"
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
