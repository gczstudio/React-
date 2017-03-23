
import React, {Component} from 'react'
import {ReactDOM,findDOMNode} from 'react-dom'

// import Hello from './Hello.js'

export default class FindDom extends Component {
	// 获取dom元素
	// 1. 使用findDOMNode() 
	// 2. 使用refs属性（常用）
	handleClick= ()=>{
   		this.refs.myTextInput.focus();
   		console.log(this.refs.myTextInput.value);
      console.log(this.textInput.value)

	}

  // componentDidMount(){
  //       console.log(1)
  //   var el = ReactDOM.findDOMNode(this.refs.hello)

  //   console.log(el)
  // }

    render() {
        return (
            <div> 
              
  		        <input type="text" ref="myTextInput" />

              {/*新版本的react已经不推荐我们使用ref string 而使用ref callback*/}
              <input type="text" ref = {(input)=>{this.textInput = input}} />


  		        <input type="button" value="Focus the text input" onClick={this.handleClick} />
  			      {/*<Hello ref = "hello"/>*/} 
            </div>
        )
    }
}


