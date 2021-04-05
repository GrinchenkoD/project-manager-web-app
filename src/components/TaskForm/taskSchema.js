import * as Yup from 'yup';

const sprintsSchema = Yup.object().shape({
  title: Yup.string().required('Обов`язкове поле'),
  hoursPlanned: Yup.number()
    .max(8, 'Неможливо запланувати бiльше 8 годин на задачу')
    .positive()
    .integer('Введiть кiлькiсть годин')
    .required('Обов`язкове поле'),
});

export default sprintsSchema;
