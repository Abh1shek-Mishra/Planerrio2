// Wait for the DOM to be fully loaded before running scripts
document.addEventListener("DOMContentLoaded", function () {

    // --- Our Process Section Hover Effects ---

    // Select all elements with the class 'process-box'
    const boxes = document.querySelectorAll(".process-box"); // Targets all elements with the class 'process-box'

    // Add hover effect to each box
    boxes.forEach(box => {
        box.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.05)"; // Slightly enlarge the box
            this.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)"; // Add shadow effect
        });

        box.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)"; // Restore original size
            this.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.2)"; // Restore original shadow
        });
    });

    // --- Our Work Section (Swiper Carousel) ---

    // Initialize the Swiper Carousel
    var swiper = new Swiper(".mySwiper", { // Initializes the Swiper carousel using the class 'mySwiper'
        loop: true, // Enable infinite looping
        autoplay: { delay: 3000, disableOnInteraction: false }, // Auto slide every 3 seconds
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }, // Enable navigation arrows
        pagination: { el: ".swiper-pagination", clickable: true }, // Enable clickable pagination dots
    });

    // --- Stats Section Counter Animation ---

    // Select all elements that contain numbers to be animated
    const counters = document.querySelectorAll('.stat-number'); // Targets all elements with the class 'stat-number'
    let started = false; // Flag to prevent repeated animations

    // Function to start counting animation
    const startCount = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target'); // Get target number from data attribute
            const increment = target / 200; // Calculate small increments

            // Function to increment the number
            const updateCount = () => {
                const current = +counter.innerText; // Get current displayed number

                if (current < target) {
                    counter.innerText = Math.ceil(current + increment); // Increase number smoothly
                    requestAnimationFrame(updateCount); // Continue animation
                } else {
                    counter.innerText = target + "+"; // Display final value with "+"
                }
            };

            updateCount(); // Start updating number
        });
    };

    // Observer to check when the stats section comes into view
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !started) { // If stats section is visible and animation hasn't started
                startCount(); // Start counting animation
                started = true; // Mark animation as started
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

    observer.observe(document.querySelector('#stats')); // Observe the stats section

    // --- Testimonials Section Slider ---

    const cards = document.querySelectorAll('.testimonial-card'); // Get all testimonial cards
    const dotsContainer = document.querySelector('.testimonial-dots'); // Get the dot navigation container

    let current = 0; // Track the current slide

    // Create dots for each testimonial
    cards.forEach((_, index) => {
        const dot = document.createElement('span'); // Create a dot
        if (index === 0) dot.classList.add('active'); // Activate the first dot
        dotsContainer.appendChild(dot); // Add dot to the container
    });

    // Function to show a specific testimonial
    function showTestimonial(index) {
        // Remove 'active' class from all cards and dots
        cards.forEach(card => card.classList.remove('active'));
        dotsContainer.querySelectorAll('span').forEach(dot => dot.classList.remove('active'));

        // Add 'active' class to the selected card and dot
        cards[index].classList.add('active');
        dotsContainer.querySelectorAll('span')[index].classList.add('active');
    }

    // Auto-slide testimonials every 4 seconds
    setInterval(() => {
        current = (current + 1) % cards.length; // Move to the next testimonial
        showTestimonial(current); // Show the updated testimonial
    }, 4000);

    // Enable clickable dots to navigate testimonials
    dotsContainer.querySelectorAll('span').forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            current = idx; // Update the current index
            showTestimonial(current); // Show the selected testimonial
        });
    });
});