import { createReducer } from '@reduxjs/toolkit';
import {
  addSprintSuccess, 
  getSprintSuccess, 
  deleteSprintSuccess, 
} from './sprint-action';

const sprintsReducer = createReducer([], {
  [getSprintSuccess]: (_, { payload }) => [...payload],
  [addSprintSuccess]: (state, { payload }) => [...state, payload],
  [deleteSprintSuccess]: (state, payload) => [
    ...state.filter(contact => contact.id !== payload),
  ],
});

export default sprintsReducer;