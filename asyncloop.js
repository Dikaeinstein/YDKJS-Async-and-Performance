for ( var i = 0; i < 6; i++ ) {
    (function (i) {
        setTimeout(function () {
            document.writeln(i);
        }, 100);
    })(i);
}

