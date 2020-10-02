import {ADD_ENTRY_TO_LIST, DELETE_ENTRY_FROM_LIST} from '../contants';
export const addEntryToList = (name) => {
  return {
    type : ADD_ENTRY_TO_LIST,
    name
  };
};

export const deleteEntryFromList = (name) => {
  return {
    type : DELETE_ENTRY_FROM_LIST,
    name
  };
};