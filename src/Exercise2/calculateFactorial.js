// function calculateFactorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     var factorial = 1;
//     for (var i = 2; i <= n; i++) {
//       factorial *= i;
//     }
//     return factorial;
//   }
// }


function calculateFactorial(n) {
  
  if (n < 0) {
    return NaN; 
  }

  if (n === 0) {
    return 1;
  }

  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}