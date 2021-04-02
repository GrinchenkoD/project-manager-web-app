import React, { useCallback } from 'react';
import { Form, Formik } from 'formik';
import sprintsSchema from './sprintSchema';
import FormControl from '../formControl/FormControl';
import styles from '../ProjectForm/ProjectForm.module.css';
import { addContributor } from 'redux/projects/project-operations';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

const SprintForm = () => {
  const dispatch = useDispatch();
  const { projectId } = useParams();

  const addPeople = useCallback(
    values => {
      dispatch(addContributor(projectId, values));
      console.log(values);
    },
    [dispatch, projectId],
  );

  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={sprintsSchema}
      onSubmit={addPeople}
    >
      <Form>
        <FormControl
          name="email"
          type="email"
          id="email"
          placeholder="E-mail"
        />
        <div className={styles.btnThumb}>
          <button type="submit" className={styles.acceptBtn}>
            Готово
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SprintForm;
