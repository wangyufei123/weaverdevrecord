### 1.脚手架安装
使用idea自带的功能安装   
file---new ---project ---static web ---react   
### 2.安装mobx和mobx-react
npm install --save mobx mobx-react   
### 3.支持修饰器配置
原因：如果不安装修饰器解释器，此时是不能解析@observer,@observable,@action等修饰器。若不适用修饰器，可以不   
进行此步骤的配置
#### 1.安装支持修饰器的babel插件
npm install --save @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties
#### 2.释放环境中的config配置文件
使用 npm run eject释放项目中的config配置文件，如果释放出现错误，请使用如下命令解决，然后在进行释放   
1.git add . 将项目添加到git的暂存区   
2.git commit -m "可以随便填写的参数" 将项目从暂存区中进行提交   
3.npm run eject  进行项目文件的释放，执行成功后会出现config文件夹,package.json文件中会出现N多配置   
#### 3.修改package.json配置文件
##### 1.修改esline的配置文件   
修改前   
```
"eslintConfig": {
    "extends": "react-app"
  },
```
修改后
```
"eslintConfig": {
    "extends": "react-app",
    "parserOptions": {
      "ecmaFeatures": {
        "legacyDecorators": true
      }
    }
  },
```
##### 2.修改babel配置文件
修改前:   
```
"babel": {
    "presets": [
      "react-app"
    ]
  }
```
修改后
```
"babel": {
    "plugins": [
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ],
      [
        "@babel/plugin-proposal-class-properties",
        {
          "loose": true
        }
      ]
    ],
    "presets": [
      "react-app"
    ]
  }
```
**注意：配置babel的时候@babel/plugin-proposal-decorators必须放在@babel/plugin-proposal-class-properties
,这个我也不知道为啥，文档上就这么说的.......**   
### 4.props校验的包
说明:此组件为对组件间传递props参数进行限制,使用mobx应该不需要此插件,本demo中进行安装   
安装命令:npm install --save prop-types
### 5.安装路由组件
安装命令:npm install --save react-router-dom
### 6.antd组件安装
安装命令:npm install --save antd
### 7.实现antd组件按需加载的插件安装
安装插件命令:npm install babel-plugin-import --save-dev  
集成babel插件的配置:    
修改package.json的配置文件
```
"babel": {
    "plugins": [
      ["import", {
        "libraryName": "antd",
        "libraryDirectory": "es",
        "style": "css"
      }
      ],
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ],
      [
        "@babel/plugin-proposal-class-properties",
        {
          "loose": true
        }
      ]
    ],
    "presets": [
      "react-app"
    ]
  },
```
### 8.安装axios
安装命令:yarn add axios
### 9.安装mobx-react-tools调试工具
安装命令:npm install --save-dev mobx-react-devtools   
使用方式:在根组件中添加DevTools组件,不知道为啥引入此调试的组件后会报错，不能正常的执行   
```
import  DevTools from 'mobx-react-devtools' 
import {render} from "react-dom";

//.....

render(){
return(
    <div>
    ...
    <DevTools/>
</div>
)
}
```
### 8.项目结构说明
```
apis:后端请求方法,封装对应的fetch功能
components:封装普通组件
pages:封装路由组件
utils:封装工具类
..........更多文件夹稍后在添加
```
### 9.create-react-app 2.0脚手架设置反向代理
1.下载对应的代理工具   
  npm install http-proxy-middleware --save
2.在src的路径下创建setupProxy.js文件
```js
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(createProxyMiddleware('/api',{
        target:'http://localhost:8888/',
        secure:false,
        changeOrigin:true,
        pathRewrite:{
            "^/api":""
        }
    }))
}
```