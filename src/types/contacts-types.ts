export interface IContact {
  id: string;
  name: string;
  number: string;
}

export interface IContactForm {
  name: string;
  number: string;
}

export type ContactsState = {
  items: IContact[];
  error: string | null;
  isLoading: boolean;
};
