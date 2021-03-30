import React from "react";
import { useDispatch } from "react-redux";
import {login} from '../../redux/auth/auth-operations'
import { Formik, Form, Field, /*ErrorMessage*/ } from "formik";
import * as Yup from "yup";
import {
  registerForm,
  registerFormInput,
  registerFormTitle,
  registerPageButton,
  registerFormText,
  // errorMessage
} from './LoginPage.module.css';

const loginSchema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string().required(),
});
export default function Login() {
  const dispatch = useDispatch();
  return (
    <main>
      <Formik
        initialValues={{ email: "", password: "",}}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          const {email,password} = values
          dispatch(login({email, password}));
        }}
      >
        <Form className={registerForm}>
        <h2 className={registerFormTitle}>Вход</h2>
          <Field autoComplete="on" className={registerFormInput} type="email" name="email" placeholder="email" />
          {/* <ErrorMessage name="email" component="span" className={errorMessage}/> */}
          <Field autoComplete="on" className={registerFormInput} type="password" name="password" placeholder="password" />
          {/* <ErrorMessage name="password" component="span" className={errorMessage}/> */}
          
          <button className={registerPageButton} type="submit">Submit</button>
          <p className={registerFormText}>
          Уже есть аккаунт?{' '}
          <a className={registerFormText} href="/">
            Войти
          </a>
        </p>
        </Form>
      </Formik>
    </main>
  );
}
