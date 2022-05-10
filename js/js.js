let info = document.querySelector(".info")
let header_box = document.querySelector(".header_box")
let close_info = document.querySelector(".close_info")

info.addEventListener("click", () => {
    header_box.classList.toggle("open_info")
    info.toggle()
})
close_info.addEventListener("click", () => {
    header_box.classList.remove("open_info")
})
//carousel header 
// let navLinks = document.querySelectorAll(".carousel .nav-link");
// let slides = document.querySelectorAll(".carousel .slides img");
// let overlays = document.querySelectorAll(".carousel .bar");
// let maxZIndex = navLinks.length;
// let easeInOutQuart = "cubic-bezier(0.77, 0, 0.175, 1)";
// slides[0].classList.add("active");
// navLinks[0].classList.add("active");
// navLinks.forEach((navLink, activeIndex) => {
//   (overlays[activeIndex] as HTMLElement).style.zIndex = `${navLinks.length -
//     activeIndex}`;
//   navLink.addEventListener("click", () => {
//     // nav-link
//     navLinks.forEach(navLink => navLink.classList.remove("active"));
//     navLink.classList.add("active");
//     // slide
//     let currentSlide = document.querySelector(".carousel .slides img.active");
//     let slideFadeOut = currentSlide.animate(
//       [
//         { transform: "translateX(0)", opacity: 1 },
//         { transform: "translateX(5%)", opacity: 0 }
//       ],
//       {
//         duration: 600,
//         easing: "ease-in",
//         fill: "forwards"
//       }
//     );
//     slideFadeOut.onfinish = () => {
//       slides.forEach(slide => slide.classList.remove("active"));
//       let activeSlide = slides[activeIndex];
//       activeSlide.classList.add("active");
//       activeSlide.animate(
//         [
//           {
//             transform: "translateX(-5%)",
//             opacity: 0
//           },
//           {
//             transform: "translateX(0)",
//             opacity: 1
//           }
//         ],
//         { duration: 600, easing: "ease-out", fill: "forwards" }
//       );
//     };
//     // overlay
//     maxZIndex += 1;
//     let activeOverlay = overlays[activeIndex];
//     (activeOverlay as HTMLElement).style.zIndex = `${maxZIndex}`;
//     activeOverlay.animate(
//       [{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }],
//       { duration: 1200, fill: "forwards", easing: easeInOutQuart }
//     );
//   });
// });
