import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';
//import './App.css';
//import Layout from "./components/Layout/Layout";

const burger = (props) => {
    let finalIngred = Object.keys(props.ingredients).map(igKey =>{
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
            return <BurgerIngredient key={igKey+i} type={igKey}></BurgerIngredient>
        });
    }).reduce((arr,el)=>{
        return arr.concat(el)
    },[])

    if(finalIngred.length===0){
        finalIngred=<p>Please start building burger</p>
    }
  
    return (
      <div className={classes.Burger}>
          <BurgerIngredient type='bread-top'></BurgerIngredient>
          {finalIngred}
          <BurgerIngredient type='bread-bottom'></BurgerIngredient>
          
      </div>
    );
  
}

export default burger;