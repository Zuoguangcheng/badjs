# badjs
以下均是在chrome最新版本可行，其他浏览器未测试过

1.运行时报错
window.addEventListener('error', function (errorEvent) {
    const {
        message,
        filename,
        lineno,
        colno,
        error
    } = errorEvent;

    console.log('message', message); // 错误信息
    console.log('filename', filename); // 发生错误的脚本url
    console.log('lineno', lineno); // 错误行
    console.log('colno', colno);//错误列
    console.log('error', error); // Error对象， 错误stack
});


2.ie8以下不支持eventListener
window.onerror();

3.跨域同步错误
  1）. crossorigin="anonymous"  Access-Control-Allow-Origin: *
  2）.跨域  crossorigin="use-credentials"  Access-Control-Allow-Origin: 具体域Access-Control-Allow-Credentials： true

  3）.
  ```
  try{
        test(); //跨域方法
    } catch(error) {
        console.log('error', error);
        throw(error);
    }
  ```
4.跨域异步函数使用trycatch包裹，catch中自行上报（可以使用打包工具自动添加try catch）

5.未捕获的promise reject （同域跨域均可）
window.addEventListener('unhandledrejection', function (errorEvent) {
    console.log('unhandledrejectionmessage', errorEvent.reason); // 错误信息
});

6.资源加载错误,和运行时错误方式一样，但是需要在回调中判断来源（link、script）
  performance.getEntries() 和onload 配合使用的方式有瑕疵（异步script不行）
window.addEventListener('error',function(){})