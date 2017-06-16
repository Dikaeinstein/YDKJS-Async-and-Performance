var getX = function ( done ) {
    setTimeout(function () {
        done(10);
    }, 1000);
};

var getY = function ( done ) {
    setTimeout(function () {
        done(15);
    }, 1000);
};

var getZ = function ( done ) {
    setTimeout(function () {
        done(25);
    }, 1000);
};

ASQ().first(getY, getX, getZ).val(function (msg0) {
    document.writeln(msg0);
});