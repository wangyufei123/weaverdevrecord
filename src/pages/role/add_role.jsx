import React from "react";
import {
    Form,
    Input,
    Tooltip,

} from 'antd';

const formItemLayout = {
    labelCol: {
        sm: { span: 5 },
    },
    wrapperCol: {
        sm: { span: 15 },
    },
};


export default class AddRole extends React.Component{
    formRef = React.createRef();
    componentWillMount() {

        const {setForm} = this.props;
       // console.log("...form",this.formRef.current.resetFields())
       setForm(this.formRef)
    }

    render() {
            console.log('render()',this.formRef)
        return (
            <Form ref={this.formRef}>
                <Form.Item
                    {...formItemLayout}
                    name="roleName"
                    label={
                        <span>角色名称&nbsp;</span>
                    }
                    rules={[{ required: true, message: '请输入角色名称', whitespace: true }]}
                >
                    <Input />
                </Form.Item>
            </Form>
        )
    }

}