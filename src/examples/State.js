
import React, {Component} from 'react'

export default class State extends Component {

    
	constructor(props){
		super(props);
		//初始化state
		this.state = {
			name: '张三',
			age: 18
		}
	}
    render() {
        return (
            <div>
                <h1>{this.state.name} & {this.state.age} </h1>
            </div>
        )
    }
}
