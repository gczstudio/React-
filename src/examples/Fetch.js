

import React, {Component} from 'react'

export default class Fetch extends Component {


	componentDidMount(){
		fetch('1.json',{
			method: "get",
			// headers: {  
   //              "Content-Type": "application/x-www-form-urlencoded"  
   //          }, 
		    // body: {'name':'zs','age': 18}

		}).then(function(response) {

		  	return response.json()

		}).then(function(data) {

		 	console.log(data)

		}).catch(function(e) {

		  	console.log("error")

		})
	}


	/*
		method: 请求使用的方法，如 GET、POST。
		headers: 请求的头信息，
		body: 请求的 body 信息,注意 GET 或 HEAD 方法的请求不能包含 body 信息。
		mode: 请求的模式，如 cors、 no-cors 或者 same-origin。
		credentials: 请求的 credentials，如 omit、same-origin 或者 include。
		cache:  请求的 cache 模式: default, no-store, reload, no-cache, force-cache, or only-if-cached。
		redirect: 可用的 redirect 模式: follow (自动重定向), error (如果产生重定向将自动终止并且抛出一个错误), 或者 manual (手动处理重定向). 在Chrome中，Chrome 47之前的默认值是 follow，从 Chrome 47开始是 manual。
		referrer: 一个 USVString 可以是 no-referrer、client或一个 URL。默认是 client。
		referrerPolicy: Specifies the value of the referer HTTP header. May be one of no-referrer, no-referrer-when-downgrade, origin, origin-when-cross-origin, unsafe-url.
		integrity: Contains the subresource integrity value of the request (e.g., sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=).

		"Access-Control-Allow-Origin", "*"
	*/




    render() {
        return (
            <div>
            </div>
        )
    }
}
