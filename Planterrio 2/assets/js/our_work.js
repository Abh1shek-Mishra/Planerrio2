 // --- Our Work Section (Swiper Carousel) ---

    // Initialize the Swiper Carousel
    var swiper = new Swiper(".mySwiper", { // Initializes the Swiper carousel using the class 'mySwiper'
        loop: true, // Enable infinite looping
        autoplay: { delay: 3000, disableOnInteraction: false }, // Auto slide every 3 seconds
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }, // Enable navigation arrows
        pagination: { el: ".swiper-pagination", clickable: true }, // Enable clickable pagination dots
    });
