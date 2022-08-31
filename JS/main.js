// Navbar

document.querySelector(".burger-menu").onclick = function () {
    this.classList.toggle("active");
    document.querySelector("nav").classList.toggle("active");
};

//  Map
const boxs = document.querySelectorAll(".testi .box");
let lastActive;
boxs.forEach(box => {
    box.firstElementChild.firstElementChild.onclick = () => {
        box.classList.toggle("active");
        if (box.classList.contains("active")) {
            if (lastActive) {
                lastActive.classList.remove("active");
            }
            lastActive = box;
        } else {
            lastActive = undefined;
        }
    };
});
