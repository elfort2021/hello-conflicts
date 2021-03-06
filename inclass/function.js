const a = function() { // creates const a, sets it as undefined and into memory 
  let inside = "function scope";
}

let outside = "global scope"; // creates const, memory and sets to undefined 
a();

//in the global, we have a & outside (step 1)
// step 2: execution, and only the assignment '=' making a a function, then find outside and make it "global scope" 
// invokes a (function) 1) creation, 2) exection 

// Creation Phase: global object (window in browser), this keyword, and outer environment (doesnt mean anything rn) 