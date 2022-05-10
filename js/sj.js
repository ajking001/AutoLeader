<<<<<<< HEAD
let feature-car-rent-box-1 = document.querySelector(".feature-car-rent-box-1")
let info = document.querySelector(".info")

info.addEventListener("click", () => {
    feature-car-rent-box-1.classList.add("open_info")
=======
let info = document.querySelector(".info")
let header_box = document.querySelector(".header_box")
let close_info = document.querySelector(".close_info")

info.addEventListener("click", () => {
    header_box.classList.add("open_info")

})

close_info.addEventListener("click", () => {
    header_box.classList.remove("open_info")
>>>>>>> b64186da263c93195206396bc2e2deeb525af9a5
})