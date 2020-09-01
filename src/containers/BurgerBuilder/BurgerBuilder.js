import React, { Component } from 'react';
import Aux from '../../hoc/aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import Summary from '../../components/Summary/Summary';
// import axios from '../../axios_order';
import Spinner from '../../components/UI/Spinner/Spinner';
import { connect } from 'react-redux';
import * as actions from '../../store/actions'
import * as actionType from '../../store/actionTypes';


//import './App.css';
//import Layout from "./components/Layout/Layout";


class BurgerBuilder extends Component {
  
  state={
    //buyable:false,
    view_summary:false,
    loading:false,
    error:false
  }

  // we will fetch default ingredients from axios & firebase
  //componentDidMount () {
    // axios.get( 'https://burger-builder-987.firebaseio.com/ingredients.json' )
    //     .then( response => {
    //         this.setState( { ingredients: response.data } );
    //     } )
    //     .catch( error => {
    //         this.setState( { error: true } );
    //     } );
//}

  
  // addIngredientHandler = (type) =>{
  //   const copyIngredients={
  //     ...this.state.ingredients
  //   }
  //   copyIngredients[type]+=1;
  //   const updated_price=this.props.totalPrice+ING_PRICE[type];
  //   this.setState({total_price:updated_price, ingredients:copyIngredients})
  //   this.updateBuyable(copyIngredients)
  // }

  // remIngredientHandler = (type) =>{
  //   const copyIngredients={
  //     ...this.state.ingredients
  //   }
  //   copyIngredients[type]=Math.max(copyIngredients[type]-1,0);
  //   const updated_price=Math.max(this.props.totalPrice-ING_PRICE[type],this.props.totalPrice-ING_PRICE[type]*this.state.ingredients[type]);
  //   this.setState({total_price:updated_price, ingredients:copyIngredients})
  //   this.updateBuyable(copyIngredients)
  // }

  updateBuyable(ingredients){
    
    const sum= Object.keys(ingredients).map(igKey=>{
      return ingredients[igKey];
    }).reduce((sum,el)=>{
      return sum+el;
    },0);
    // this.setState({buyable:sum>0})
    return sum>0;
  }


  change_view=()=>{
    if(this.props.isAuth){
      this.setState({view_summary:true});
    }
    else{
      this.props.onSetAuthRedirectPath('/checkout');
      this.props.history.push('/auth');
    }
  }
  close_view=()=>{
    this.setState({view_summary:false});
  }

  CheckoutHandler=()=>{
    // const queryParams = [];
    // for (let i in this.state.ingredients) {
    //     queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
    // }
    // queryParams.push('price='+this.props.totalPrice.toFixed(2));
    // const queryString = queryParams.join('&');
    this.props.history.push({
        pathname: '/checkout',
        //search: '?' + queryString
    });
  }



  render() {
    const disabled_button={
      ...this.props.ingredients
    }

    for (let key in disabled_button){
      disabled_button[key] = disabled_button[key]<=0 
    }

    let orderSummary = null;
    let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

    
    if ( this.props.ingredients) {
      burger = (
        <Aux>
        <Burger ingredients={this.props.ingredients}></Burger>
        <BuildControls  add_ing={this.props.addIngredient}
        rem_ing={this.props.remIngredient}
        disabled={disabled_button} price={this.props.totalPrice}
        buyable={this.updateBuyable(this.props.ingredients)} isAuth={this.props.isAuth} view_summary={this.change_view}/>
      </Aux>
      );
      

      orderSummary = <Summary ingredients={this.props.ingredients} price={this.props.totalPrice} close={this.close_view} checkout={this.CheckoutHandler}/>;
  }

  if ( this.state.loading ) {
    orderSummary = <Spinner />;
}

    return (
      <Aux>
          <Modal show={this.state.view_summary} >
              {orderSummary}             
          </Modal>
          {burger}

      </Aux>
    );
  }
}

const mapStateToProps=state=>{
  return{
      ingredients: state.ingredients,
      totalPrice: state.price,
      isAuth: state.token !== null,
  } 
}

const mapDispatchToProps=dispatch=>{
  return{
    addIngredient:(ingName)=>dispatch({type:actionType.ADD_ING,ing:ingName}),
    remIngredient:(ingName)=>dispatch({type:actionType.REM_ING,ing:ingName}),
    reset:()=>dispatch({type:actionType.RESET}),
    onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
      
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder);