import React from "react";
import "./index.scss";
// 1.(1)
import { connect } from "react-redux";
class Detail extends React.Component{
	constructor(){
		super();
		this.state={
			filminfo:null
		}
	}

	componentWillMount() {
		// 在React插件 state->params->chenzhenid 有id值
	    console.log(this.props.match.params.chenzhenid);
	    // 每次请求不同的id
	    axios.get(`/v4/api/film/${this.props.match.params.chenzhenid}?`).then(res=>{
	    	console.log(res.data);
	    	this.setState({
	    		filminfo:res.data.data.film
	    	})
	    	// 1.（3）
	    	this.props.changeTitle(res.data.data.film.name);
	    })
	}

	render(){
		return(
			<div>
				{
					this.state.filminfo?
					<div>
						<img src={this.state.filminfo.cover.origin}/>
						<h2>{this.state.filminfo.name}</h2>
						<p>{this.state.filminfo.synopsis}</p>
					</div>
					:null
				}
			</div>
			)
	}
}
// 1。(1)
export default connect(
		null,
		{
			changeTitle:(name)=>{
				//1.  自动进行dispatch 到 reducer
				return {
					type:"changeTitleReducer",
					payload:name
				}
			}
		}		
	)(Detail);