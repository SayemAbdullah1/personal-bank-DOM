document.getElementById('btn-deposit').addEventListener('click', function(){
    const deposit = document.getElementById('deposit-field')
    const depositAmount = deposit.value;
    const newDeposit = parseFloat(depositAmount)
    
    const depositTotalElement = document.getElementById('deposit-total')
    const depositEle = depositTotalElement.innerText;
    const preDeposit = parseFloat(depositEle);

    const currentDepositTotal = preDeposit + newDeposit;
    depositTotalElement.innerText = currentDepositTotal;

    const preDepositTotal = document.getElementById('total-balance')
    const preTotal = preDepositTotal.innerText
    const preTotalElement = parseFloat(preTotal)

    const totalDeposit = preTotalElement + currentDepositTotal;
    preDepositTotal.innerText = totalDeposit;
    // console.log(preTotalElement)

    deposit.value = '';
})