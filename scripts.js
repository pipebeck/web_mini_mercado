document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {

        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        
        // Configuração da navegação
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            disabledClass: 'swiper-button-disabled'
        },
        
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        
        breakpoints: {
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 }
        }
    });
});