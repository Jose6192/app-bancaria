let amount = document.querySelector(".amount")
let accountBalance = parseFloat(localStorage.getItem("accountBalance"))
let button = document.querySelector(".submit")

/* genera un clave de retiro de 10 digitos */
function getWithdrawalKey() {
    let withdrawalKey = '';
    const length = 8;
    for (let i = 0; i < length; i++) {
        const numeroAleatorio = Math.floor(Math.random() * 10);
        withdrawalKey += numeroAleatorio.toString();
    }  
    return withdrawalKey;
}

  

button.addEventListener("click", function(){

    amount = parseFloat(document.querySelector("#amount").value)

    if(accountBalance>=amount){
        /* almacena el nuevo saldo de cuenta */
        let newBalance = accountBalance - amount
        /* actualiza el saldo en db */
        localStorage.setItem("accountBalance", newBalance)
    
        let withdrawalKey = getWithdrawalKey()
        alert(`tu numero de retiro es: ${withdrawalKey}`)
        
    }else{
        alert("la cuenta no tienes saldo suficiente")
    }
})

