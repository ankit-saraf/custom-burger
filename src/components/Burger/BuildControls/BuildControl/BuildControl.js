import React from 'react';
import classes from './BuildControl.css';
//import './App.css';
//import Layout from "./components/Layout/Layout";

const BuildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={props.rem} disabled={props.disabled}>Less</button>
        <button className={classes.More} onClick={props.add}>More</button>

    </div>
  
)

export default BuildControl;