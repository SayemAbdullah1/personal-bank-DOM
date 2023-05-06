document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdraw = document.getElementById('withdraw-field')
    const withdrawAmount = withdraw.value;

    const withdrawTotalelement = document.getElementById('w-total')
    withdrawTotalelement.innerText = withdrawAmount;
})