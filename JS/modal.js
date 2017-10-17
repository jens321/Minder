document.getElementById("signup-button").addEventListener("click", function( event ) {
    document.getElementById("signup-modal").classList.remove("hidden"); 
    document.getElementById("login-modal").classList.add("hidden"); 
    document.getElementsByClassName("pseudo")[0].style.opacity = 0.9; 
    document.getElementById("icon-close").classList.remove("hidden");
    document.getElementById("signup-button").classList.add("hidden");
    document.getElementById("login-button").classList.add("hidden");
});

document.getElementById("login-button").addEventListener("click", function ( event ) {
    document.getElementById("login-modal").classList.remove("hidden");
    document.getElementById("signup-modal").classList.add("hidden");
    document.getElementById("icon-close").classList.remove("hidden");
    document.getElementById("signup-button").classList.add("hidden");
    document.getElementById("login-button").classList.add("hidden");
    document.getElementsByClassName("pseudo")[0].style.opacity = 0.9;
}); 

document.getElementById("icon-close").addEventListener("click", function ( event ) {
    document.getElementById("login-modal").classList.add("hidden");
    document.getElementById("signup-modal").classList.add("hidden");
    document.getElementById("icon-close").classList.add("hidden");
    document.getElementById("signup-button").classList.remove("hidden");
    document.getElementById("login-button").classList.remove("hidden");
    document.getElementsByClassName("pseudo")[0].style.opacity = 0.3;
});
