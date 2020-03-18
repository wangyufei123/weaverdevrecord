import React from 'react';
import {BrowserRouter,Route,Switch,Redirect} from "react-router-dom";
/*import DevTools from "mobx-react-devtools";*/

import './App.css';
import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";
/*
* 此搭建的demo仅适用于自己练习使用,没有跟OA系统模块结合起来,OA的二次开发需要在Ecode的平台中进行
* 此demo仅适用于自己练习使用
*  此demo仅适用于自己练习使用
*  此demo仅适用于自己练习使用
* ==================================================================================================
* @observer:将当前的组件置为观察者
* @observable:将变量置为可观察变量
* @action:这里边写对可观察变量状态的修改，
*         建议将对状态的管理都写在这，以便后期对状态的方便管理
*         当系统开启严格模式的时候所有的状态的改变都需要写在@action的修饰器中
* @个人:在OA系统中所有状态的改变也都是写在@action的修饰器中的，不过我还没有测试系统是否开启了严格模式,即便没有
*       开启也需要将状态的改变写在@action的修饰器中
* */
export default class App extends React.Component{

    render() {
        return(
                <BrowserRouter>
                    <Switch>
                        <Route path='/login' component={Login}/>
                        <Route path='/' component={Admin}/>
                    </Switch>
                </BrowserRouter>
        )
    }
}


