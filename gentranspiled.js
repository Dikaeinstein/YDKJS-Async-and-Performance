var prom = function ( val ) {
    return new Promise(function ( resolve, reject ) {
        setTimeout(function () {
           let y =  val;
           resolve(y);
        }, 1000); 
    });       
};

/*
function *foo (msg) {
    try {
        document.writeln("waiting for msg");
        let val = yield prom(msg); // state 1
        document.writeln("msg: ", val); // state 2
    } catch ( e ) { // state 3
        document.writeln(e);
        return false;
    }
}
*/

// manual transpilation
var foo = function ( msg ) {
    // generator wide variable declaration
    let val, 
        // manage generator state 
        state, 
        // 
        process = function ( v ) {
            switch ( state ) {
                case 1: 
                    document.writeln("waiting for message");
                    return prom(msg);   
                case 2:
                    val = v;    
                        document.writeln("msg: ", val);
                    return;
                case 3: 
                    let err = v; 
                    document.writeln(err);
                    return false;
            }
        };
        
    return {
        next() {
            // initial state
			        if (!state) {
				           state = 1;
				           return { done: false, value: process()	};
			        }
			        // yield resumed successfully
			        else if (state == 1) {
				           state = 2;
				           return { done: true, value: process(v)	};
			        }
			        // generator already completed
			        else {
				           return { done: true, value: undefined	};
			        }
		    },
		    throw(e) {
			       // the only explicit error handling is in
			       // state *1*
			       if (state == 1) {
				          state = 3;
				          return { done: true, value: process(e) };
			       }
			       // otherwise, an error won't be handled,
			       // so just throw it right back out
		        	else {
				          throw e;
			       }
        }
    };
};