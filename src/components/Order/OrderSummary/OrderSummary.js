import React from 'react';
import Burger from '../../Burger/Burger';
import classes from './OrderSummary.css'

const OrderSummary=(props)=>{
    return(
        <div className={classes.OrderSummary}>
            <h2>Yummy! It looks tasty...</h2>
            <div>
                <Burger ingredients={props.ingredients}></Burger>
            </div>

        </div>
    )
}
export default OrderSummary;