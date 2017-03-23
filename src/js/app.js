// 项目入口文件
import React,{Component} from 'react'
import ReactDOM from 'react-dom'

import Hello from '../examples/Hello.js'
import State from '../examples/State.js'
import TestProps from '../examples/TestProps.js'
import Life from '../examples/Life.js'
import ClickEvent from '../examples/ClickEvent.js'
import FindDom from '../examples/FindDom.js'
import ControlForm from '../examples/ControlForm.js'
import MessageList from '../examples/Context.js'
import Animation from '../examples/Animation.js'
import Parent from '../examples/Parent.js'
import Fetch from '../examples/Fetch.js'

const data = 'abc';	

const obj = {

	name: '李四',
	age : 20
}	

const messages = ['电影','音乐','读书']	

function Welcome(props) {
  return <h2>Hello, {props.name}</h2>
}

const element = <Welcome name="Sara" />

ReactDOM.render(
    <div>
        <Hello/>   
        <State/>   
        <TestProps  title = {data} {...obj} name = '王五'>
        	<span>广东</span>
        	<span>广西</span>
        </TestProps>   
        <Life/>
        <ClickEvent/>
        <FindDom/>
        <ControlForm/>
        <MessageList messages = {messages}  />
        <Animation/>
        <Fetch/>
        {element}

    </div>,
    document.getElementById('app')
)
