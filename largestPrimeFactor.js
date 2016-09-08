exports.largestPrimeFactor = function(n){

  // do your work here
  var divsor = 2;
  
  do {
    while (n%divsor === 0 && divsor < (n/2)) {
  	  n /= divsor;
  	}
  	divsor++;
  } while (n%divsor !== 0);

  return n;
};