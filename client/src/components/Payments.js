import React from 'react'
import StripeCheckout from 'react-strip-checkout'

export default class Payments extends React.Component{
	render(){
		return(
			<StripeCheckout
				amount={this.props.amount || 500}
				token={token => console.log(token)}
				stripeKey={process.env.REACT__APP_STRIKE_KEY}
			/>
			)
	}
}