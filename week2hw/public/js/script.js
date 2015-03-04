document.onreadystatechange = function () {
    var state = document.readyState;
    if (state == 'complete') {
        // Place all your clicking logic here.
        var about = document.getElementsByClassName('about-container');
        var picture = document.getElementsByClassName('picture-container');
        var members = document.getElementsByClassName('member-container');

    $("#about").onClick(function() {
        scrollWindow(findPos(about));
    })




    }
};

// This will help you with finding how much to scroll the window.
// elem is DOM element
function findPos(elem) {
    var top = 0;
    if (elem.offsetParent) {
        do {
            top += elem.offsetTop;
        } while (elem = elem.offsetParent);
        return [top];
    }

function scrollWindow(x) {
    window.scroll(0, x);
}
}
