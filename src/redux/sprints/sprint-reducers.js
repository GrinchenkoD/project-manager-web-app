import { createReducer } from '@reduxjs/toolkit';
import {
  addSprintSuccess, 
  getSprintSuccess, 
  deleteSprintSuccess, 
} from './sprint-action';

const sprintsReducer = createReducer([], {
  [addSprintSuccess]: (state, { payload }) => [...state, payload],
  [getSprintSuccess]: (_, { payload }) => [...payload],
  [deleteSprintSuccess]: (state, payload) => [
    ...state.filter(contact => contact.id !== payload),
  ],
});

export default sprintsReducer;