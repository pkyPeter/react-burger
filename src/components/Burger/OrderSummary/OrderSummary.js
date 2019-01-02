import React from "react";
import Button from "../../UI/Button/Button"

class OrderSummary extends React.Component {
	// This could be qa functional component. Make it class to check the life
	// cycle logic
	render() {
	const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
		return (
			<li>
				<span style={{ textTransform: "capitalize" }}>{igKey}</span>:
				{this.props.ingredients[igKey]}
			</li>
		);
	});
		return (
			<React.Fragment>
				<h3>Your Order</h3>
				<p>A delicious burger with</p>
				<ul>{ingredientSummary}</ul>
				<p><strong>Total Price: </strong>{this.props.price.toFixed(2)}</p>
				<p>Continue to Check out?</p>
				<Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
				<Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>	
			</React.Fragment>
		);		
	}

}

export default OrderSummary;
