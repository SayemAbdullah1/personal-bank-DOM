document.getElementById('btn-deposit').addEventListener('click', function(){
    const deposit = document.getElementById('deposit-field')
    const depositAmount = deposit.value;
    
    const depositTotalelement = document.getElementById('deposit-total')
    depositTotalelement.innerText = depositAmount;
})