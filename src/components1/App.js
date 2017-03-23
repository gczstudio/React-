
import React,{Component} from 'react'
import {Link,IndexLink} from 'react-router'
import '../styles/app.scss'

export default class App extends Component{

	render(){
		return (
			<div className = "app_container">
				<div className = "app_header">
					{/*<IndexLink to="/">Home</IndexLink>*/}
					<Link to="/home">Home</Link>
					<Link to="/about">about</Link>
					<Link to="/movie">movie</Link>
					<Link to="/contact">contact</Link>
				</div>
				<div className = "app_content">
					{this.props.children}
				</div>

			</div>
		)
	}

}
