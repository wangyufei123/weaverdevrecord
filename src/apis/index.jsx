import ajax from "./ajax";
/*
* 在打包生产的时候需要在前边加上 /api/....
* */
//请求登陆API
export const reqLogin =  ({loginId,password}) => ajax("/api/login","POST",{password,loginId});
