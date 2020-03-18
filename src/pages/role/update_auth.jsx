import React,{ useState } from "react";
import {
    Form,
    Input,
    Tree,

} from 'antd';

import menuList from "../../config/menuConfig";

const formItemLayout = {
    labelCol: {
        sm: { span: 5 },
    },
    wrapperCol: {
        sm: { span: 15 },
    },
};
const { TreeNode } = Tree;

const treeData = [
    {
        title: '平台权限',
        key: 'all',
        children:menuList
    }
];

const test = '测试1';
export default class UpdateAuth extends React.Component{
    state = {
        checkedKeys :['/home','/user','/role'],
    }
    onSelect = (selectKeys,info) =>{
        console.log('onSelect',selectKeys,info);
    }
    onCheck = checkedKeys => {
        console.log('onCheck', checkedKeys);
        this.setState({checkedKeys}
        )
        //setCheckedKeys(checkedKeys);
    };

    getSelectMenu=()=>{
        return this.state.checkedKeys
    }

    render() {
        const {checkedKeys} = this.state;
        //const [selectedKeys,] = useState(selectedKey);

        return (
            <div>
                <Form>
                <Form.Item
                    {...formItemLayout}
                    name="roleName"
                    label={
                        <span>角色名称&nbsp;</span>
                    }>
                    <Input />
                </Form.Item>
                </Form>
                <Tree
                    checkable ={true}
                    defaultExpandAll = {true}
                    onSelect = {this.onSelect}
                    onCheck = {this.onCheck}
                    checkedKeys={checkedKeys}
                    treeData={treeData}
                />
            </div>
        )
    }
}