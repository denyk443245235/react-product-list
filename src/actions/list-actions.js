import {ADD_ENTRY_TO_LIST, CHANGE_BUYING_STATE, DELETE_ENTRY_FROM_LIST} from '../contants';
export const addEntryToList = (name) => {
  return {
    type : ADD_ENTRY_TO_LIST,
    name
  };
};

export const deleteEntryFromList = (index) => {
  return {
    type : DELETE_ENTRY_FROM_LIST,
    index
  };
};

export const changeBuyingState = ({index, buyingState}) => {
  return {
    type : CHANGE_BUYING_STATE,
    index,
    buyingState
  };
};