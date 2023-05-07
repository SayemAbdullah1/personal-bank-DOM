document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdraw = document.getElementById('withdraw-field')
    const withdrawAmount = withdraw.value;
    const newWithDraw = parseFloat(withdrawAmount)
    // console.log(newWithDraw)

    const withdrawTotalelement = document.getElementById('w-total')
    const preWithdraw = withdrawTotalelement.innerText;
    const preWithdrawElement = parseFloat(preWithdraw)

    const totalWithdraw = preWithdrawElement + newWithDraw;
    withdrawTotalelement.innerText = totalWithdraw;
    
    const preWithTotal = document.getElementById('total-balance')
    const preTotal = preWithTotal.innerText
    const preTotalElement = parseFloat(preTotal)

    const totalWith = preTotalElement - totalWithdraw;
    preWithTotal.innerText = totalWith;
    

    withdraw.value = '';
})