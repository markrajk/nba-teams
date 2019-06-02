import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
    return(
        <button 
            //className={classes.Button}
            className={props.active ? [classes.Button, classes.Active].join(' ') : classes.Button}
            onClick={props.clicked}>{props.children}</button>
    )
}

export default Button;