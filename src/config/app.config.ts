interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Admin'],
  tenantName: 'Business',
  applicationName: 'AI PDF Assistant',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage user information',
    'Manage business information',
    'Manage PDFs',
    'Manage assistants',
    'Manage tasks',
    'Manage reminders',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/261f2ba5-cce5-4539-b51b-1402d70891b9',
};
