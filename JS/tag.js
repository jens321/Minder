
document.getElementById("tag-input-field").addEventListener('keyup', function( event ) {
    if (event.key === ' ' || event.key === "Enter") {
        var newSpanTag = document.createElement('span');
        newSpanTag.innerHTML = this.value + "<button class = 'close-tag'>X</button>";
        newSpanTag.classList.add("tag-element"); 
        document.getElementById("tag-wrapper").appendChild(newSpanTag); 
        this.value = ""; 
        addDeleteToTags(); 
    }
});

var addDeleteToTags = function() {
    var tagList = document.getElementsByClassName("close-tag");
    Array.from(tagList).forEach(function (el) {
        el.addEventListener('click', function ( event ) { 
            document.getElementById("tag-wrapper").removeChild(event.path[1]); 
        });
    });
};

addDeleteToTags(); 
