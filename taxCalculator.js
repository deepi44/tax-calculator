function taxCalculator(income, deductions){

income = Number(income);
deductions = Number(deductions);

let taxable = income - deductions;

return taxable * 0.2;

}

module.exports = taxCalculator;
