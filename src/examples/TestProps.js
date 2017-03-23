
import React, {Component} from 'react'

export default class TestProps extends Component {


   //设置默认props属性
    static defaultProps = {
       skill: 'swim'
    }


    // // 属性校验
    static propTypes = {
        name: React.PropTypes.string.isRequired,
        age : React.PropTypes.number.isRequired
    }




	createEle=()=>{

		return	React.Children.map(this.props.children, function (child) {
	          		return <li>{child}</li>;
        		})
	}

    render() {
        return (
            <div>
        		{/*
        			从父组件传过来的属性
        			this.props.children 属性。它表示组件的所有子节点
        		*/}
                <h1>{this.props.title}</h1>
          		<p>{this.props.name} & {this.props.age} &{this.props.skill}</p>

      			<ol>
			     	{this.createEle()}
				</ol>

            </div>
        )
    }
}


