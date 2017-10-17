document.getElementById("edit-button").addEventListener("click", function ( event ) {
    document.getElementById("view-profile").classList.add("hidden");
    document.getElementById("edit-profile").classList.remove("hidden");
});

document.getElementById("profile-save-button").addEventListener("click", function( event ) {
    document.getElementById("view-profile").classList.remove("hidden");
    document.getElementById("edit-profile").classList.add("hidden");
});