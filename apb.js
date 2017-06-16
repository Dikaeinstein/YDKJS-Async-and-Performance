// trivial iterable sq being extended
// due to lazy evaluation
function double( x ) { 
    x *= 2;
    // should we keep extending?
    if ( x < 500 ) {
        isq.then( double );
    }
    return x;
}

var isq = ASQ.iterable().then(double);

for ( let v = 10, ret = isq.next(v); !ret.done; ret = isq.next(v) ) {
    v = ret.value;
    document.writeln(v);
}
/*
// similar implementation using while loop
function *dble( x ) { 
    let y;
    // should we keep extending?
    while ( x < 500 ) {      
        y = yield (x *= 2);
        document.writeln(y);
    }
}

run(dble, 10);
var it = dble(10);
document.writeln(it.next().value);
document.writeln(it.next().value);*/
