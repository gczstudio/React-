
import React,{Component} from 'react'
import {browserHistory} from 'react-router'

export default class MovieList extends Component{

	//获取从react-router中传递过来的router属性
	static contextTypes={
		router: React.PropTypes.object
	}

	componentDidMount(){
		const _this = this;
		setTimeout(function(){
			_this.context.router.push('/home');
			// browserHistory.push('/home');
		},3000)
	}

	render(){
		console.log(this.props);
	console.log(this.props.params.name);
		return (
			<div>MovieList</div>
		)
	}

}
