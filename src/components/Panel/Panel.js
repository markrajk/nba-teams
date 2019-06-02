import React from 'react';

import Button from '../Button/Button';
import Logo from '../Logo/Logo';

import classes from './Panel.module.css'

const Panel = (props) => {
    return (
        <div className={classes.Panel}>
            <div className={classes.Header}>
                <div className={classes.Title}>
                    <Logo/>
                    <div>
                        <h2>{props.selected.city}</h2>
                        <h1>{props.selected.name}</h1>
                        <h3>{props.selected.conference} {props.selected.division}</h3>
                    </div>
                </div>
                <Button clicked={() => props.addFavorite(props.selected)} selected={props.selected} active={props.activeBtn}>Add</Button>
            </div>
        </div>
    )
}

export default Panel;