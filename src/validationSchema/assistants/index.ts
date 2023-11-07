import * as yup from 'yup';

export const assistantValidationSchema = yup.object().shape({
  name: yup.string().required(),
  status: yup.string().required(),
  pdf_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
