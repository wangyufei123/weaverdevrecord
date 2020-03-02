import React,{Component} from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './login.css'
import {reqLogin} from "../../apis";

export default class Login extends Component {

    render() {
        return (
            <div className='login'>
                <header className='login-header'>
                    <h1>React 项目: 泛微开发记录单</h1>
                </header>
                <div className='login-content'>
                    <h3>用户登陆</h3>

                </div>

            </div>
        )
    }
}