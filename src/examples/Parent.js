

import React, {Component} from 'react'


// 父组件为用户输入的邮箱设好state，即“{email: ''}”，同时写好处理state的函数，即“handleEmail”，
// 再将函数以props的形式传到子组件，子组件只需在事件发生时，调用父组件传过来的函数即可。 

class Child extends Component {
    render(){
        return (
            <div>
                请输入邮箱：<input onChange={this.props.handleEmail}/>
            </div>
        )
    }
}

//父组件，此处通过event.target.value获取子组件的值
export default class Parent extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: ''
        }
    }
    handleEmail=(event)=>{
        this.setState({email: event.target.value});
    }
    render(){
        return (
            <div>
                <div>用户邮箱：{this.state.email}</div>
                <Child name="email" handleEmail={this.handleEmail}/>
            </div>
        )
    }


}

