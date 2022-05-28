let prevPos = window.scrollX;
const header = document.querySelector("header");
window.onscroll = function () {

    let currentScrollPos = window.pageYOffset;
    if (prevPos > currentScrollPos) {
        // new_header.classList.remove("header_hide");
        header.style.transform = "translate(0, 0)"
    } else {
        header.style.transform = "translate(0, -140px)"
        if (currentScrollPos <= 20) {
            // new_header.classList.remove("header_hide");
            header.style.transform = "translate(0, 0)";
        }
    }
    prevPos = currentScrollPos;
}
