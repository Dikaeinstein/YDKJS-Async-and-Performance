function *genthunk () {
  try {  
    let data = yield fooThunkory(3,4);
    document.writeln(data);
  } 
  catch ( e ) {
    document.writeln(e);
  }
}

run(genthunk);
//.then((val)=>document.writeln(val), (err)=>document writeln(err));