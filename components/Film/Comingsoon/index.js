import React from "react";
import "./index.scss";
// connect 连接React组件与redux-state 也就是说要先将组件与state进行连接
import {connect} from "react-redux";
class Comingsoon extends React.Component{
	constructor(){
		super();
		this.state={
			datalist:[]
		}
	}


	componentDidMount() {
	    this.props.getComingsoon();
	}

	render(){
		return <div id="comingsoon">
			{
				/*遍历数组 onClick={this.handleClick.bind(this,item.id)}点击进行跳转
				  bind第一个参数是绑定对象 第二个参数构成绑定函数的参数
				*/
			}
			<ul>
				{
					this.props.datalist.map(item=>
						<li key={item.id} onClick={this.handleClick.bind(this,item.id)}>
							<img src={item.poster.origin}/>
							<div>
								<h3>{item.name}</h3>
								<p>{item.intro}</p>
							</div>
						</li>
					)
				}
			</ul>
		</div>
	}

	handleClick(id){
		//编程式导航 跳转到detail组件 连同每个详情页的id
		this.props.history.push(`/detail/${id}`);
	}
}

export default connect(
	(state)=>{
		console.log(state.list);
		return {
			datalist:state.list
		}
	},
	{
		getComingsoon:()=>{
			//异步action 借助 redux-promise 中间件实现 
			return (dispatch)=>{
				axios.get("/v4/api/film/coming-soon?__t=1511419368580&page=1&count=7").then(res=>{
					    	console.log(res.data);
					    	// 此时就异步拿到了数据
					    	dispatch ({
					    		type:"comingsoonlist",
					    		payload:res.data.data.films
					    	})
					})
			}
		}
	}
	)(Comingsoon);