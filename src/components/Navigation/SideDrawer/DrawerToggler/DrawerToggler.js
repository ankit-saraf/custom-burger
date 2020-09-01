import React from 'react';
import classes from './DrawerToggler.css';

const DrawerToggler = (props) => (
    <div onClick={props.toggler} className={classes.DrawerToggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>
    
);

export default DrawerToggler;