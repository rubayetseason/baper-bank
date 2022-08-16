
// withdraw work
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // get input field value 
    const withdrawField = document.getElementById('withdraw-field'); const newWithdrawAmountString = withdrawField.value;
    // convert into number 
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // get previous withdraw total 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
//    calculate total withdraw amount
const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
// set that value 
withdrawTotalElement.innerText = currentWithdrawTotal;
withdrawField.value = '';

const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);
//  next step is to calculate the sum 
const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
// set the balance total
balanceTotalElement.innerText = currentBalanceTotal;

})