import React, { useCallback } from 'react'
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addProject } from 'redux/projects/project-operations';
import projectsSchema from "./projectsSchema.js"
import FormControl from 'components/formControl/FormControl.jsx';
import styles from "./ProjectForm.module.css"
import isLoading from 'redux/loading/loading-selectors.js';


const ProjectForm = ({onClose}) => {

    const dispatch = useDispatch();
    const loading = useSelector(isLoading)
    const addNeWProject = useCallback((values) => { dispatch(addProject(values)); onClose()}, [dispatch]);
    

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
          label="Назва проекту"
          name="title"
          type="text"
          id="title"
        //   placeholder="Назва проекту"
        />

        <FormControl
          label="Опис"
          name="description"
          type="text"
          id="description"
        //   placeholder="Опис"
        />
        <div className={styles.btnThumb}>
            <button
            type="submit"
              disabled={loading}
            className={styles.acceptBtn}
            >
                            Готово
            </button>
        </div>
      </Form>
    </Formik>
    )
}

export default ProjectForm
