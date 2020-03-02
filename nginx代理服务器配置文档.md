### 1.参考文档
```
https://www.cnblogs.com/cailijuan/p/11364939.html
中文文档:https://www.nginx.cn/doc/
```
### 2.项目中写好请求与页面
```js
export const reqLogin =  ({username,password}) => ajax("/api/hello","POST",{username,password});
/**
    说明:/api/为了配置nigx配置来添加的
        /hello:为后台请求端口
*/
```
### 3.修改nignx项目的配置文件
修改nginx -> conf目录下配置文件nginx.conf   
在http里面添加一个server对象   
```
server {
        listen       8088; //监听的端口
        server_name  localhost; //访问的名字
		root E:/items/react/rec-webp4/dist;//项目所放的地址
        index index.html;//入口html文件
        location / {
        try_files $uri $uri/ @router;
        index index.html;
        }
        location @router {
        rewrite ^.*$ /index.html last;
        }
 
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
```
### 4.nignx配置文件中设置代理
匹配 api 路由的反向代理到API服务   
这样请求方式就会由http://localhost:3000/api/hello   
改为 http://localhost:8888/hello
```
location /api/ {
     proxy_pass "http://localhost:8888/";
}
```
### 5.nginx常用命令
```
nginx开启命令：start nginx
nginx停止命令：nginx -s quit
nginx重启命令：nginx -s reload
```