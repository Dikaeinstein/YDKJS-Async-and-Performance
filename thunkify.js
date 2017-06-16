var thunkify = function ( fn ) {
    return function (...args) {
       // let args = Array.prototype.slice.call(arguments); 
        return function ( cb ) {
            args.push(cb);
            return fn(...args);
        };
    };
};

var fooThunkory = thunkify(foo);
// document.writeln(typeof fooThunkory);