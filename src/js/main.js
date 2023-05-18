/* let user = localStorage.getItem(user) */

let user = localStorage.getItem("user")
let accountBalance = localStorage.getItem("accountBalance")

document.querySelector(".greeting").textContent = `¡Hola ${user}!`
document.querySelector(".accountBalance").textContent = `$${accountBalance}`
