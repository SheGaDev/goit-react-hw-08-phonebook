export interface ILoginForm {
  email: string;
  password: string;
}

export interface IRegisterForm {
  name: string;
  email: string;
  password: string;
}

export type AuthState = {
  token: string | null;
  isAuth: boolean;
  isLoading: boolean;
  error: string | null;
};

export interface IUser {
  name: string | null;
  email: string | null;
  contacts: number;
}

export interface IRegisterResponse {
  user: IUser;
  token: string;
}

export interface ILoginResponse {
  user: IUser;
  token: string;
}
