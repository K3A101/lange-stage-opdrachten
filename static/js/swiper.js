const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoHeight: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    centerInsufficientSlides: true,
    centeredSlidesBounds: true,
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        activeEl: '.swiper-pagination-bullet-active',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

