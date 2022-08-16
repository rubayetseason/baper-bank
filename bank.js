// step 1 add eventListener to btn 
document.getElementById('btn-deposit').addEventListener('click', function(){
// step 2 get the deposit amount
const dipositField = document.getElementById('deposit-field');
const newDepositAmountString = dipositField.value;
// we need to turn the string to number 
const newDepositAmount = parseFloat(newDepositAmountString);
// step 3 get the deposit total amount
const depositTotalElement = document.getElementById('deposit-total');
const previousDepositTotalString = depositTotalElement.innerText;
const previousDepositTotal = parseFloat(previousDepositTotalString);
// sum up both previous and current value 
const currentDepositTotal = previousDepositTotal + newDepositAmount;

depositTotalElement.innerText = currentDepositTotal;

// next step is to get balance total 
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);
//  next step is to calculate the sum 
const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
// set the balance total
balanceTotalElement.innerText = currentBalanceTotal;

// last step clear the deposit field 
dipositField.value = '';
})