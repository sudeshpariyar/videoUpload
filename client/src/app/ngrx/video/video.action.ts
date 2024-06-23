import { createAction, props } from '@ngrx/store';
import { IVideoState } from './video.state';

export const LOAD_VIDEO = '[video] load video';

export const loadVideo = createAction(
  LOAD_VIDEO,
  props<{ video: IVideoState }>()
);
