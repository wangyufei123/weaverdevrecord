import React from "react";

import {Card,Button,Table,Modal} from "antd";

import AddRole from "./add_role";
import UpdateAuth from "./update_auth";

const columns = [
    {
        title: '角色名称',
        dataIndex: 'name',
        width: '20%',
    },
    {
        title: '创建时间',
        dataIndex: 'create_time',
        width: '30%',
    },
    {
        title: '授权时间',
        dataIndex: 'auth_time',
        width: '30%',
    },
    {
        title: '授权人',
        dataIndex: 'auth_name',
        width: '20%',
    }
]
const data = [
    {
        key: '1',
        name: '测试1',
        create_time: '2010-01-01',
        auth_time: '2010-01-01',
        auth_name: 'admin',
    },
    {
        key: '2',
        name: '测试1',
        create_time: '2010-01-01',
        auth_time: '2010-01-01',
        auth_name: 'admin',
    },
    {
        key: '3',
        name: '测试1',
        create_time: '2010-01-01',
        auth_time: '2010-01-01',
        auth_name: 'admin',
    },
    {
        key: '4',
        name: '测试1',
        create_time: '2010-01-01',
        auth_time: '2010-01-01',
        auth_name: 'admin',
    },
];

export default class Role extends React.Component{
    state = {
        role:{},
        roleModal:false,
        isShowAuth:false
    }
    authRef = React.createRef();
    onRow = (role) =>{
        return {
            onClick: event => {
                this.setState({
                    role
                })
            }, // 点击行
        }
    }
    /**
     * 点击确认按钮，添加对应的角色
     */
    addRole =() =>{
        const value = this.form.current.getFieldsValue();
        console.log('value',value)
        this.setState({"roleModal":false})
    }
    updateAuth =() =>{
        this.setState({"isShowAuth":false})
        const data = this.authRef.current.getSelectMenu();
        console.log('data',data)
    }

    render() {
        const {role,roleModal} = this.state;
        const title = (
            <span>
                <Button type='primary' onClick={()=>{this.setState({"roleModal":true})}}>创建角色</Button> &nbsp;&nbsp;
                <Button type='primary'disabled ={!role.key} onClick={() =>{
                    this.setState({"isShowAuth":true})
                }}>设置角色权限</Button>
            </span>

        )
        return (
            <Card title={title}>
                <Table
                    columns ={columns}
                    dataSource={data}
                    rowSelection ={{
                        type:'radio',
                        selectedRowKeys:[role.key],
                    }}
                    onRow = {this.onRow}
                />
                <Modal
                    title="添加角色"
                    visible={roleModal}
                    onOk={this.addRole}
                    onCancel={() =>{this.setState({"roleModal":false})}}
                    okText="确认"
                    cancelText="取消"
                >
                    <AddRole setForm={(form) => this.form = form}/>
                </Modal>
                <Modal
                    title="设置角色权限"
                    visible={this.state.isShowAuth}
                    onOk={this.updateAuth}
                    onCancel={() =>{this.setState({"isShowAuth":false})}}
                    okText="确认"
                    cancelText="取消"
                >
                    <UpdateAuth ref={this.authRef}/>
                </Modal>
            </Card>
        )
    }

}