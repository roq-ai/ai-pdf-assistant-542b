import * as yup from 'yup';

export const pdfValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  upload_time: yup.date().required(),
  user_id: yup.string().nullable().required(),
  business_id: yup.string().nullable().required(),
});
