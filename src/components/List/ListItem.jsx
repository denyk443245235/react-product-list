import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import './style.css';
import {addEntryToList, changeBuyingState, deleteEntryFromList} from "../../actions/list-actions";
import {connect} from "react-redux";
import Checkbox from "@material-ui/core/Checkbox";

let ListItemComponent =  ({
    item,
    deleteEntryFromList,
    index,
    changeBuyingState
}) => {
  let {name, buyingState, changeBuyingStateTime} = item;
  let date = new Date(changeBuyingStateTime).toLocaleString();
  return (
    <ListItem button className='list-item'>
      <ListItemText primary={name} />
      <Checkbox
        checked={buyingState}
        onChange={() => {changeBuyingState(index, !buyingState)}}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />

      {changeBuyingStateTime &&
        <div>
          {date}
        </div>
      }
      <DeleteIcon color="action" onClick={() => {deleteEntryFromList(index)}}/>
    </ListItem>
  )
};

const mapStateToProps = ({list}) => {
  return {
    list
  }
;};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteEntryFromList : (index) => {
      return dispatch(deleteEntryFromList(index));
    },
    changeBuyingState : (index, buyingState) => {
      return dispatch(changeBuyingState({index, buyingState}));
    }
  }
};

export default connect (mapStateToProps, mapDispatchToProps)(ListItemComponent);