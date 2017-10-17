document.getElementsByClassName("profile-image")[0].addEventListener('click', function ( event ) {
    document.getElementById("upload-file-input-field").click();  
});

var extractFile = function(event) {
    document.getElementsByClassName("profile-image")[0].setAttribute("src", URL.createObjectURL(event.target.files[0])); 
}