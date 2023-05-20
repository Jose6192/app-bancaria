/* usuarios y contraseñas */
localStorage.setItem("user", "jose")
localStorage.setItem("password", "123")

document.querySelector(".submit").addEventListener("click", function(){
    let user = document.querySelector("#user").value
    let password = document.querySelector("#password").value
    /* comprueba que la contraseña de localStorage sea igual a la introducida */
    if(localStorage.getItem("password") == password){
        window.location.href= "http://127.0.0.1:5500/src/html/main.html"
    }else{
        alert("uno de los datos es incorrecto")
    }
})

