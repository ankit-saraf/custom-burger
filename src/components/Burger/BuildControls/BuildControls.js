import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
//import './App.css';
//import Layout from "./components/Layout/Layout";


const control=[
    {label:'Salad', type:'salad'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'},
    {label:'Bacon', type:'bacon'}
]
const BuildControls = (props) => (

    <div className={classes.BuildControls}>
        <p>Total Price : <strong>Rs. {props.price}</strong></p>
        {control.map(ctrl=>(
            <BuildControl 
            label={ctrl.label} key={ctrl.label} 
            add={()=> props.add_ing(ctrl.type)}
            rem={()=> props.rem_ing(ctrl.type)}
            disabled={props.disabled[ctrl.type]}></BuildControl>
        ))}

        <button className={classes.OrderButton} disabled={!props.buyable} onClick={props.view_summary}>
            {props.isAuth ? 'ORDER NOW' : 'AUTHENTICATE TO ORDER'}
        </button> 

    </div>
  
)

export default BuildControls;