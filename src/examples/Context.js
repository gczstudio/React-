
import React, {Component} from 'react'

class Button extends Component {
	
    // 类里面的属性要使用static
    static contextTypes = {
        color: React.PropTypes.string,
        age: React.PropTypes.number
    }

    render(){
    	return (
            <div>
                <h1>{this.context.age}</h1>
                <button style={{background: this.context.color}}>
                    {this.props.children}
                </button>
            </div>
        )
    }
}
// 在孙子里面校验祖宗里面的属性
// Button.contextTypes = {
//     color: React.PropTypes.string,
//     age: React.PropTypes.number
// }

class Message extends Component {
	render(){
    	return (
            <div>
                {this.props.text} <Button>Delete</Button>
            </div>
        )
    	
    }
}

class MessageList extends Component {

    //通过这个方法去传递属性
	getChildContext(){
        return {
            color: "red",
            age:12
        };
    }

    static  childContextTypes = {
            color: React.PropTypes.string,
            age : React.PropTypes.number
    }

	createList= ()=>{
		return	this.props.messages.map(function(message,index) {
        			return <Message key={index} text={message} />;
   		 		})
	}
    render() {    
        return (
        	<div>{this.createList()}</div>
    	)
    }
}
 // 传递给子孙属性的类型校验
// MessageList.childContextTypes = {
// 	color: React.PropTypes.string,
//     age : React.PropTypes.number
// }

export default MessageList;