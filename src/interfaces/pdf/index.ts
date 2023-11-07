import { AssistantInterface } from 'interfaces/assistant';
import { UserInterface } from 'interfaces/user';
import { BusinessInterface } from 'interfaces/business';
import { GetQueryInterface } from 'interfaces';

export interface PdfInterface {
  id?: string;
  title: string;
  content: string;
  upload_time?: any;
  user_id: string;
  business_id: string;
  created_at?: any;
  updated_at?: any;
  assistant?: AssistantInterface[];
  user?: UserInterface;
  business?: BusinessInterface;
  _count?: {
    assistant?: number;
  };
}

export interface PdfGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  user_id?: string;
  business_id?: string;
}
