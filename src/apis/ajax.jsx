/*
* 能够发送异步ajax请求的函数模块
* 封装fetch
* 函数的返回值位Promise的对象
* 1.优化：统一处理请求异常
*   在请求出现错误的时候不需要调用reject的方法，改为显示异常消息
* 2.优化2：异步得到的部位response而是直接返回response.data
*
* fetch使用方法以及跨域问题的解决可以参考一下网址的文档
*   fetch常见问题的解决方案:https://www.cnblogs.com/wonyun/p/fetch_polyfill_timeout_jsonp_cookie_progress.html
*   fetch的使用方法:https://github.github.io/fetch/
*
*
* */
import {message} from "antd";
//跨域请求的的ip地址和端口号
export default function ajax (url,method="GET",data={}) {
    console.log("在请求时发送的数据---->"+JSON.stringify(data));
     return new Promise(((resolve, reject) => {
         let promise;
         if(method === "GET"){
             /*传递的参数如果不为空，则进行参数拼装到对应的url上进行封装，封装完成后进行发动处理*/
             //GET请求封装对应的参数
             if(data){
                 let paramsArray = [];
                 //拼接参数
                 Object.keys(data).forEach(key => paramsArray.push(key + '=' + data[key]));
                 if (url.search(/\?/) === -1) {
                     url += '?' + paramsArray.join('&')
                 } else {
                     url += '&' + paramsArray.join('&')
                 }
             }
             //返送GET请求
             promise = fetch(url,{method:"GET",headers: {
                     'Content-Type': 'application/json'
                 },mode: 'cors'});
         }else{
             /*发送post的请求，头部为请求方式为json的数据,mode:调整为可以进行跨域请求,本项目中设置的为前端后端分离的项目
             * 所以此处需要设置允许跨域请求
             * */
             promise = fetch(url,{method:'POST',headers: {
                     'Content-Type': 'application/json'
                 },mode: 'cors', body: JSON.stringify(data)})
         }
         //请求发送成功时触发的方法
         promise.then(
             response =>{
                 return response.json();
             }).then(
                data =>{
                 resolve(data)
             }
             //跨域请求发送失败
         ).catch(
             error =>{
                 message.error("请求发生错误,请联系系统管理员")
             }
         )

     }))
}