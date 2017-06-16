var step = function ( gen ) {
    var it = gen(),
        last;
    return function () {
        // whatever is yielded out
        // just send it right back in
        last = it.next(last).value;
        return last;
    };
};

function *gen () {
    let i = 0;
    while ( i < 20 ) {
        yield i++;
    }
}

//var it = gen();
//var it2 = gen();
//var run = step(gen);
//var run2 = step(gen);
/*
for ( let i = 0; i < 10; i++ ) {
    //document.writeln(it.next().value);
    //document.writeln(it2.next().value);
    document.writeln(run());
    document.writeln(run2());
}

//document.writeln(it.return("terminating *gen()").value);
// built-in array data structure as of // ES6 is an iterable i.e it contains iterator 
var arr = [1,2,3,4,5];
var it = arr[Symbol.iterator]();
document.writeln(it.next().value);

for (var v of gen()) {
    if ( v > 10 ) {break;}
    document.writeln(v);
}*/
run(gen);