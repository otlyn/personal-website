function scrollIndicator() {
    // Circle and Bar
    const BAR_INDICATOR = document.querySelector("#bar-indicator");
    const CIR_INDICATOR = document.querySelector("#cir-indicator");
    const CIR_CANVAS = CIR_INDICATOR.querySelector("canvas");
    const CIR_PERCENT = CIR_INDICATOR.querySelector("p");

    var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
    var winHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    // If desktop size and .getContext are available
    // ...create circle indicator
    // ...otherwise create bar indicator
    if (window.innerWidth >= 1000 && CIR_CANVAS.getContext) {
        // Circle
        var circleScroll = (winScroll / winHeight) * (Math.PI * 2); // the magic for circular scrolling
        var circlePercent = Math.round((winScroll / winHeight) * 100); // creates the percent numbers

        var circle = CIR_CANVAS.getContext("2d");

        // Adjust size options
        var lineThickness = 2.5;
        // Circle size interacts with (#cir-indicator canvas) in css
        // Default size is 75 (& 4rem in CSS)
        var size = 75;

        // Make height and width equal
        CIR_CANVAS.height = size;
        CIR_CANVAS.width = size;

        // Variables for circle.arc()
        var x = size / 2; // x-coordinate of the center of the circle
        var y = x; // y-coordinate of the center of the circle
        var r = x - lineThickness + 0.5; // radius of the circle
        var sAngle = 1.5 * Math.PI; // starting angle, in radians
        var scroll = sAngle + circleScroll; // ending angle, in radians

        // Draw the circle
        circle.beginPath();
        circle.arc(x, y, r, sAngle, scroll); // scroll is the magic here
        circle.lineWidth = lineThickness;
        circle.strokeStyle = "rgba(127, 255, 212, 0.75)";
        circle.stroke();

        // write the number percentage
        CIR_PERCENT.textContent = circlePercent + "%";
    } else {
        // Bar
        var barScroll = (winScroll / winHeight) * 100;
        BAR_INDICATOR.style.width = barScroll + "%";
    }
}

window.addEventListener("scroll", scrollIndicator, false);
