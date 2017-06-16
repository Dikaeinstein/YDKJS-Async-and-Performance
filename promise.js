
var addPromise = ( getX, getY ) => Promise.all([getX(), getY()]);

var proX = function () {
    return new Promise(function ( resolve, reject ) {
        setTimeout(function () {
           let x = 10;
           resolve(x);
        }, 1000);    
    });       
};

var proY = function () {
    return new Promise(function ( resolve, reject ) {
        setTimeout(function () {
           let y = 15;
           resolve(y);
        }, 1000); 
    });       
};

addPromise(proX, proY).then(
function fufill ( values ) {
    var x = values[0],
        y = values[1];
    document.writeln(x + y);
}, 
function reject ( err ) {
    document.writeln(err);
});

