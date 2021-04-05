import * as Yup from 'yup';

const projectsSchema = Yup.object().shape({
  title: Yup.string().trim().required('Обов`язкове поле'),
  description: Yup.string().required('Обов`язкове поле'),
});

export default projectsSchema;
