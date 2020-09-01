import React from 'react';
import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import Navigation from '../NavigationItems/NavigationItems'

const SideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return(
        <div className={attachedClasses.join(' ')}>
            <div className={classes.logo}> 
                <Logo height='50px' width='50px'></Logo>
            </div>
            <Navigation isAuth={props.isAuth}></Navigation>
        </div>
    )
}

export default SideDrawer;