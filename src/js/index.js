/* usuarios y contraseñas */
localStorage.setItem("jose", "123")
localStorage.setItem("montoya", "password")

document.querySelector(".submit").addEventListener("click", function(){
    let user = document.querySelector("#user").value
    let password = document.querySelector("#password").value
    /* comprueba que la contraseña de localStorage sea igual a la introducida */
    if(localStorage.getItem(user) == password){
        window.location.href= "./html/main.html"
    }else{
        alert("uno de los datos es incorrecto")
    }
})