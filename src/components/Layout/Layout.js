import React, { Component } from 'react';
import Aux from '../../hoc/aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import { connect } from 'react-redux';

//since it contain state it would be better to keep it in container folder.

class layout extends Component {
  
    state={
      view_sidebar:false,
    }

    sideDrawerClosedHandler = () => {
        this.setState( { view_sidebar: false } );
    }
    
    sidebarToggler=()=>{
        this.setState((prevState)=>{return {view_sidebar:!prevState.view_sidebar};});
    }
    

    render(){
        return(
        <Aux>
            <div><Toolbar togglerClicked={this.sidebarToggler} isAuth={this.props.isAuthenticated}></Toolbar></div>
            <br/><br/>
            <SideDrawer open={this.state.view_sidebar} isAuth={this.props.isAuthenticated} closed={this.sideDrawerClosedHandler}></SideDrawer>
            <main className={classes.content}>
                {this.props.children}
            </main>
        </Aux>
        )
    }
    
    
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.token !== null
    };
};

export default connect( mapStateToProps )(layout);