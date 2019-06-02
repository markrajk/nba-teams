import React, { Component } from 'react';

import List from '../List/List';
import Panel from '../Panel/Panel';

import classes from './Layout.module.css';



class Layout extends Component {
    state = {
        teams: [],
        selected: '',
        favorites: [],
        filter: false
    }

    componentDidMount() {
        const baseURL = 'https://www.balldontlie.io/api/v1/teams';
        let result;
        fetch(baseURL).then(data => data.json())
            .then(data => {
                result = data.data;
                this.setState({teams: result, selected: result[0]})
            }).catch(error => console.log(error));
    }

    selectedTeamHandler = (team) => {
        this.setState({selected: team})
    }

    addFavoriteHandler = (team) => {
        const favorites = [...this.state.favorites];
        if(favorites.some(e => e === team)) {
            let index = favorites.indexOf(team);
            if (index !== -1) favorites.splice(index, 1);
            this.setState({favorites: favorites});
        }else {
            favorites.push(team);
            this.setState({favorites: favorites});
        }
    }

    filterTeamsHandler = (evt) => {
        if(evt) {
            this.setState({filter: true});
        }else {
            this.setState({filter: false});
        }
    }

    render() {
        return (
            <div className={classes.Layout}>
                <List 
                    activeBtn = {this.state.filter}
                    teams={this.state.filter ? this.state.favorites : this.state.teams}
                    selected={this.state.selected}
                    selectTeam={this.selectedTeamHandler}
                    filter={this.filterTeamsHandler}/>
                <Panel 
                    activeBtn={this.state.favorites.some(e => e === this.state.selected)}
                    selected={this.state.selected} 
                    addFavorite={this.addFavoriteHandler}/>
            </div>
        );
    }
}

export default Layout;