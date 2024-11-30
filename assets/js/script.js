window.onload = function () {
    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    }, false);
    document.addEventListener("keydown", function (e) {
        //document.onkeydown = function(e) {
        // "I" key
        if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
            disabledEvent(e);
        }
        //"A" key
        if (e.ctrlKey && e.keyCode == 65) {
            disabledEvent(e);
        }
        // "J" key
        if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
            disabledEvent(e);
        }
        // "S" key + macOS
        if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
            disabledEvent(e);
        }
        // "U" key
        if (e.ctrlKey && e.keyCode == 85) {
            disabledEvent(e);
        }
        // "F12" key
        if (event.keyCode == 123) {
            disabledEvent(e);
        }
        // "C" key
        if (e.ctrlKey && e.keyCode == 67) {
            disabledEvent(e);
        }
    }, false);
    function disabledEvent(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        } else if (window.event) {
            window.event.cancelBubble = true;
        }
        e.preventDefault();
        return false;
    }
};
$(document).ready(function () {
    //Disable cut copy paste
    $('body').bind('cut copy paste', function (e) {
        e.preventDefault();
    });
    //Disable mouse right click
    $("body").on("contextmenu", function (e) {
        return false;
    });
});
// Select all nav links
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
// Add click event listener to each link
navLinks.forEach((link) => {
    link.addEventListener("click", function () {
        // Remove 'active' class from all links
        navLinks.forEach((nav) => nav.classList.remove("active"));
        // Add 'active' class to the clicked link
        this.classList.add("active");
    });
});