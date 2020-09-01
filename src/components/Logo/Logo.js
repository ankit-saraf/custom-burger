import React from 'react';
import classes from './Logo.css';
import burgerLogo from '../../assests/Images/burger-logo.png'

const Logo = (props) => (
    <div style={{height:props.height, width:props.width}} className={classes.Logo}>
        <a href="/"><img  src={burgerLogo} alt="Burger Builder"/></a>
        
    </div>
    
    
);

export default Logo;