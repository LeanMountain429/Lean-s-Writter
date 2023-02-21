function addUser() {

    user_name = document.getElementById("user_name").value;

    if (user_name.length>1){
        localStorage.setItem("user_name", user_name);
    
        window.location = "writter_room.html";
    }
    else{
        alert("Ponga su user o no lo atiende Lean jeje")
    }

  }