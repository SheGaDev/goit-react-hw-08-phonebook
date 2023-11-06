import { AppDispatch, RootState } from 'redux/store';

export type ThunkConfig = {
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: string;
};
