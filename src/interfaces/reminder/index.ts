import { TaskInterface } from 'interfaces/task';
import { GetQueryInterface } from 'interfaces';

export interface ReminderInterface {
  id?: string;
  title: string;
  description?: string;
  reminder_time: any;
  task_id: string;
  created_at?: any;
  updated_at?: any;

  task?: TaskInterface;
  _count?: {};
}

export interface ReminderGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  task_id?: string;
}
