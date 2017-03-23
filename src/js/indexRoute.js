// 项目入口文件
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,IndexRoute,hashHistory,browserHistory} from 'react-router'
import App from '../components1/App.js'
import Home from '../components1/Home.js'
import About from '../components1/About.js'
import Movie from '../components1/Movie.js'
import MovieList from '../components1/MovieList.js'
import MovieSearch from '../components1/MovieSearch.js'
import Contact from '../components1/Contact.js'

ReactDOM.render(
    (
    	<Router history = {browserHistory} >
    		<Route path="/" component={App}>
    			<IndexRoute component={Home}/>
	    		<Route path="home" component={Home}
	    			onEnter = {()=>{console.log("进入了路由")}}
	    			onLeave = {()=>{console.log("离开了路由")}}
	    		></Route>
	    		<Route path="about" component={About}></Route>
	    		<Route path="movie" component={Movie}>
	    			<Route path="/movieList/:name" component={MovieList}></Route>
	    			<Route path="/movieSearch" component={MovieSearch}></Route>
	    		</Route>
    			<Route path="contact" component={Contact}></Route>
    		</Route>
    	</Router>
	),
    document.getElementById('app')
)