import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import Navigation from '../NavigationItems/NavigationItems'
import DrawerToggler from '../SideDrawer/DrawerToggler/DrawerToggler'

const Toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggler toggler={props.togglerClicked}></DrawerToggler>
        <Logo></Logo>
        <div className={classes.hide}>
        <Navigation isAuth={props.isAuth}></Navigation>
        </div>
        
    </header>
    
    
);

export default Toolbar;