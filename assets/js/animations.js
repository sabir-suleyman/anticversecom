/*
 *      Anticverse Webraider
 *
 *      Maintainer: Ferit Yiğit BALABAN <balaban.ferityigit@anticverse.com>
 */

// anim-slide-right-appear
// anim-slide-up-appear
// anim-appear

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains("anim-slide-right-appear")) {
                entry.target.classList.add("slide-right-appear");
            } else if (entry.target.classList.contains("anim-slide-up-appear")) {
                entry.target.classList.add("slide-up-appear");
            } else if (entry.target.classList.contains("anim-appear")) {
                entry.target.classList.add("appear");
            }
        }
    });
});

let targets = document.querySelectorAll('.anim-slide-right-appear,.anim-slide-up-appear,.anim-appear');
targets.forEach(target => {
    observer.observe(target);
})