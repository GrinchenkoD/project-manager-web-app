import React, { useCallback } from 'react'
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addProject } from 'redux/projects/project-operations';
import projectsSchema from "./projectsSchema.js"
import FormControl from 'components/formControl/FormControl.jsx';


const ProjectForm = () => {

    const dispatch = useDispatch();
      const addNeWProject = useCallback((values) => dispatch(addProject(values)), [dispatch]);

    return (
        <Formik
      initialValues={{
        title: "",
        description: "",
      }}
      validationSchema={projectsSchema}
      onSubmit={addNeWProject}
    >
      <Form>
        <FormControl
        //   label="Email"
          name="title"
          type="text"
          id="title"
          placeholder="Назва проекту"
        />

        <FormControl
        //   label="Password"
          name="description"
          type="text"
          id="description"
          placeholder="Опис"
        />

        <button
          type="submit"
        //   disabled={loading}
          className=""
        >
          Готово
        </button>
      </Form>
    </Formik>
    )
}

export default ProjectForm
