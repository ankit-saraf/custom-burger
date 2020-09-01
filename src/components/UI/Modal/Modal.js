import React, {Component} from 'react';
import classes from './Modal.css';

class Modal extends Component  {
    shouldComponentUpdate(nextProps,nextState){
        return nextProps.show!==this.props.show;
    }
    
    render(){
        

        return(
            <div className={classes.Modal} style={{opacity: this.props.show? 1 : 0, transform:this.props.show? 'translateY(0)':'translateY(-100vh)'}}>
                {this.props.children}
            </div>
        )
    }
}
    
    


export default Modal;