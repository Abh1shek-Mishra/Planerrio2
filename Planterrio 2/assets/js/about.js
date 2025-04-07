
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.stat-number');
    let started = false;

    const startCount = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const increment = target / 200;

            const updateCount = () => {
                const current = +counter.innerText;

                if (current < target) {
                    counter.innerText = Math.ceil(current + increment);
                    requestAnimationFrame(updateCount);
                } else {
                    counter.innerText = target + "+";
                }
            };

            updateCount();
        });
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !started) {
                startCount();
                started = true;
            }
        });
    }, { threshold: 0.5 });

    observer.observe(document.querySelector('#stats'));
});
const cards = document.querySelectorAll('.testimonial-card');
const dotsContainer = document.querySelector('.testimonial-dots');

let current = 0;

// Create Dots
// Create Dots
cards.forEach((_, index) => {
    const dot = document.createElement('span');
    if(index === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
});

// Update Slider
function showTestimonial(index){
    cards.forEach(card => card.classList.remove('active'));
    dotsContainer.querySelectorAll('span').forEach(dot => dot.classList.remove('active'));
    cards[index].classList.add('active');
    dotsContainer.querySelectorAll('span')[index].classList.add('active');
}

// Auto Slide
setInterval(() => {
    current = (current + 1) % cards.length;
    showTestimonial(current);
}, 4000);

// Clickable Dots
dotsContainer.querySelectorAll('span').forEach((dot, idx) => {
    dot.addEventListener('click', () => {
        current = idx;
        showTestimonial(current);
    });
});
