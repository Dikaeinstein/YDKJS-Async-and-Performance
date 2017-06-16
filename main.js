try {
    require(["/storage/sdcard1/YDKJS/ES6 and Beyond/weekDay"], function ( weekDay ) {
        document.writeln( weekDay.name(weekDay.number("Saturday")));
    }); 
} 
catch ( e ) { 
    document.writeln(e);
}