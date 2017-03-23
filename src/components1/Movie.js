
import React,{Component} from 'react'
import {Link} from 'react-router'



let styles = {
	'padding-left': '10px'
}

export default class Movie extends Component{

	render(){
		return (
			<div>
			Movie
				<Link style = {styles} to='/movieList/gcz'>movieList</Link>
				<Link style = {styles} to='/movieSearch'>movieSearch</Link>
				<div>
					{this.props.children}
				</div>

			</div>
		)
	}

}
