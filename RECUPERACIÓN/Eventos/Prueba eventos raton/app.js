let corazon = document.getElementsByClassName('circle')[0]

// This handler will be executed only once when the cursor
// moves over the unordered list
corazon.addEventListener("mouseover", function(event) {
    // highlight the mouseenter target
    event.target.style.backgroundColor = 'rgb(155, 232, 2)'

    // reset the color after a short delay
    setTimeout(function() {
        event.target.style.color = "";
    }, 500);
}, false);