console.log('hello')
document.getElementById('button').addEventListener('click', function(){
    const emailField = document.getElementById('email')
    const email = emailField.value;
    const passField = document.getElementById('pass')
    const pass = passField.value;
    if(email === 'sayem@gmail.com' && pass === '12345'){
        console.log('Welcome')
    }else{
        console.log('Invalid user')
    }
    // console.log(email, pass)
})