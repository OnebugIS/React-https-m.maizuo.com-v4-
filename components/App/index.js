import React from "react";
import "./index.scss";

// App里引入Common里的组件
import Navbar from "../Common/Navbar";
import Sidebar from "../Common/Sidebar";

class App extends React.Component{
	constructor(){
		super();
		this.state={
			show:false
		}
	}

	render(){
		return <div>
			{/*渲染Navbar组件*/}
			<Navbar event={()=>{
				//console.log("11111");
				//更改state的状态
				this.setState({
					show:!this.state.show
				})
			}}>
			</Navbar>
			<Sidebar isshow ={this.state.show} event={()=>{
				//console.log("11111");
				//默认为false隐藏
				this.setState({
					show:false
				})
			}}>
			</Sidebar>
			{
				//下面就是子组件加载的位置，
			}

			<section>
			{
				this.props.children
			}
			</section>
		</div>
	}
}

export default App;