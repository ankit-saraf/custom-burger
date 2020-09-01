import React from 'react';
//import Aux from '../../hoc/aux';
import classes from './Button.css';

const Button = (props) => (
<button onClick={props.clicked} className={[classes.Button,classes[props.btnType]].join(' ')}>
    {props.children}
</button>
    
);

export default Button;