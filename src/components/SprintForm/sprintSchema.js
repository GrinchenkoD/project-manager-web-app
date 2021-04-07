import * as Yup from 'yup';

const sprintsSchema = Yup.object().shape({
  title: Yup.string().required('Обов`язкове поле'),
  // endDate: Yup.string().required('Обов`язкове поле'),
  // endDate: Yup.date().default(function () {
  //   return new Date();
  // }),
  duration: Yup.number()
    .positive()
    // .integer('Введiть кiлькiсть годин')
    .required('Обов`язкове поле'),
});

export default sprintsSchema;
