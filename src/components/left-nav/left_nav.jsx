import React,{Component} from 'react'
import { Menu } from 'antd';
import {Link,withRouter} from "react-router-dom";
import {
    PieChartOutlined,
    MailOutlined,
} from '@ant-design/icons';

import './left_nav.css'
import menuList from "../../config/menuConfig";

const { SubMenu } = Menu;

 class LeftNav extends Component {
    /**
     * 左侧菜单循环展示
     * 使用递归的方法
     */
    getMenuNodes =(menuLists) =>{
        //获取当前路由
        const path = this.props.location.pathname;
        return menuLists.map((item,index) =>{
            if(item.children){
                //判断当前具有子节点的是否需要展开操作
                if(item.children.find(cItem => path.indexOf(cItem.key) === 0)){
                    this.openKey = item.key;
                }
                return (
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                <MailOutlined />
                <span>{item.title}</span>
              </span>
                        }
                    >
                        {
                            this.getMenuNodes(item.children)
                        }
                    </SubMenu>
                )
            }else{

                return(
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <PieChartOutlined />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            }

        })
    }

    /**
     * 在组件即将渲染前对需要的变量进行赋值操作
     */
    UNSAFE_componentWillMount() {
        this.getNode = this.getMenuNodes(menuList);
    }

    render() {
        //获取当前的路由地址，确定当前那个菜单为被选中的状态
        const selectKey = this.props.location.pathname;
        console.log('render()',selectKey)
        return (
            <div className="left-nav">
                    <Menu
                        selectedKeys = {[selectKey]}
                        defaultOpenKeys={[this.openKey]}
                        mode="inline"
                        theme="dark"
                    >
                       {
                           this.getNode
                       }
                    </Menu>
            </div>
        )
    }
}
//使用路由的高阶函数将组件包装成一个路由
export default withRouter(LeftNav);