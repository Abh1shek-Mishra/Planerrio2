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
