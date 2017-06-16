let output = ( msg ) => {
    document.writeln(msg);    
}

ASQ( 21 )
.pThen( function(msg){
	return msg * 2;
} )
.pThen( output )				// 42
.pThen( function(){
	// throw an exception
	doesnt.Exist();
} )
.pCatch( function(err){
	// caught the exception (rejection)
	document.writeln( err );			// ReferenceError
} )
.val( function(msg){
	// main sequence is back in a
	// success state because previous
	// exception was caught by
	// `pCatch(..)`
	 document.writeln(msg);
} );