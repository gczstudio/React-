
import React, {Component} from 'react'

export default class ClickEvent extends Component {

	constructor(props){
		super(props);
		this.state = {
			liked : false
		}
	}

	handleMouseOver = (str)=>{

		console.log(str);
	}
	handleClick(p1,p2,p3,e){
		this.setState({
			liked :!this.state.liked
		})
		// console.log(p1);
		// console.log(p2);
		// console.log(p3);
		// console.log(e);
	}

    render() {
    	 const text = this.state.liked ? 'like' : 'haven\'t liked';
        return (
            <div>
        		{/*不使用箭头函数时，要使用bind ，使用箭头函数，传参数时，要用箭头函数包裹，否则直接执行*/}
               <p onMouseOver={()=>this.handleMouseOver('haha')} onClick={this.handleClick.bind(this,23,"dfdf",function(){})}>
                You {text} this. Click to toggle.
            </p>
            </div>
        )
    }
}
