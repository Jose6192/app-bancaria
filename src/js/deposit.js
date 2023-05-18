let acountNumber = document.querySelector("#acountNumber")
let amount = document.querySelector("#amount")
let concept =  document.querySelector("#concept")
let button = document.querySelector(".submit")


button.addEventListener("click", function(){

    let accountBalance = parseFloat(localStorage.getItem("accountBalance"))
    amount = parseFloat(document.querySelector("#amount").value)

    if(accountBalance>=amount){
        /* almacena el nuevo saldo de cuenta */
        let newBalance = accountBalance - amount
        /* actualiza el saldo en db */
        localStorage.setItem("accountBalance", newBalance)

        alert("deposito exitoso")
    }else{
        alert("la cuenta no tienes saldo suficiente")
    }
    
    
})