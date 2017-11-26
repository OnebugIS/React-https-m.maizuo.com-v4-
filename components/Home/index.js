import React from "react";
import "./index.scss";

// 引入axios进行轮播图的数据请求
import axios from "axios";
// 引入react-swipe
import ReactSwipe from 'react-swipe';
class Home extends React.Component{
	constructor(){
		super();
		this.state={
			looplist:[],
			nowlist:[]
		}
	}

	componentWillMount() {
	    axios.get("/v4/api/billboard/home").then(res=>{
	    	console.log(res.data);
	    	{/**/}
	    	this.setState({
	    		looplist:res.data.data.billboards
	    	})
	    })

	    axios.get("/v4/api/film/now-playing?__t=1511356868700&page=1&count=5").then(res=>{
	    	console.log(res.data.data.films);
	    	{/**/}
	    	this.setState({
	    		nowlist:res.data.data.films
	    	})
	    })
	}

	render(){
		return(
			<div>
				{/*continuous是否轮播 加key值是因为利用diff算法进行判断 如果图片的数量改变就进行一次diff*/}
				 <ReactSwipe className="carousel" swipeOptions={{continuous: true,auto: 2000}} key={this.state.looplist.length}>
	                {
	                	this.state.looplist.map(item=>
	                		<img src={item.imageUrl} key={item.id}/>
	                	)
	                }
	            </ReactSwipe>

	            {
	            	this.state.nowlist?
	            	<div>
	            		{this.state.nowlist.map(item=>
	            			<li key={item.id}>
	            				<img src={item.cover.origin}/>
	            				<p>{item.name}</p>
            				</li>
	            		)}
	            	</div>:null
	            	
	            }
	            
			</div>
			)
	}
}

export default Home;