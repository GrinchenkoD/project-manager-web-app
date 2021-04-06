import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { register } from '../../redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import styles from './RegisterPage.module.css';
import { authSelectors } from "../../redux/auth/auth-selectors"
import Loader from '../../shared/Loader/Loader';



const regSchema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string().required(),
  confirmPassword: Yup.string().required(),
});
export default function Registration() {
  const dispatch = useDispatch();
  const loading = useSelector(authSelectors.authLoadingSelector)


  return (
    <main>
      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        validationSchema={regSchema}
        onSubmit={values => {
          const { email, password, confirmPassword } = values;
          if (password === confirmPassword) {
            dispatch(register({ email, password }));
          } else {
            alert('Паролi не спiвпадають!');
            return;
          }
        }}
      >
        <div className={styles.container}>
          <Form className={styles.registerForm}>
            <h2 className={styles.registerFormTitle}>Реєстрація</h2>
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
            <Field
              autoComplete="on"
              className={styles.registerFormInput}
              type="password"
              name="confirmPassword"
              placeholder="Повторите пароль"
            />
            <ErrorMessage
              name="confirmPassword"
              component="span"
              className={styles.errorMessageConfirmPassword}
            />
            <button className={styles.registerPageButton} type="submit">
              Зареєструватися
            </button>
            <p className={styles.registerFormText}>
              Маєте аккаунт?{' '}
              <NavLink className={styles.registerFormText} to="/login">
                Увійти
              </NavLink>
            </p>
          </Form>
        </div>
      </Formik>

     {loading&&<Loader/>}
    </main>
  );
}
