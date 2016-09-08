exports.largestPrimeFactor = function(n){

  // do your work here
  var divsor = 2;
  
  while (n%divsor !== 0) {
  	divsor++;
    while (n%divsor === 0 && divsor < (n/2)) {
  	  n /= divsor;
  	}
  };

  return n;
};