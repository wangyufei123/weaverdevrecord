import React,{Component} from 'react'
import {Layout} from "antd";
import memoryUtils from "../../utils/memoryUtils";
import {Redirect,Switch,Route} from 'react-router-dom'
import Header from "../../components/header/header";
import LeftNav from "../../components/left-nav/left_nav";
import Home from "../home/home";
import Role from "../role/role";
import User from "../user/user";
const {  Footer, Sider, Content } = Layout;

export default class Admin extends Component {

    render() {
        const user = memoryUtils.user;

        //判断当前内存中的用户是否为空，如果为空,则将路由跳转到登录界面
        if(!user){
            return <Redirect to='/login'/>
        }
        return (
            <Layout style={{minHeight: '100%'}}>
                <Sider>
                    <LeftNav/>
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content style={{margin: 20, backgroundColor: '#fff'}}>
                        <Switch>
                            <Route path='/home' component={Home}/>
                            <Route path='/role' component={Role}/>
                            <Route path='/user' component={User}/>
                            <Redirect from='/' exact to='/home'/>
                        </Switch>

                    </Content>
                    <Footer style={{textAlign: 'center', color: '#cccccc'}}>
                        推荐使用谷歌浏览器，可以获得更佳页面操作体验
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}