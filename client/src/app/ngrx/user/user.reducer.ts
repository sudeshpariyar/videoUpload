import { createReducer, on } from '@ngrx/store';
import { userState } from './user.state';
import { loadUser, removeUser } from './user.action';

const initialState = userState;

export const userReducer = createReducer(
  initialState,
  on(loadUser, (state, { user }) => ({
    ...state,
    email: user.email,
    id: user.id,
  })),
  on(removeUser, (state) => ({ email: '', id: null }))
);
