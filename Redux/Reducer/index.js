// 2. 定义老的数据 retu新的数据
// default 没有状态值的时候是默认值 有值的时候会被覆盖
const reducer = (state="卖座电影",info)=>{
	// es6的结构赋值 payload是新数据
	// type是详情页return的type:"changeTitleReducer",
	let {type,payload}=info;
	switch (type) {
		case "changeTitleReducer":
			return payload;
		default:
			return state;
	}
	return state;
}


const comingsoonreducer = (state=[],info)=>{
	let {type,payload} =info;
	switch(type){
		case "comingsoonlist":

			return [...payload];
		default :
			return state; 
	}

}



export  {reducer,comingsoonreducer};


// reducer 的设计必须是一个纯函数
// 
// 只要每次给定相同的输入值，就一定会得到相同的输出值: 例如传入1与2，就一定会得到3
// 不会改变原始输入参数，或是外部的环境，所以没有副作用
// 不依頼其他外部的状态，变量或常量

