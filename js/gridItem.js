function toggleItem(num) {
    // Get items from Recent Work
    var recentWork = document.querySelector("#recent-work");
    var item = recentWork.querySelectorAll(".item");
    var itemBtn = recentWork.querySelectorAll(".item-btn");

    // Lower opacity for item button
    itemBtn[num].style.opacity = ".3";

    // Prevent multiple active items
    for (var i = 0; i < item.length; i++) {
        item[i].classList.remove("active");
    }

    // Make item active
    item[num].classList.toggle("active");
}

function closeItems() {
    // Remove active class
    for (var i = 0; i < item.length; i++) {
        item[i].classList.remove("active");
    }
}