var swiper = new Swiper(".popular__slider", {
    slidesPerView: "auto",
    grabCursor: true,
});

function toggleActive(el){
    el.classList.toggle('active')
}