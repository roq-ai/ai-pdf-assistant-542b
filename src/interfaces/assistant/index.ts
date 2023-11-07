import { TaskInterface } from 'interfaces/task';
import { PdfInterface } from 'interfaces/pdf';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AssistantInterface {
  id?: string;
  name: string;
  status: string;
  pdf_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  task?: TaskInterface[];
  pdf?: PdfInterface;
  user?: UserInterface;
  _count?: {
    task?: number;
  };
}

export interface AssistantGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  status?: string;
  pdf_id?: string;
  user_id?: string;
}
