const principal = 500000;
const rate = 3 / 100 / 12;
const numPayments = 30 * 12;

// Number, Number, Number -> Number
// Takes in the Principal, per month rate, and total number of payments over
// the life of the loan and returns the monthly payment

// console.assert(
//   calculatePayment(principal, rate, numPayments) === 2108.0201686472797
// );

function calculatePayment(P, r, n) {
  return P * ((r * (1 + r) ** n) / ((1 + r) ** n - 1));
}
