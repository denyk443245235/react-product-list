import {ADD_ENTRY_TO_LIST} from "../contants";

let list = (state = [], {type, name}) => {
  switch (type) {
    case ADD_ENTRY_TO_LIST:
      return [
        ...state,
        name
      ];
    default:
      return state;
  }
};
export default list;