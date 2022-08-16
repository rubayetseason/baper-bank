
// withdraw work
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // get input field value 
    const withdrawField = document.getElementById('withdraw-field'); const newWithdrawAmountString = withdrawField.value;
    // convert into number 
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    if (isNaN(newWithdrawAmount)) {
        alert('please provide a valid number');
        withdrawField.value = '';
        return;
    }

    // get previous withdraw total 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    //    calculate total withdraw amount

    withdrawField.value = '';

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('you dont have sufficient money');
        return;
    }
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // set that value 
    withdrawTotalElement.innerText = currentWithdrawTotal;
    //  next step is to calculate the sum 
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

})