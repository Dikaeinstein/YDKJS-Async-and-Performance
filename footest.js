var foo = function ( msg, cb ) {
    setTimeout(function () {
        cb(undefined, msg);
    }, 1000);
};


// making foo promise aware
var fooPr = promisify.wrap(foo);
fooPr("hello, world!").then(
    ( val ) => document.writeln(val),
    ( err ) => document.writeln(err) 
);
