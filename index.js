// 入口文件
// 可以将每个组将引入放入这个文件 但是不方便管理 我们将路由都放route/index.js 组件放components
import React,{Component} from "react";
import ReactDOM  from "react-dom";
import router from "./router";

ReactDOM.render(router,document.getElementById("box"));