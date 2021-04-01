import React from 'react';
import { Form, Formik } from 'formik';
import sprintsSchema from './sprintSchema';
import FormControl from '../formControl/FormControl';

const SprintForm = ({ closeModal }) => {
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
        <button type="submit" className="">
          Готово
        </button>
      </Form>
    </Formik>
  );
};

export default SprintForm;
