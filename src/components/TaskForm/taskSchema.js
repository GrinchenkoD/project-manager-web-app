import * as Yup from 'yup';

const sprintsSchema = Yup.object().shape({
  title: Yup.string().required('Обов`язкове поле'),
  hoursPlanned: Yup.string().required('Обов`язкове поле'),
});

export default sprintsSchema;
