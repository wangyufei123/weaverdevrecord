import React,{Component} from 'react'
import {Button} from 'antd'
import {withRouter} from 'react-router-dom'

import './header.css'
import formateDate from "../../utils/dateUtils";
import menuList from "../../config/menuConfig";

class Header extends Component {

    state = {
        sysTime: formateDate(Date.now()),
        dayPictureUrl: '', // 天气图片的url
        weather: ''
    }
    /**
     * 获取当前系统的具体时间
     * 使用定时器，每秒更新一个时间，并且改变systime的状态
     */
    getSysTime = ()=>{
        this.intervalId = setInterval(()=>{
            this.setState({
                sysTime: formateDate(Date.now()),
            })
        },1000)
    }

    /**
     * 跳转登出按钮
     */
    logout = () =>{
        alert("点击退出按钮成功")
    }
    /**
     * 根据对应的路由路径查找菜单的名称
     * @param pathname
     */
    getTitle = (pathname) =>{
        let title;
        menuList.forEach(
            menu =>{
                if(menu.key === pathname){
                    title = menu.title;
                }else if(menu.children){
                    menu.children.forEach(
                        item =>{
                            if(pathname.indexOf(item.key) === 0){
                                title = item.title
                            }
                        }
                    )
                }
            }
        )
        return title;
    }

    /**
     * 组件加载完成以后调用时间更新的定时器热舞
     */
    componentDidMount() {
        this.getSysTime();
    }

    /**
     * 组件即将卸载的时候,调用定时任务清理器
     */
    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    render() {
        const {pathname} = this.props.location;
        const title = this.getTitle(pathname);
        return (
            <div className='header'>
                <div className="header-top">
                    <span>欢迎, admin</span>
                    <Button type="link" onClick={this.logout}>退出</Button>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">{title}</div>
                    <div className="header-bottom-right">
                        <span>{this.state.sysTime}</span>
                        <img src='https://www.biaobaiju.com/hongnvhaizi/30075.html' alt="weather"/>
                        <span>天气情况</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Header);