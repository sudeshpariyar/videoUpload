import { createReducer, on } from '@ngrx/store';
import { videoState } from './video.state';
import { loadVideo } from './video.action';

const initialState = videoState;

export const videoReducer = createReducer(
  initialState,
  on(loadVideo, (state, { video }) => ({
    ...state,
    description: video.description,
    title: video.title,
    videoURL: video.videoURL,
  }))
);
