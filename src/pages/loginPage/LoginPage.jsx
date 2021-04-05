import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import styles from './LoginPage.module.css';

const loginSchema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string().required(),
});
export default function Login() {
  const dispatch = useDispatch();
  return (
    <main>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={values => {
          const { email, password } = values;
          dispatch(login({ email, password }));
        }}
      >
        <div className={styles.container}>
          <Form className={styles.registerForm}>
<<<<<<< HEAD
            <h2 className={styles.registerFormTitle}>Увійти</h2>
=======
            <h2 className={styles.registerFormTitle}>Вхід</h2>
>>>>>>> 7a6389fb07f47abe86fdb3d84d4a2d2dbc59c532
            <Field
              autoComplete="on"
              className={styles.registerFormInput}
              type="email"
              name="email"
              placeholder="E-mail"
            />
            <ErrorMessage
              name="email"
              component="span"
              className={styles.errorMessageEmail}
            />
            <Field
              autoComplete="on"
              className={styles.registerFormInput}
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <ErrorMessage
              name="password"
              component="span"
              className={styles.errorMessagePassword}
            />

            <button className={styles.registerPageButton} type="submit">
<<<<<<< HEAD
              Вхід
=======
              Увійти
>>>>>>> 7a6389fb07f47abe86fdb3d84d4a2d2dbc59c532
            </button>
            <p className={styles.registerFormText}>
              Маєте аккаунт?{' '}
              <NavLink className={styles.registerFormText} to="/registration">
<<<<<<< HEAD
                Зареєструватися
=======
                Зареєструватись
>>>>>>> 7a6389fb07f47abe86fdb3d84d4a2d2dbc59c532
              </NavLink>
            </p>
          </Form>
        </div>
      </Formik>
    </main>
  );
}
