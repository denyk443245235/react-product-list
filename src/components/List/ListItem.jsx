import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import './style.css';

export default ({name}) => {
  return (
    <ListItem button className='list-item'>
      <ListItemText primary={name} />
      <DeleteIcon color="action"/>
    </ListItem>
  )
};

