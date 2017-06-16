/*! promisify
    v0.0.1 (c) Solomon "Dikaeinstein" Okwa
    MIT License: http://dikaeinstein.mit-license.org
*/

(function UMD ( name, context, definition ) {
    // AMD module
    if ( typeof define === "function" && define.amd ) {
        define(definition);
    }
    // CommonJS module
    else if ( typeof module !== "undefined" && module.exports ) {
        module.exports = definition(); 
    }
    else {
        context[name] = definition();
    }
})("promisify", this, function () {
    let wrap = function ( fn ) {
        return function (...args) {
            return new Promise(function ( resolve, reject ) {
                args.push(function ( err, val ) {
                    if ( err ) {
                        reject(err);
                    }
                    else {
                        resolve(val);
                    }
                });
                fn(...args); // spread args
            });
        };              
    };
    
    return {
        wrap // concise property
    };
});

