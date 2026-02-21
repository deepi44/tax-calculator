function calculateTax(){

let income = Number(document.getElementById("income").value);
let deductions = Number(document.getElementById("deductions").value);

let taxableIncome = income - deductions;

let tax = taxableIncome * 0.2;

document.getElementById("result").innerText =
"Estimated Tax: $" + tax;

}
