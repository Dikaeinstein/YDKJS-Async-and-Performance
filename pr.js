
var prSeq = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("hello");
        }, 1000);
    }); 
};
   

prSeq().then(function (greeting) {
    return greeting + " world";
}).then(function (msg) {
    return msg.toUpperCase(); 
}).then(function (msg) {
    document.writeln(msg);
});