import { createAction, props } from '@ngrx/store';
import { IUserState } from './user.state';

export const LOAD_USER = '[user] load user';
export const REMOVE_USER = '[user] remove user';

export const loadUser = createAction(LOAD_USER, props<{ user: IUserState }>());
export const removeUser = createAction(REMOVE_USER);
