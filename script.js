const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoplay: true,
    effect: 'fade',


    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


const burgerButton = document.querySelector('.burger-button')

burgerButton.onclick = function () {

    const burgerMenu = document.querySelector('.burger-menu')
    burgerMenu.classList.toggle('burger-menu-open')

    const burgerListMenu = document.querySelector('.burger-list-menu')
    burgerListMenu.classList.toggle('burger-list-menu-open')

     if(burgerMenu.classList.contains('burger-menu-open')) {
        document.body.style.overflow = "hidden"
        document.body.style.paddingRight = "17px"

     } else {
        document.body.style.overflow = "auto"
        document.body.style.paddingRight = "0"
     }

}