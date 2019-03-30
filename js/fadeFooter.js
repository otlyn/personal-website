function fadeFooter() {
    // FOOTER ELEMENT
    const FOOTER = document.querySelector(".bottom footer");

    var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
    var winHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    // Make percentage
    var scrollPercent = (winScroll / winHeight) * 100;

    // If more than 98 percent opacity 1 otherwise .25
    scrollPercent > 98
        ? (FOOTER.style.opacity = "1")
        : (FOOTER.style.opacity = "0.25");
}

window.addEventListener("scroll", fadeFooter, false);
