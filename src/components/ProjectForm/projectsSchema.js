import * as Yup from 'yup';

const projectsSchema = Yup.object().shape({
  title: Yup.string().required('Поле обязательное!'),
  description: Yup.string().required('Поле обязательное!'),
});

export default projectsSchema;
