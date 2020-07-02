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


window.addEventListener('unhandledrejection', function (errorEvent) {
    console.log('unhandledrejectionmessage', errorEvent.reason); // 错误信息
});

//  addEventListener  ie8以下不支持, 使用onerror事件
// window.onerror = function(message, source, lineno, colno, error) {  }