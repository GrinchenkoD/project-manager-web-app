import React, { useCallback } from 'react'
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addSprint } from '../../redux/sprints/sprint-operation';
import sprintsSchema from "./sprintSchema"
import FormControl from '../formControl/FormControl';

const SprintForm = () => {
  const dispatch = useDispatch();
  const projectId = useSelector(state => state.projects);
  console.log(projectId);
    const addNeWSprint = useCallback((values) => dispatch(addSprint(values)), [dispatch]);
  
    return (
        <Formik
      initialValues={{
        title: "",
        endDate: "",
        duration: ""
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

        <button
          type="submit"
          className=""
        >
          Готово
        </button>
      </Form>
    </Formik>
    )
}

export default SprintForm;