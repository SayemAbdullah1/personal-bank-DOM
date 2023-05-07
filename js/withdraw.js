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
    console.log(totalWithdraw)
    // withdrawTotalelement.innerText = withdrawAmount;
    withdraw.value = '';
})