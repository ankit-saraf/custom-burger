import React , {Component} from 'react';
import './AddDetail.css'
import Button from '../../../components/UI/Button/Button'
import axios from '../../../axios_order'
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class AddDetail extends Component {
    state={
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name',
                    required:true,
                    maxLength: '50',
                },
                value: ''
            },
            addressLine1: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Address Line 1',
                    required:true,
                    maxLength: '100',
                },
                value: ''
            },
            addressLine2: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Address Line 2',
                    maxLength: '100',

                },
                value: ''
            },
            pinCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'PIN Code',
                    required:true,
                    maxLength: '10',
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country',
                    required:true,
                    maxLength: '20',
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail',
                    required:true,
                    
                },
                value: ''
            },
            contact: {
                elementType: 'input',
                elementConfig: {
                    type: 'tel',
                    placeholder: 'Your Contact (Omit country code)',
                    required:true,
                    maxLength: '10',
                },
                value: ''
            }
        },
        loading:false,
    }

    OrderHandler=(event)=>{
        event.preventDefault();

        this.setState( { loading: true } );

        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }

        const order = {
            ingredients:this.props.ingredients,
            price:this.props.price,
            userDetail:formData,
            userId: this.props.userId,
        }
        axios.post( '/orders.json', order )
                .then( response => {
                    this.setState( { loading: false} );
                    this.props.history.push('/');
                    alert('Your order has been placed successfully! You can now check it in Orders section. Thank you!')
                    this.props.reset();
                } )
                .catch( error => {
                    console.log(error.response)
                    this.setState( { loading: false} );
                } );
    }

    changeValueHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]  //to set deep mapping
        };
        updatedFormElement.value = event.target.value;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        this.setState({orderForm: updatedOrderForm});
    }


    render(){
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        let form=(<div style={{backgroundColor:"#f5c382",padding:'20px 0px'}}>
            <h2>Add your details</h2>
            <form onSubmit={this.OrderHandler}>
            {formElementsArray.map(formElement=>(
                    <Input key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    changed={(event) => this.changeValueHandler(event, formElement.id)}  ></Input>
                ))}
            <Button btnType='Success'>Place Order</Button>
                
            </form>
        </div>)
        if(this.state.loading){
            form=(<Spinner></Spinner>)
        }
        return(
            <div style={{textAlign:'center'}}>
                {form}
            </div>
        )
    }
    
}

export default AddDetail;