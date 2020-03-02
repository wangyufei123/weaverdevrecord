import React,{Component} from 'react'
import logo from "../../logo.svg";
import {action, observable} from "mobx";
import {observer} from "mobx-react";
import {Button} from "antd";
@observer
export default class Admin extends Component {
    @observable count = 0;
    @action
    handlerBtnPress = () =>{
        this.count = this.count * 1 + 1;
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className={{display:"flex"}}>{this.count}
                    </div>

                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <Button type="primary" onClick={this.handlerBtnPress}>点击改变数字</Button>
                </header>
            </div>
        );
    }
}