function calculate(annualAmount, interestRate, totalYears) {
  let totalInvested = annualAmount * totalYears;
  let i = interestRate / 100;

  let f = annualAmount * ((Math.pow(1 + i, totalYears) - 1) / i);
  return {
    maturity: f,
    totalInterest: f - totalInvested,
  };
}
console.log(calculate(100000, 7.1, 15));
module.exports = calculate;
