import React from 'react';
import { Form, Formik } from 'formik';
import sprintsSchema from './sprintSchema';
import FormControl from '../formControl/FormControl';
import styles from '../ProjectForm/ProjectForm.module.css';

const SprintForm = () => {
  const addPeople = () => {
    console.log('Add people!!!!');
  };
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
