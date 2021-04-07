import * as Yup from 'yup';

const sprintsSchema = Yup.object().shape({
  email: Yup.string().required('Обов`язкове поле'),
});

export default sprintsSchema;
