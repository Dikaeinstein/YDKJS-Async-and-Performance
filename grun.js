function run(gen, ...args) {
	let args, it;

	// initialize the generator in the current context
	it = gen(...args);

	// return a promise for the generator completing
	return Promise.resolve()
		.then( function handleNext(value){
			// run to the next yielded value
			var next = it.next( value );

			return (function handleResult(next){
				// generator has completed running?
				if ( next.done ) {
					return next.value;
				}
				
				// otherwise test for thunk
				else if ( typeof next.value === "function" ) {
				  return new Promise(function (resolve, reject) {
				    // thunk call / execution
				    next.value(function (err, msg)  {  // error-first callback 
				      if ( err ) {
				        reject(err);
				      } 
				      else {
				        resolve(msg);
				      }
				    }); // end thunk call
				  })
				  .then(
				  // resume the async loop on
					 // success, sending the resolved
					 // value back into the generator
				  handleNext, 
				  
				  // if `value` is a rejected
						// promise, propagate error back
						// into the generator for its own
						// error handling
				  function handleErr ( err ) {
				    return Promise.resolve(it.throw(err))
				    .then(handleResult);
				  } // end error handling
				  ); // end then() chain call
				} // end else if / thunk block
				
				// otherwise keep going
				else {
					return Promise.resolve( next.value )
						.then(
							// resume the async loop on
							// success, sending the resolved
							// value back into the generator
							handleNext,

							// if `value` is a rejected
							// promise, propagate error back
							// into the generator for its own
							// error handling
							function handleErr(err) {
								return Promise.resolve(
									it.throw( err )
								)
								.then( handleResult );
							} // end error handling 
						); // end then() chain call
				} // end else block
			})(next);
		} );
}