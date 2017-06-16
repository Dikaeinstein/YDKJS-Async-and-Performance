var foo = function ( x, y, cb) {
    setTimeout(function () {
        cb(x + y);   
    }, 1000);
};

/*var fooThunk = function ( cb ) {
    return foo(3, 4, cb);
}; */

/*
document.writeln(fooThunk(function (null, function (val) {
    document.writeln(val);
    }
    )
  )
); */