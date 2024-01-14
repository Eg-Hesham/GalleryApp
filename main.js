let mainImage = document.querySelector(".main-image");
let innerImage = document.querySelectorAll(".inner-image");

innerImage.forEach( e => {
    e.addEventListener("click", _ => {
        let path = e.getAttribute("src");
        mainImage.setAttribute("src", path);
    });
});