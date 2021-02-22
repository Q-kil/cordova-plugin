var exec = require('cordova/exec');

// export.showToast 的 showToast 为插件安装后js调用的方法名，其中传递的参数可以为任意多个（arg0，arg1， arg2.., success, error)
exports.showToast = function (arg0, success, error) {
    // success error 为成功 失败回调
    // ToastDemo 为 plugin.xml 中配置的 feature 的name名
    // 参数中的'showToast'为给 ToastDemo.java 判断的 action 参数
    exec(success, error, 'ToastDemo', 'showToast', [arg0]);
};
