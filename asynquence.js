require(["/storage/sdcard1/asynquence-master/asq.src.js"], function (ASQ) {

var output = function (msg) {
    document.writeln(msg);
};

var sq = ASQ(
function (done) {
  setTimeout(function () {
    done("Hello");
  }, 1000);
}, 
function (done, greeting) {
  setTimeout(function () {
    done(greeting + " World");
  }, 1000);
}).then(
function (done, msg) {
  setTimeout(function () {
    done(msg.toUpperCase());
  }, 1000);
}).val(output); 
});

/*
function fn1(done) { alert("Step 1"); setTimeout(done,1000); }

function fn2(done) { alert("Step 2"); setTimeout(done,1000); }

function yay() { alert("Done!"); } */

// Execute fn1, then fn2, then finally yay:

// var sq1 = ASQ(fn1).then(fn2).then(yay);
/*
var sq = ASQ( function(done){ setTimeout( function(){ 
    // signal an error for the sequence
    done.fail( "Oops" ); 
    }, 1000 ); 
} ).then( function(done){ 
// will never get here 
} ).or( function(err){ 
    document.writeln( err ); // Oops 
    } ).then( function(done){ // won't get here either 
    } );

// later
sq.or( function(err){ 
    document.writeln( err ); // Oops 
    document.writeln(JSON.stringify(sq));
} );*/


/*var sq = sq1.fork();
sq.val(output);
sq1.val(output);*/

/*ASQ().then(function(done) {
    sq1.pipe(done);
}).val(output).or(output);*/
/*
var sq1 = ASQ.after( 100, "Hello", "World" ); 
var sq2 = ASQ.failAfter( 100, "Oops" );

sq1.val( function(msg1,msg2) { 
    document.writeln( msg1, msg2 ); // Hello World 
} );

sq2.or( function(err) { 
    document.writeln( err ); // Oops 
} );


ASQ( 42 ).after( 100 ).val( function(msg) { 
    document.writeln( msg ); // 42 
} );*/
