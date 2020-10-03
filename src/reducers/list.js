import {ADD_ENTRY_TO_LIST, CHANGE_BUYING_STATE, DELETE_ENTRY_FROM_LIST} from "../contants";
let list = JSON.parse(localStorage.getItem('list'));

let saveNewList = (list) => {
  localStorage.setItem('list', JSON.stringify(list));
};

export default (state = (list ? list : []), {type, name, index, buyingState}) => {
  switch (type) {
    case ADD_ENTRY_TO_LIST:
      var newList = [
        ...state,
        {name, buying: false}
      ];
      saveNewList(newList);
      return newList;
      break;
    case DELETE_ENTRY_FROM_LIST:
      var newList = [...state];
      newList.splice(index,1);
      saveNewList(newList);
      return  [...newList];
      break
    case CHANGE_BUYING_STATE:
      var newList = [...state];
      newList.forEach((item, i) => {
        if (i === index) {
          item.changeBuyingStateTime = new Date();
          item.buyingState = buyingState;
        }
      });
      saveNewList(newList);
      return [...newList];
      break;
    default:
      return state;
  }
};
