import React from 'react';
import classes from './NavigationItems.css';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => (
    <ul className={classes.Bar}>
        {/* <li><a href="/" >Burger Builder</a></li> */}
        <li>{props.isAuth
            ? <NavLink to="/orders" activeClassName={classes.active}>Orders</NavLink> //<a href="/orders">Orders</a>
            : null}
        </li>
        <li>{!props.isAuth
            ?<NavLink activeClassName={classes.active} to="/auth">Authenticate</NavLink> //<a href="/auth">Authenticate</a>
        : <NavLink activeClassName={classes.active} to="/logout">Logout</NavLink>}
        </li>
        
    </ul>
    
    
);

export default Navigation;