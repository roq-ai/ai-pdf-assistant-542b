import { ReminderInterface } from 'interfaces/reminder';
import { AssistantInterface } from 'interfaces/assistant';
import { GetQueryInterface } from 'interfaces';

export interface TaskInterface {
  id?: string;
  title: string;
  description?: string;
  status: string;
  due_date?: any;
  assistant_id: string;
  created_at?: any;
  updated_at?: any;
  reminder?: ReminderInterface[];
  assistant?: AssistantInterface;
  _count?: {
    reminder?: number;
  };
}

export interface TaskGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  status?: string;
  assistant_id?: string;
}
