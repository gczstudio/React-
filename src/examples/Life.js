import React, {Component} from 'react';

export default class Life extends Component {
    constructor(props){
        super(props)
        console.log("构造函数")
        // 初始化state
        this.state = {
           props1:"初始化state"
        }
    }
    // 组件将要被渲染到真实的dom节点中
    componentWillMount(){
        console.log("componentWillMount");
    }
    // 组件已经插入到真实的dom节点中
    componentDidMount(){
        console.log("componentDidMount");
    }
    // 组件是否要被重新渲染
    shouldComponentUpdate(){
        console.log("shouldCompontentUpdate");
        return true;
    }
    // 组件将要被重新渲染
    componentWillUpdate(){
        console.log("conpontentWillUpdate");
    }
    // 组件已经被重新渲染
    componentDidUpdate(){
        console.log("conpontentDidUpdate");
    }
    // 组件将要接受到新属性
    componentWillReceiveProps(){
        console.log("compintentWillReceiveProps");
    }
    click1 = ()=>{
        console.log("点击了单击事件");
        this.setState({
            props1:"改变state的值"
        })
        console.log("点击了单击事件结束");
    }
    render() {
        console.log("render");
        return (
            <div>
                <h1 onClick={this.click1}>{this.state.props1}</h1>
            </div>
        )
    }
}