import React, { useCallback } from 'react';
import { Form, Formik } from 'formik';
import taskSchema from './taskSchema';
import FormControl from '../formControl/FormControl';
import styles from '../ProjectForm/ProjectForm.module.css';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { addTask } from 'redux/tasks/task-operation';

const SprintForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const { sprintId } = useParams();

  const onAddTask = useCallback(
    values => {
      dispatch(addTask(sprintId, values));
      onClose();
    },
    [dispatch, sprintId, onClose],
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
          label="Назва задачі"
          name="title"
          type="title"
          id="title"
          placeholder="Назва задачі"
        />
        <FormControl
          label="Заплановано годин"
          name="hoursPlanned"
          type="number"
          id="hoursPlanned"
          placeholder="Заплановано годин"
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
