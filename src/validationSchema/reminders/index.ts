import * as yup from 'yup';

export const reminderValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  reminder_time: yup.date().required(),
  task_id: yup.string().nullable().required(),
});
