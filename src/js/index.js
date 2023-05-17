/* usuarios y contraseñas */
localStorage.setItem("user", "jose")
localStorage.setItem("password", "123")

document.querySelector(".submit").addEventListener("click", function(){
    let user = document.querySelector("#user").value
    let password = document.querySelector("#password").value
    /* comprueba que la contraseña de localStorage sea igual a la introducida */
    if(localStorage.getItem(password) == password){
        window.location.href= "./html/main.html"
    }else{
        alert("uno de los datos es incorrecto")
    }
})

