const $el = document.getElementById('please-scroll-down');
let fadeEffect;

window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        // If the user has scrolled down, fade out the element
        clearInterval(fadeEffect);
        fadeEffect = setInterval(function() {
            if (!$el.style.opacity) {
                $el.style.opacity = "1";
            }
            if ($el.style.opacity > 0) {
                $el.style.opacity -= "0.1";
            } else {
                clearInterval(fadeEffect);
                $el.style.display = 'none';
            }
        }, 50);
    } else {
        // If the user is at the top of the page, fade in the element
        clearInterval(fadeEffect);
        $el.style.opacity = "1";
        $el.style.display = 'block';
    }
});

function closeAnnouncement() {
    document.getElementById("announcement").style["display"] = "none";
    document.getElementById("announcement").remove();
}