import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './Header'
import {connect} from 'react-redux'
import {fetchUser} from '../actions'
import Landing from './Landing'
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>

class App extends React.Component {
	componentDidMount() {
		this.props.fetchUser()
	}
	render(){
		return(
			<div className="container">
				<BrowserRouter>
					<div>
						<Header/>
						<Route exact={true} path="/" component = {Landing} />
						<Route exact={true} path="/surveys" component = {Dashboard} />
						<Route exact={true} path="/surveys/new" component = {SurveyNew}/>
					</div>
				</BrowserRouter>
			</div>
			)
	}
}

export default connect(null,{fetchUser})(App)