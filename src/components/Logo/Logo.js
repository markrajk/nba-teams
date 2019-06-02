import React from 'react';

import logo from '../../assets/logo.png';
import classes from './Logo.module.css';
//import classes from './Logo.module.css';

const Logo = (props) => (
    <div >
        <img className={classes.Logo} src={logo} alt="MyBurger"/>
    </div>
);

export default Logo;