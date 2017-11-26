// 在store里建立联系 监听
// import {createStore} from "redux";

// import reducer from "../Reducer";
// const store = createStore(reducer);


// export default store;

// import {createStore} from "redux";
// // thunK是redux异步的中间键 处理异步action
// import thunk from 'redux-thunk';
// import {applyMiddleware} from "redux";

// import reducer from "../Reducer";
// // 使用thunk
// const store = createStore(reducer,applyMiddleware(thunk));

// export default store;
import {createStore,combineReducers} from "redux";
import thunk from 'redux-thunk'; //处理异步action 
// import reduxpromsie from "redux-promise";
import {applyMiddleware} from "redux";

import {reducer,comingsoonreducer} from "../Reducer";


// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//     }) : compose;

// const enhancer = composeEnhancers(
//   applyMiddleware(thunk,reduxpromsie),
//   // other store enhancers if any
// ); //开发阶段 调试redux 工具要加的话



const store = createStore(combineReducers({
	title:reducer,
	list:comingsoonreducer
}),applyMiddleware(thunk));


export default store;
//combineReducers:把多个reducer ,合并成一个大的 Reducer 