var channelify = function (fn) {
    return function () {
        let args = Array.prototype.slice.call(arguments); 
        let ch = ASQ.csp.channel();
        fn.apply(null, args).then(function (content) {
            ASQ.csp.putAsync(ch, content);
        });
        return ch; 
    };
};