import React, { useCallback } from 'react';
import { Form, Formik } from 'formik';
import sprintsSchema from './sprintSchema';
import FormControl from '../formControl/FormControl';
import styles from '../ProjectForm/ProjectForm.module.css';
import form from './SprintFormPeople.module.css';
import { addContributor } from 'redux/projects/project-operations';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { projectsSelector } from 'redux/projects/project-selectors';
import { format } from 'prettier';

const SprintForm = () => {
  const dispatch = useDispatch();
  const { projectId } = useParams();
  const projects = useSelector(projectsSelector);
  const { members } = projects.find(item => item._id === projectId);
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
        <div className={form.textCont}>
          <p className={form.addedText}>Добавленные пользователи:</p>
          <ul>
            {members.map(member => (
              <li className={form.textItem} key={member}>
                {member}
              </li>
            ))}
          </ul>
        </div>
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
