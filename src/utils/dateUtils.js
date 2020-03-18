/**
 * 日期格式化工具类
 */

export default function formateDate(time) {
    if(!time){
        return '';
    }
    let date = new Date(time);
   const seconds = date.getSeconds().toString().length == 1 ? `0${date.getSeconds()}` :date.getSeconds();
    return  date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
        + ' ' + date.getHours() + ':' + date.getMinutes()
        + ':' + seconds;

}