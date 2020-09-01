import React , {Component} from 'react';
import OrderSummary from '../../components/Order/OrderSummary/OrderSummary';
import Button from '../../components/UI/Button/Button'
import { Route } from 'react-router-dom';
import AddDetail from './AddDetail/AddDetail';
import { connect } from 'react-redux';
import * as actionType from '../../store/actionTypes';

class Checkout extends Component {
    

    // UNSAFE_componentWillMount() {
    //     const query = new URLSearchParams(this.props.location.search);
    //     const ingredients = {};
    //     let price=0;
    //     for (let param of query.entries()) {
    //         // ['salad', '1']
    //         if(param[0]==="price"){
    //             price=param[1];
    //         }
    //         else{
    //             ingredients[param[0]] = +param[1];
    //         }
            
    //     }
    //     console.log(ingredients)
    //     this.setState({ingredients: ingredients, total_price: price});
    // }
    

    cancelOrder=()=>{
        this.props.history.goBack();
    }

    checkoutHandler=()=>{
        this.props.history.push('/checkout/add-details');
    }

    render(){
        return(
            <div style={{textAlign:'center'}}>
                <OrderSummary ingredients={this.props.ingredients}></OrderSummary>
                        
                <Button clicked={this.checkoutHandler} btnType='Success'>Confirm</Button>
                <Button clicked={this.cancelOrder} btnType='Danger'>Cancel</Button>
            <br/><br/><br/>
        <Route path={this.props.match.url+'/add-details'} exact render={(props)=>(<AddDetail userId={this.props.userId} reset={this.props.reset} price={this.props.totalPrice} ingredients={this.props.ingredients} {...props}></AddDetail>)}></Route>
            </div>

            
        )
    }
    
}

const mapStateToProps=state=>{
    return{
        ingredients: state.ingredients,
        totalPrice: state.price,
        userId: state.userId
    }
    
}
  
const mapDispatchToProps=dispatch=>{
    return{
        reset:()=>dispatch({type:actionType.RESET})
        
    }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(Checkout);
