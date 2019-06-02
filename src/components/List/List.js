import React from 'react';

import ListItem from './ListItem/ListItem';
import Button from '../Button/Button';

import classes from './List.module.css';

const List = (props) => {
    return (
        <div className={classes.List}>
            <div className={classes.Buttons}>
                <Button clicked={() => props.filter(false)} active={props.activeBtn ? false : true}>All</Button>
                <Button clicked={() => props.filter(true)} active={props.activeBtn ? true : false}>Favorites</Button>
            </div>
            {
                props.teams.length === 0 ? <p>Select favorite teams</p> :
                props.teams.map((e, i) => 
                    <ListItem 
                        key={e.id} 
                        item={e} 
                        selected={e === props.selected ? true : false}
                        clicked={props.selectTeam}
                />)
            }
        </div>
    )
}

export default List;