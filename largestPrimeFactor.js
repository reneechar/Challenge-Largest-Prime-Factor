exports.largestPrimeFactor = function(n){
  
  /*divides the parameter n by 2 until n is no longer divisible by 2.
  *thus removing all even factors in n.
  */
  function removeEvenFactors() {
    while(n%2 === 0) {
      n /= 2;
    };
  }
  removeEvenFactors();

  //divisor starts at 3 since we have removed all even factors
  var divisor = 3;

  /*divideNew will divide n by the divisor if the divisor is a multiple and in range.
  *if n is not divisible by the divisor, it will increment the divisor to the next odd number above.
  */
  function divideNew() {
    if (n % divisor === 0 && divisor < (n/2)) {
      n /= divisor;
    } else {
      if (n % divisor !== 0) {
        divisor +=2;
      }
    }
  }

  //This while loop is to run divideNew until n is no longer divisible by any possible divisors.
  while(divisor<(n/2)){
    divideNew();
  }
  return n;
};
