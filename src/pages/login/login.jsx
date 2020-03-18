import React,{Component} from 'react'
import { Form, Input, Button,message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.css'
import {reqLogin} from "../../apis";
import memoryUtils from "../../utils/memoryUtils";
import {Redirect} from "react-router-dom";
import storageUtils from "../../utils/storageUtils";


export default class Login extends Component {

    onFinish = async values => {
        console.log('Received values of form: ', values);
        const result = await reqLogin(values);
        console.log("result",result);
        if(result.code === "0"){
            //登录成功后的操作
            message.success("登录成功");
            //将用户信息存放到内存中
            const user = result.data;
            storageUtils.saveUser(user);
            memoryUtils.user = user;
            //跳转到登录后的首页中
            const {history} = this.props;
            history.replace("/");
        }else{
            //登录失败后
            message.error(result.msg)
        }

    };
    render() {
        const user = memoryUtils.user;
        console.log("user",user);
        //if(user && user.id){
        //此项目作为前后端分离的项目，后端没有进行开发，此时先这么写着。待后端项目的登录功能开发完成后
        //此处在进行修改
        /*if(user){
            return <Redirect to='/'/>
        }*/
        return (
            <div className='login'>
                <header className='login-header'>
                    <h1>React 项目: 泛微开发记录单</h1>
                </header>
                <div className='login-content'>
                    <h3>用户登陆</h3>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="loginId"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>

            </div>
        )
    }
}