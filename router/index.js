import React from "react"
import {
	// HashRouter ==vue hash #/home
	// BrowserRouter ==vue history /home
	// 
	// Router包围所有组件
	// Route包围每一个组件
	HashRouter as Router,
	Route,
	// 重定向
	Redirect,
	Switch
} from 'react-router-dom'
import App from "../components/App";
import Home from "../components/Home";
import Card from "../components/Card";
import Film from "../components/Film";
// 引入film的子组件
import Nowplaying from "../components/Film/Nowplaying";
import Comingsoon from "../components/Film/Comingsoon";
// 引入详情页
import Detail from "../components/Detail";
//4. 引入Provider
import {Provider}  from "react-redux";
import store  from "../Redux/Store";
//配置
const router = (
	<Provider store={store}>
	<Router>
		{/*Router只能包围一个组件 解决方案就是建个App组件包围所有组件*/}		
		<App>
			 <Switch>
			 	{
			 		//switch配合redirect重定向使用（重定向会使路径都回到重定向页面 
			 		//switch只加载匹配路径的第一个孩子就可以使得路径有目的的跳转）
			 	}
				<Route path="/home" component={Home}/>
				<Route path="/card" component={Card}/>
				<Route path="/film" render={()=>
					
					<Film>
						<Switch>
							<Route path="/film/nowplaying" component={Nowplaying}/>
							<Route path="/film/comingsoon" component={Comingsoon}/>
							
							<Redirect from="/film" to="/film/nowplaying"/>
						</Switch>
					</Film>
				}/>
				{/*跳转详情页  /:chenzhenid占位符 必须要带上*/}
				<Route path="/detail/:chenzhenid" component= {Detail}/>
				{/*重定向*/}
				<Redirect from="*" to="/home"/>
			</Switch>
		</App>
	</Router>
	</Provider>
)


export default router;