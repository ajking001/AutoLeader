let info = document.querySelector(".info")
let header_box = document.querySelector(".header_box")
let close_info = document.querySelector(".close_info")

info.addEventListener("click", () => {
    header_box.classList.add("open_info")
})
close_info.addEventListener("click", () => {
    header_box.classList.remove("open_info")
})