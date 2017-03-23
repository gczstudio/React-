
import React, { Component } from 'react';

export default class ControlForm extends Component {

    constructor(props) {
        super(props);
        this.state={ userInput: '' };
    }

    handleChange(e) {

        // 1、在react中思想是每一个组件的状态都应该为组件本身所控制
        // 2、受控表单组件中的value值是要和state属性绑定的，受控表单组件只能通过onChange方法去改变state的值，从而触发页面的从新渲染绑定

        let inputStr="";
        var inpVal = this.refs.theInput1.value;
        console.log(inpVal);

        inputStr = inpVal.length >=8 ? inpVal.slice(0,5)+"..." : inpVal;
        this.setState({ userInput:inputStr});
    }

    render() {
        return (
            <div>
                受控表单组件
                <input
                    ref="theInput1"
                    value={this.state.userInput}
                    onChange={this.handleChange.bind(this)}
                />

                {/*<input type="text" value = "1231"/>*/}
                <input type="text" />
            </div>
        );
    }
}
