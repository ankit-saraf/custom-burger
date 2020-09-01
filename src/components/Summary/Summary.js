import React from 'react';
import Aux from '../../hoc/aux'
import Button from '../UI/Button/Button'

const summary = (props) => {
    const ing_list = Object.keys(props.ingredients).map(igKey=>{
        return(
        <li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}</li>
        )
    });
    return(
        <Aux>
            <h2>Your Order :)</h2>
            <p>Your burger contains following ingredients:</p>
            <ul>
                {ing_list}
            </ul>
    <p>Order total: <strong>Rs. {props.price}</strong></p>
            <Button btnType='Success' children='Checkout' clicked={props.checkout}></Button>
            <Button btnType='Danger' children='Close' clicked={props.close}></Button>
        </Aux>
    )
    
    
};

export default summary;