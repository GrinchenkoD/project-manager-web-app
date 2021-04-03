import * as Yup from 'yup';

const projectsSchema = Yup.object().shape({
  title: Yup.string().trim().required('Обязательное поле'),
  description: Yup.string().required('Обязательное поле'),
});

export default projectsSchema;
