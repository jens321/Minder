var user = "float-right"; 

user_map = {
    "float-right": "float-left",
    "float-left": "float-right"
}

document.getElementById("toggle-user-button").addEventListener('click', function ( event ) {
    user = user_map[user]; 
});

document.getElementsByClassName("button-save")[0].addEventListener('click', function ( event ) {
    console.log(event); 
    var message = document.createElement("p");
    message.innerHTML = document.getElementsByClassName("message-bar")[0].value; 
    message.classList.add("message");
    message.classList.add(user); 
    document.getElementsByClassName("message-box")[0].appendChild(message); 
});