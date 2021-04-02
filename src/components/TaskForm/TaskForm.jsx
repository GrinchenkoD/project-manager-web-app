import React, { useCallback } from 'react';
import { Form, Formik } from 'formik';
import taskSchema from './taskSchema';
import FormControl from '../formControl/FormControl';
import styles from '../ProjectForm/ProjectForm.module.css';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { addTask } from 'redux/tasks/task-operation';

const SprintForm = () => {
  const dispatch = useDispatch();
  const { sprintId } = useParams();

  const onAddTask = useCallback(
    values => {
      dispatch(addTask(sprintId, values));
      console.log(values);
    },
    [dispatch, sprintId],
  );

  return (
    <Formik
      initialValues={{
        title: '',
        hoursPlanned: '',
      }}
      validationSchema={taskSchema}
      onSubmit={onAddTask}
    >
      <Form>
        <FormControl
          name="title"
          type="title"
          id="title"
          placeholder="Название задачи"
        />
        <FormControl
          name="hoursPlanned"
          type="hoursPlanned"
          id="hoursPlanned"
          placeholder="Запланировано часов"
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
