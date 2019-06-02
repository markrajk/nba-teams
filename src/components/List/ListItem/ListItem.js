import React from 'react';

import classes from './ListItem.module.css';

const ListItem = (props) => {
    return (
        <div
            className={props.selected ? classes.Selected : classes.ListItem} 
            onClick={() => props.clicked(props.item)}>{props.item.full_name}
        </div>
    )
}

export default ListItem;